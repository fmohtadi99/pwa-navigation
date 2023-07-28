import React from "react";
import { appConfig, userConfig } from "../index";
import { registeredScreens } from "./loader";
import { closeDrawer } from "./drawer";
import { createPage, errorHandlers, removePage, theRoutes } from "../functions";

/** Shows the next screen. */
export const navigate = (screenId: string, options?: object) => {
	closeDrawer();
	const component = registeredScreens.find(c => c.id === screenId);
	if (!component) {
		errorHandlers.notFound(screenId);
		return;
	}
	userConfig.disableBackFunction &&
		window.history.pushState(null, "", location.href);
	const length = theRoutes.length();
	const uid = [appConfig.packageName, screenId, length].join("-");
	createPage(component.screen, uid, length, options);

	// Apply transition style for current screen
	const thisScreenId = theRoutes.last();
	const thisScreen = document.getElementById(thisScreenId) as HTMLElement;
	thisScreen.style.transitionDuration = `${
		userConfig.transitionDuration! / 1000
	}s`;
	const thisKeys = Object.keys(userConfig.transitionStyle!.this);
	thisKeys.forEach(key => {
		thisScreen.style[key] = userConfig.transitionStyle!.this[key][1];
	});

	// Apply transition style for next screen
	setTimeout(() => {
		const nextScreen = document.getElementById(uid) as HTMLElement;
		const Y = window.scrollY;
		nextScreen.style.top = `${Y}px`;
		nextScreen.style.transitionDuration = `${
			userConfig.transitionDuration! / 1000
		}s`;
		const nextKeys = Object.keys(userConfig.transitionStyle!.next);
		nextKeys.forEach(key => {
			nextScreen.style[key] = userConfig.transitionStyle!.next[key][1];
		});
		theRoutes.add(uid);
	}, 10);
};

/** Shows the previous screen. */
export const goBack = () => {
	// Apply transition style for previous screen
	const previousScreenId = theRoutes.previous();
	const previousScreen = document.getElementById(
		previousScreenId
	) as HTMLElement;
	previousScreen.style.transitionDuration = `${
		userConfig.transitionDuration! / 1500
	}s`;
	const previousKeys = Object.keys(userConfig.transitionStyle!.this);
	previousKeys.forEach(key => {
		previousScreen.style[key] = userConfig.transitionStyle!.this[key][0];
	});

	// Apply transition style for last screen
	const lastScreenId = theRoutes.last();
	const lastScreen = document.getElementById(lastScreenId) as HTMLElement;
	lastScreen.style.transitionDuration = `${
		userConfig.transitionDuration! / 1500
	}s`;
	const lastKeys = Object.keys(userConfig.transitionStyle!.next);
	lastKeys.forEach(key => {
		lastScreen.style[key] = userConfig.transitionStyle!.next[key][0];
	});

	setTimeout(() => {
		theRoutes.pop();
		removePage();
	}, userConfig.transitionDuration! / 1.5);
};

export const $routes: {
	child: React.ReactElement;
	props: {
		className: string;
		id: string;
		style: React.CSSProperties;
	};
}[] = [];

export let $updateRoutes = e => e;

export const Router = () => {
	const [routes, setRoutes] = React.useState(new Date().getTime());
	$updateRoutes = setRoutes;

	return $routes.map((c, i) =>
		React.createElement("section", { ...c.props, key: i }, c.child)
	);
};

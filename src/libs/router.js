import React, { useEffect } from "react";
import { appConfig, registeredScreens, userConfig } from "../index";
import { closeDrawer } from "./drawer";
import { createPage, errorHandlers, removePage, theRoutes } from "../functions";

/**
 * @param {string} screenId
 * @param {object} options
 */
export const navigate = (screenId, options) => {
	closeDrawer();
	errorHandlers.notFound(screenId); // Check if screenId is registered
	userConfig.disableBackFunction &&
		window.history.pushState(null, null, location.href);

	const length = theRoutes.length();
	const uid = [appConfig.packageName, screenId, length].join("-");
	const component = registeredScreens.find(c => c.id === screenId);

	createPage(component.screen, uid, length, options);

	// Apply transition style for current screen
	const thisScreenId = theRoutes.last();
	const thisScreen = document.getElementById(thisScreenId);
	thisScreen.style.transitionDuration = `${
		userConfig.transitionDuration / 1000
	}s`;
	const thisKeys = Object.keys(userConfig.transitionStyle.this);
	thisKeys.forEach(key => {
		thisScreen.style[key] = userConfig.transitionStyle.this[key][1];
	});

	// Apply transition style for next screen
	setTimeout(() => {
		const nextScreen = document.getElementById(uid);
		const Y = window.scrollY;
		nextScreen.style.top = `${Y}px`;
		nextScreen.style.transitionDuration = `${
			userConfig.transitionDuration / 1000
		}s`;
		const nextKeys = Object.keys(userConfig.transitionStyle.next);
		nextKeys.forEach(key => {
			nextScreen.style[key] = userConfig.transitionStyle.next[key][1];
		});
		theRoutes.add(uid);
	}, 10);
};

export const goBack = () => {
	// Apply transition style for previous screen
	const previousScreenId = theRoutes.previous();
	const previousScreen = document.getElementById(previousScreenId);
	previousScreen.style.transitionDuration = `${
		userConfig.transitionDuration / 1500
	}s`;
	const previousKeys = Object.keys(userConfig.transitionStyle.this);
	previousKeys.forEach(key => {
		previousScreen.style[key] = userConfig.transitionStyle.this[key][0];
	});

	// Apply transition style for last screen
	const lastScreenId = theRoutes.last();
	const lastScreen = document.getElementById(lastScreenId);
	lastScreen.style.transitionDuration = `${
		userConfig.transitionDuration / 1500
	}s`;
	const lastKeys = Object.keys(userConfig.transitionStyle.next);
	lastKeys.forEach(key => {
		lastScreen.style[key] = userConfig.transitionStyle.next[key][0];
	});

	setTimeout(() => {
		theRoutes.pop();
		removePage();
	}, userConfig.transitionDuration / 1.5);
};

export const $routes = [];
export let $updateRoutes = e => e;

export const Router = () => {
	const [routes, setRoutes] = React.useState(new Date().getTime());
	$updateRoutes = setRoutes;

	return $routes.map((c, i) =>
		React.createElement(c.type, { ...c.props, key: i }, c.child)
	);
};

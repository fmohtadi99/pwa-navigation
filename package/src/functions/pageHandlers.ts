import React from "react";
import { appConfig, userConfig } from "../index";
import { $routes, $updateRoutes } from "../libs/router";

/** Renders next screen. */
export const createPage = (
	component: React.ComponentType,
	id: string,
	zIndexIncrement: number,
	options?: object
) => {
	const route = React.createElement(component, options);
	const styleKeys = Object.keys(userConfig.transitionStyle!.next);
	const style = {};
	styleKeys.forEach(key => {
		style[key] = userConfig.transitionStyle!.next[key][0];
	});
	const section = {
		props: {
			id,
			className: appConfig.classRouter,
			style: {
				...style,
				transitionTimingFunction: userConfig.transitionEase,
				zIndex: userConfig.zIndex! + zIndexIncrement,
			},
		},
		child: route,
	};
	$routes.push(section);
	$updateRoutes(new Date().getTime());
};

/** Removes the last screen. */
export const removePage = () => {
	$routes.pop();
	$updateRoutes(new Date().getTime());
};

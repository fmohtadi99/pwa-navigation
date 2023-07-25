//@ts-check
import React from "react";
import { appConfig, userConfig } from "../index";
import { $routes, $updateRoutes } from "../libs/router";

export const createPage = (component, id, zIndexIncrement, options) => {
	const route = React.createElement(component, options);
	const styleKeys = Object.keys(userConfig.transitionStyle.next);
	const style = {};
	styleKeys.forEach(key => {
		style[key] = userConfig.transitionStyle.next[key][0];
	});

	/**
	 * @type {{
	 * 	type: "section",
	 * 	props: {
	 * 		id: string;
	 * 		className: string;
	 * 		style: React.CSSProperties;
	 * 	},
	 *		child: React.ReactNode;
	 * }}
	 */
	const section = {
		type: "section",
		props: {
			id,
			className: appConfig.classRouter,
			style: {
				...style,
				transitionTimingFunction: userConfig.transitionEase,
				zIndex: userConfig.zIndex + zIndexIncrement,
			},
		},
		child: route,
	};
	$routes.push(section);
	$updateRoutes(new Date().getTime());
};

export const removePage = () => {
	$routes.pop();
	$updateRoutes(new Date().getTime());
};

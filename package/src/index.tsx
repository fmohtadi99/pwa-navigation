"use client";
import React from "react";
import { defaultTransitionStyle } from "./animations/default";
import { backFunction, errorHandlers } from "./functions";
import { INavigationProps, IUserConfig } from "./interfaces";
import { LoadDrawer, LoadRouter } from "./libs/loader";
import "./style.css";

/** Package name */
const PACKAGE_NAME = "pwa-navigation";

/** App configuration */
export const appConfig = {
	/** Classname for drawer */
	classDrawer: `${PACKAGE_NAME}-drawer`,

	/** Classname for router */
	classRouter: `${PACKAGE_NAME}-router`,

	/** Package name */
	packageName: PACKAGE_NAME,

	/** Storage key for router */
	storageKey: `${PACKAGE_NAME}-routes`,
};

/** User configuration */
export var userConfig: IUserConfig = {
	actionDelay: 10,
	transitionDuration: 650,
	transitionEase: "cubic-bezier(0.16, 1, 0.3, 1)",
	transitionStyle: defaultTransitionStyle,
	disableBackFunction: true,
	zIndex: 10000,
};

/** Navigation package */
export default function Navigation({
	configuration,
	drawer,
	screens,
}: INavigationProps): React.JSX.Element {
	userConfig = { ...userConfig, ...configuration };
	errorHandlers.styleOverload(userConfig.transitionStyle!);
	errorHandlers.mismatchTiming(
		userConfig.actionDelay!,
		userConfig.transitionDuration!
	);
	global.onpopstate = backFunction;

	return (
		<>
			<LoadDrawer drawer={drawer} />
			<LoadRouter screens={screens} />
		</>
	);
}

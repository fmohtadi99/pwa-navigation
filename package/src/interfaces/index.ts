import React from "react";
import { ITransitionCSS } from "./transitionCSS";

export interface IComProps {
	component: React.ComponentType;
	props?: object;
}

export interface INavigationProps {
	/** User configuration
	 * - actionDelay: `number`;
	 * - transitionDuration: `number`;
	 * - transitionEase: `string`;
	 * - transitionStyle: `ITransitionStyle`;
	 * - disableBackFunction: `boolean`;
	 * - zIndex: `number`;
	 */
	configuration?: IUserConfig;

	/** Drawer component */
	drawer?: React.ComponentType;

	/** Router screen components */
	screens?: IScreens[];
}

export interface IScreens {
	/** Use the ID to point to the screen. */
	id: string;

	/** Screen component. */
	screen: React.ComponentType;
}

export interface ITransitionStyle {
	/** CSS style for the current screen. */
	this: ITransitionCSS;

	/** CSS style for the next screen. */
	next: ITransitionCSS;
}

export interface IUserConfig {
	actionDelay?: number;
	transitionDuration?: number;
	transitionEase?: string;
	transitionStyle?: ITransitionStyle;
	disableBackFunction?: boolean;
	zIndex?: number;
}

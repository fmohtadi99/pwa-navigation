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

export interface IStyle {
	[key: string]: string;
}

export interface ITransitionStyle {
	/** CSS style for the current screen. */
	this: ITransitionCSS;

	/** CSS style for the next screen. */
	next: ITransitionCSS;
}

export interface IUserConfig {
	/** Delay between calling functions while showing or hiding screens (ms)
	 *
	 * **Default:** `10`
	 */
	actionDelay?: number;

	/** Duration of changing screens (ms)
	 *
	 * **Default:** `650`
	 */
	transitionDuration?: number;

	/** Ease of transition
	 *
	 * **Default:** `"cubic-bezier(0.16, 1, 0.3, 1)"`
	 */
	transitionEase?: string;

	/** Transition of changing between screens */
	transitionStyle?: ITransitionStyle;

	/** Usage of browser back function:
	 *
	 * `true` : For previous screen
	 *
	 * `false` : For previous URL
	 *
	 * **Default:** `true`
	 */
	disableBackFunction?: boolean;

	/** Z-index of whole module
	 *
	 * **Default:** `10000`
	 */
	zIndex?: number;
}

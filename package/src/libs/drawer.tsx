import React from "react";
import { appConfig, userConfig } from "../index";
import { errorHandlers, theRoutes } from "../functions";
import { IComProps } from "../interfaces";

/** Opens the drawer. */
export const openDrawer = (options?: object) => {
	window.history.pushState(null, "", location.href);
	const drawer = document.getElementById(appConfig.classDrawer);
	if (!drawer) {
		errorHandlers.noDrawer();
		return;
	}
	drawer.setAttribute("data-open", "opened");

	const currentScreenId = theRoutes.last();
	const currentScreen = document.getElementById(currentScreenId) as HTMLElement;
	currentScreen.style.transform = "translateX(20%)";
	currentScreen.style.filter = "brightness(0.4)";
};

/** Closes the drawer. */
export const closeDrawer = () => {
	const drawer = document.getElementById(appConfig.classDrawer);
	if (!drawer) return;
	drawer.removeAttribute("data-open");

	const currentScreenId = theRoutes.last();
	const currentScreen = document.getElementById(currentScreenId) as HTMLElement;
	currentScreen.style.transform = "translateX(0px)";
	currentScreen.style.filter = "none";
};

export const Drawer = ({ component, props }: IComProps) => {
	// Todo: Enable props for drawer
	return (
		<section
			className={appConfig.classDrawer}
			id={appConfig.classDrawer}
			style={{
				zIndex: userConfig.zIndex! * 2,
			}}>
			<div
				className={appConfig.classDrawer + "-cover"}
				onClick={closeDrawer}
			/>
			<div className={appConfig.classDrawer + "-container"}>
				{React.createElement(component, props)}
			</div>
		</section>
	);
};

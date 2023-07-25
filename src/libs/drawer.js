import React from "react";
import { appConfig, userConfig } from "../index";
import { errorHandlers, theRoutes } from "../functions";

export const openDrawer = () => {
	window.history.pushState(null, null, location.href);
	const drawer = document.getElementById(appConfig.classDrawer);
	errorHandlers.noDrawer(drawer);
	drawer.setAttribute("data-open", "opened");

	const currentScreenId = theRoutes.last();
	const currentScreen = document.getElementById(currentScreenId);
	currentScreen.style.transform = "translateX(20%)";
	currentScreen.style.filter = "brightness(0.4)";
};

export const closeDrawer = () => {
	const drawer = document.getElementById(appConfig.classDrawer);
	if (!drawer) return;
	drawer.removeAttribute("data-open");

	const currentScreenId = theRoutes.last();
	const currentScreen = document.getElementById(currentScreenId);
	currentScreen.style.transform = "translateX(0px)";
	currentScreen.style.filter = "none";
};

export const Drawer = ({ component }) => {
	return (
		<section
			className={appConfig.classDrawer}
			id={appConfig.classDrawer}
			style={{
				zIndex: userConfig.zIndex * 2,
			}}>
			<div
				className={appConfig.classDrawer + "-cover"}
				onClick={closeDrawer}
			/>
			<div className={appConfig.classDrawer + "-container"}>
				{React.createElement(component)}
			</div>
		</section>
	);
};

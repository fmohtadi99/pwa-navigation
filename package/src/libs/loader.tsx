import React from "react";
import { IScreens } from "../interfaces";
import { Drawer } from "./drawer";
import { Router } from "./router";
import { theRoutes } from "../functions";
import { appConfig } from "../index";

/** An array of screen components */
export var registeredScreens: IScreens[];

interface ILoadRouterProps {
	screens?: IScreens[];
}

export const LoadRouter = ({ screens }: ILoadRouterProps) => {
	if (!screens) return;
	registeredScreens = screens;
	const initialScreenId = screens[0].id;
	const initialScreen = screens[0].screen;
	const initial = React.createElement(initialScreen, {});
	theRoutes.init(initialScreenId);

	const html = document.getElementsByTagName("html")[0];
	const body = document.getElementsByTagName("body")[0];
	const parents = [html, body];
	setTimeout(() => {
		parents.forEach(parent => {
			parent.setAttribute(
				"style",
				"height: 100dvh; width: 100dvw; overflow: hidden;"
			);
		});
	}, 10);

	return (
		<>
			<section
				id={initialScreenId}
				className={appConfig.classRouter}
				style={{
					transform: "translateX(0)",
					position: "relative",
				}}>
				{initial}
			</section>
			<Router />
		</>
	);
};

interface ILoadDrawerProps {
	drawer?: React.ComponentType;
}

export const LoadDrawer = ({ drawer }: ILoadDrawerProps) => {
	if (drawer) return <Drawer component={drawer} />;
};

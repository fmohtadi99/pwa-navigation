import { appConfig } from "../index";
import { theRoutes } from "./theRoutes";
import { closeDrawer } from "../libs/drawer";
import { goBack } from "../libs/router";

export const backFunction = () => {
	global.history.pushState(null, "", location.href);

	const drawer = document.getElementById(appConfig.classDrawer);
	if (drawer) {
		const drawerOpened = drawer.getAttribute("data-open");
		if (drawerOpened === "opened") return closeDrawer();
	}

	if (theRoutes.length() > 1) return goBack();
};

import { theRoutes } from "./theRoutes";
import { goBack } from "../libs/router";

export const closeAll = () => {
	// todo: improve the performance of this function
	const n = theRoutes.length();
	if (n <= 1) return;
	for (let i = 1; i < n; i++) {
		setTimeout(goBack, 200 * i);
	}
};

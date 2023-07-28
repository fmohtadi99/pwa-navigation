import { ITransitionStyle } from "../interfaces";

export const ios: ITransitionStyle = {
	this: {
		transform: ["translateX(0)", "translateX(-50%)"],
	},
	next: {
		transform: ["translateX(100%)", "translateX(0)"],
	},
};

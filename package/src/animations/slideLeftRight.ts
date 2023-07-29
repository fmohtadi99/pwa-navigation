import { ITransitionStyle } from "../interfaces";

export const slideLeftRight: ITransitionStyle = {
	this: {
		transform: ["translateX(0)", "translateX(100%)"],
	},
	next: {
		transform: ["translateX(-100%)", "translateX(0)"],
	},
};

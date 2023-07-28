import { ITransitionStyle } from "../interfaces";

export const defaultTransitionStyle: ITransitionStyle = {
	this: {
		scale: ["1", "1.05"],
		transform: ["translateX(0)", "translateX(-50px)"],
		filter: ["none", "brightness(0.4)"],
	},
	next: {
		transform: ["translateX(100%)", "translateX(0)"],
	},
};

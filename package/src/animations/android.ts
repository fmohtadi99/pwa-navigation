import { ITransitionStyle } from "../interfaces";

export const android: ITransitionStyle = {
	this: {
		opacity: ["1", "0"],
		transform: ["translateY(0)", "translateY(-20px)"],
	},
	next: {
		transform: ["translateY(100%)", "translateY(0)"],
	},
};

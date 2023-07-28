import { ITransitionStyle } from "../interfaces";

export const fade: ITransitionStyle = {
	this: {
		opacity: ["1", "0"],
	},
	next: {
		opacity: ["0", "1"],
	},
};

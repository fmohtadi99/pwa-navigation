import { ITransitionStyle } from "../interfaces";

export const fadeZoomReverse: ITransitionStyle = {
	this: {
		opacity: ["1", "0"],
		scale: ["1", "0.8"],
	},
	next: {
		opacity: ["0", "1"],
		scale: ["0.8", "1"],
	},
};

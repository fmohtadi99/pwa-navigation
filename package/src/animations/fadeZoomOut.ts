import { ITransitionStyle } from "../interfaces";

export const fadeZoomOut: ITransitionStyle = {
	this: {
		opacity: ["1", "0"],
		scale: ["1", "0.8"],
	},
	next: {
		opacity: ["0", "1"],
		scale: ["1.2", "1"],
	},
};

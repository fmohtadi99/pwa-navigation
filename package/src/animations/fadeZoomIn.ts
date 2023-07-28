import { ITransitionStyle } from "../interfaces";

export const fadeZoomIn: ITransitionStyle = {
	this: {
		opacity: ["1", "0"],
		scale: ["1", "1.2"],
	},
	next: {
		opacity: ["0", "1"],
		scale: ["0.8", "1"],
	},
};

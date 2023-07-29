import { ITransitionStyle } from "../interfaces";

export const flipClockwise: ITransitionStyle = {
	this: {
		transform: ["rotateY(0deg)", "rotateY(180deg)"],
	},
	next: {
		transform: ["rotateY(-180deg)", "rotateY(0deg)"],
	},
};

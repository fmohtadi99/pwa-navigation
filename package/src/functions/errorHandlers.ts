import { ITransitionStyle } from "../interfaces";

export const errorHandlers = {
	mismatchTiming: (delay: number, speed: number) => {
		if (delay < 10)
			throw new Error(`Action delay time must be greater than 10ms.`);
		if (speed < 10)
			throw new Error(`Transition duraction time must be greater than 10ms.`);
		if (delay >= speed)
			throw new Error(`Action Delay is less than animation speed.`);
	},
	noDrawer: () => {
		throw new Error(
			`Drawer component is not defined. Please check if you have added it to the context.\nRefer to <Navigation drawer={...} />.`
		);
	},
	notFound: (screenId: string) => {
		throw new Error(
			`Screen with id "${screenId}" not found. Please check if you have added it to the context.\nRefer to <Navigation screens={...} />.`
		);
	},
	styleOverload: (style: ITransitionStyle) => {
		const items = [style.this, style.next];
		items.forEach(item => {
			const itemKeys = Object.keys(item);
			itemKeys.forEach(property => {
				if (item[property].length < 2)
					throw new Error(
						`Style underload. Please check if you have added less than 2 styles in the array.`
					);
				if (item[property].length > 2)
					throw new Error(
						`Style overload. Please check if you have added more than 2 styles in the array.`
					);
				item[property].forEach((value: any) => {
					if (typeof value !== "string")
						throw new Error(
							`Style value must be a string. Please check if you have added a string value in the array.`
						);
				});
			});
		});
	},
};

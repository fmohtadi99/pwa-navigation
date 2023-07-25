import { appConfig } from "../index";

const KEY = () => appConfig.storageKey;

export const theRoutes = {
	add: newRoute => {
		const routes = JSON.parse(global.sessionStorage.getItem(KEY()));
		routes.push(newRoute);
		global.sessionStorage.setItem(KEY(), JSON.stringify(routes));
	},
	get: () => {
		const routes = JSON.parse(global.sessionStorage.getItem(KEY()));
		return routes;
	},
	init: initial => {
		global.sessionStorage.setItem(KEY(), JSON.stringify([initial]));
	},
	last: () => {
		const routes = JSON.parse(global.sessionStorage.getItem(KEY()));
		return routes[routes.length - 1];
	},
	length: () => {
		const routes = JSON.parse(global.sessionStorage.getItem(KEY()));
		return routes.length;
	},
	pop: () => {
		const routes = JSON.parse(global.sessionStorage.getItem(KEY()));
		routes.pop();
		global.sessionStorage.setItem(KEY(), JSON.stringify(routes));
	},
	previous: () => {
		const routes = JSON.parse(global.sessionStorage.getItem(KEY()));
		return routes[routes.length - 2];
	},
};

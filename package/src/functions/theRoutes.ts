import { appConfig } from "../index";

const getSession = (): string[] =>
	JSON.parse(global.sessionStorage.getItem(appConfig.storageKey) as string);
const setSession = (e: string): void =>
	global.sessionStorage.setItem(appConfig.storageKey, e);

export const theRoutes = {
	/** Adds a new rendered screen ID to **Session Storage**. */
	add: (newRoute: string) => {
		const routes = getSession();
		routes.push(newRoute);
		setSession(JSON.stringify(routes));
	},

	/** Returns the rendered screens IDs. */
	get: getSession,

	/** Adds the first screen ID to **Session Storage**. */
	init: (initial: string) => setSession(JSON.stringify([initial])),

	/** Returns the last rendered screen. (Current Screen ID) */
	last: () => {
		const i = getSession();
		return i[i.length - 1];
	},

	/** Returns the count of rendered screens. */
	length: () => getSession().length,

	/** Removes the last screen ID from **Session Storage**.  */
	pop: () => {
		const i = getSession();
		i.pop();
		setSession(JSON.stringify(i));
	},

	/** Returns the previous rendered screen ID. */
	previous: () => {
		const i = getSession();
		return i[i.length - 2];
	},
};

export interface APIApp {
	/**
	 * The ID of the app
	 */
	id: string;
	/**
	 * A secret hash for the app, can not be shared
	 */
	secret: string;
	/**
	 * Members that is in the app's team
	 */
	members: string[];
	/**
	 * The ID of the owner of the app
	 */
	ownerId: string;
	/**
	 * Timestamp when the app was created at
	 */
	createdAt: number;
	/**
	 * Name of the app, unique acrros Tuneo platform
	 */
	name: string;
	/**
	 * The description of the app, always present when {@link APIApp.verified} is true
	 */
	description?: string;
	/**
	 * The official website URL of the app, always present when {@link APIApp.verified} is true
	 */
	website?: string;
	/**
	 * Whether the app is verified or not by Tuneo
	 */
	verified?: true;
	/**
	 * The redirect URI of the app
	 */
	redirectURI: string;
}

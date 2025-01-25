import type { Language } from '@/globals';

export interface APIUser {
	/**
	 * The ID of the user
	 */
	id: string;
	/**
	 * A biography for the user
	 */
	bio?: string;
	/**
	 * The avatar hash of the user in CDN
	 */
	avatar?: string;
	/**
	 * The unique email of the current user
	 * @remarks Only returned for your user
	 */
	email: string;
	/**
	 * The phone of the user
	 */
	phone?: string;
	/**
	 * The name of the user
	 */
	name: string;
	/**
	 * A string containig the birthday (ISOString) of the user
	 */
	birthday: string;
	/**
	 * Timestamp when the user account was created at
	 */
	createdAt: number;
	/**
	 * Gender of the current user, consider {@link APIGender.Unspecified} as default
	 */
	gender?: APIGender;
	/**
	 * Language the the user is current using
	 */
	language: Language;
	/**
	 * The market of the user
	 */
	market?: APIMarket;
	/**
	 * Information about the user premium in Tuneo plataform
	 */
	plan?: APIUserPlan;
	/**
	 * Array of notifications of the user
	 */
	notifications: APINotification[];
}

export type APINotification =
	| APINewLoginNotification
	| APIPlaylistInviteNotification
	| APIPlaylistKickNotification
	| APIFriendRequestNotification
	| APIAppTeamKickNotification;

export interface APIBaseNotification<Type extends NotificationType> {
	/**
	 * The ID of the notification
	 */
	id: string;
	/**
	 * The type of the notification
	 * @see {@link NotificationType}
	 */
	type: Type;
	/**
	 * Whether this notification was read or not
	 */
	read?: boolean;
}

export interface APINewLoginNotification
	extends APIBaseNotification<NotificationType.NewLogin> {
	/**
	 * The IP adress of the new login
	 */
	ip: string;
}

export interface APIPlaylistKickNotification
	extends APIBaseNotification<NotificationType.PlaylistKick> {
	/**
	 * The playlist name the you have been kicked
	 */
	playlist: string;
}

export interface APIFriendRequestNotification
	extends APIBaseNotification<NotificationType.FriendRequest> {
	/**
	 * The friend ID of the request
	 */
	friendId: string;
}

export interface APIAppTeamKickNotification
	extends APIBaseNotification<NotificationType.AppTeamKick> {
	/**
	 * The app name that the owner kicked you
	 */
	app: string;
}

export interface APIPlaylistInviteNotification
	extends APIBaseNotification<NotificationType.PlaylistInvite> {
	/**
	 * The playlist ID you have been invited
	 */
	playlist: string;
}

export enum NotificationType {
	NewLogin = '1',
	PlaylistKick = '2',
	FriendRequest = '3',
	AppTeamKick = '4',
	PlaylistInvite = '5',
}

export enum UserPlanType {
	Plus = 'plus',
	Student = ' student',
	Family = 'family',
	Friends = 'friends',
	Duo = 'duo',
}

export interface APIBaseUserPlan<Type extends UserPlanType> {
	/**
	 * Timestamp when the user plan expires
	 */
	expiresAt: number;
	/**
	 * Timestamp when the user bought the plan
	 */
	createdAt: number;
	/**
	 * Type of the premium/plan
	 */
	type: Type;
}

export type APIUserPremiumPlusOrStudent = APIBaseUserPlan<
	UserPlanType.Plus | UserPlanType.Student
>;

export interface APIUserPlanTypeWithMembers
	extends APIBaseUserPlan<
		Exclude<UserPlanType, UserPlanType.Plus | UserPlanType.Student>
	> {
	/**
	 * Members ID that is using the plan too
	 */
	members: string[];
}

export type APIUserPlan =
	| APIUserPremiumPlusOrStudent
	| APIUserPlanTypeWithMembers;

export enum APIGender {
	Male = 'm',
	Female = 'f',
	Unspecified = 'u',
	NonBinary = 'nb',
}

export enum APIMarket {
	Global = 'global',
	Br = 'br',
	Us = 'us',
}

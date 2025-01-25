import type { APIFolder, APIUserPlaylist } from '@/payloads/v1/music';
import type { APINotification, APIUser } from '@/payloads/v1/user';

export type RESTPatchUpdateCurrentUser = Partial<
	Pick<APIUser, 'name' | 'bio' | 'avatar' | 'gender' | 'phone' | 'language'>
>;

export type RESTGetCurrentUserProfile = APIUser;

export type RESTGetCurrentUserNotifications = APINotification[];

export type RESTDeleteSingleNotification = never;
export type RESTDeletePurgeNotifications = number;

export interface RESTDeletePurgeNotificationsJSONBody {
	/**
	 * The IDs of the notifications to purge delete
	 */
	ids: string[];
}

export interface RESTGetCurrentUserDevices {
	id: string;
	ip: string;
	lastLoginAt: number;
	device: {
		verbose: string;
	} & Record<
		'os' | 'browser' | 'deviceInfo',
		{ name: string; version: string }
	>;
	locale: {
		city: string;
		region: string;
		country: string;
	};
}

export type RESTPostSendFriendRequest = never;

export type RESTDeleteRejectFriendRequest = never;

export type RESTPutAcceptFriendRequest = never;

export type RESTDeletePlaylist = never;

export type RESTPostBulkAddPlaylistSongs = never;

export interface RESTPostBulkAddPlaylistSongsJSONBody {
	/**
	 * The ID of the songs to bulk add
	 */
	songsId: string[];
}

export type RESTPostSendPlaylistMemberRequest = never;

export type RESTPutJoinPlaylit = never;

export type RESTDeleteRemoveMember = never;

export type RESTPostCreateFolder = APIFolder;

export type RESTPatchUpdateFolder = APIFolder;

export interface RESTPatchUpdateFolderJSONBody {
	name?: string;
	pinned?: true | null;
}

export type RESTDeleteFolder = never;

export type RESTGetPlaylist = APIUserPlaylist;

export type RESTGetListCurrentUserPlaylists = APIUserPlaylist[];

export type RESTPostCreatePlaylist = APIUserPlaylist;

export type RESTPostCreatePlaylistJSONBody = Pick<
	APIUserPlaylist,
	'name' | 'coverUrl' | 'color'
>;

export type RESTPatchUpdatePlaylist = APIUserPlaylist;

export interface RESTPatchUpdatePlaylistJSONBody
	extends Partial<
		Pick<APIUserPlaylist, 'name' | 'coverUrl' | 'color' | 'folderId'>
	> {
	/**
	 * Use "null" if you want to unpin the playlist
	 */
	pinned?: true | null;
}

export type RESTPostCopyPlaylist = APIUserPlaylist;

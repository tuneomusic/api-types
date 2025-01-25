export interface APIBasePlaylist<Type extends PlaylistType | undefined> {
	// TODO: Change to "id"
	/**
	 * The ID of the playlist
	 */
	playlistId: string;
	/**
	 * The name of the playlist, not unique
	 */
	name: string;
	/**
	 * Timestamp when this playlist was created at
	 */
	createdAt: number;
	/**
	 * The cover URL of the playlist
	 */
	coverUrl?: string;
	/**
	 * The HEX color for this playlist
	 */
	color?: string;
	/**
	 * Whether the playlist is private or not
	 */
	private?: true;
	/**
	 * The type of this playlist, if not present, if an user playlist
	 */
	type?: Type;
	/**
	 * Whether the playlist is pinned or not
	 */
	pinned?: boolean;
	/**
	 * Array of tracks in the playlist
	 */
	tracks: APIPlaylistTrack[];
	/**
	 * The ID of the folder the playlist is in
	 */
	folderId?: string;
	/**
	 * Array of editors in the playlist
	 */
	editors: APIPlaylistEditor[];
}

export type APIPlaylist =
	| APIUserPlaylist
	| APIGenrePlaylist
	| APIArtistPlaylist
	| APIWrappedPlaylist;

export interface APIPlaylistEditor {
	/**
	 * The ID of the editor
	 */
	id: string;
	/**
	 * The playlist ID the editor belongs to
	 */
	playlistId: string;
	/**
	 * The user ID the editor belongs to
	 */
	userId: string;
}

export interface APIPlaylistTrack {
	/**
	 * The ID of the playlist track
	 */
	id: string;
	/**
	 * The ID of the track
	 */
	trackId: string;
	/**
	 * The ID of the user that added the track
	 */
	addedBy: string;
	/**
	 * Timestamp when the track was added
	 */
	addedAt: number;
	/**
	 * The playlist ID the track belongs to
	 */
	playlistId: string;
}

export interface APIUserPlaylist extends APIBasePlaylist<undefined> {
	/**
	 * The ID of the owner of the playlist
	 */
	ownerId: string;
}

export interface APIGenrePlaylist extends APIBasePlaylist<PlaylistType.Genre> {
	/**
	 * The genre ID of the playlist
	 */
	genreId: string;
}

export interface APIArtistPlaylist
	extends APIBasePlaylist<PlaylistType.Artist> {
	/**
	 * The artist ID of the playlist
	 */
	artistId: string;
}

export interface APIWrappedPlaylist
	extends APIBasePlaylist<PlaylistType.Wrapped> {
	/**
	 * The year of the wrapped playlist
	 */
	wrappedYear: number;
}

export enum PlaylistType {
	Artist = 'artist',
	Genre = 'genre',
	Wrapped = 'wrapped',
}

export interface APIFolder {
	/**
	 * The ID of the folder
	 */
	id: string;
	/**
	 * The owner ID of the folder
	 */
	userId: string;
	/**
	 * The name of the folder, "New Playlist" by default
	 */
	name?: string;
	/**
	 * Whether the folder is pinned or not
	 */
	pinned?: boolean;
	/**
	 * The parent ID of the folder
	 */
	parentId?: string;
}

export interface APIGenre {
	/**
	 * The ID of the genre
	 */
	genreId: string;
	/**
	 * The name of the genre
	 */
	name: string;
	/**
	 * The cover URL of the genre
	 */
	coverUrl?: string;
}

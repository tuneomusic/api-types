export interface APICommunity {
	/**
	 * The ID of the community
	 */
	id: string;
	/**
	 * The name of the community, unique across Tuneo platform
	 */
	name: string;
	/**
	 * The ID of the owner of the community
	 */
	ownerId: string;
	/**
	 * Array of members in this community
	 */
	members: APICommunity[];
	/**
	 * The invite hash of the community. If the community have one, so the community is considered private
	 */
	invite?: string;
	/**
	 * Whether the community is verified or not by an artist
	 */
	verified?: true;
	/**
	 * The ID of the artist that verified the community
	 */
	artistId?: string;
	/**
	 * Array of genres this community uses
	 */
	genres: [];
	/**
	 * Timestamp when the community was created at
	 */
	createdAt: number;
	/**
	 * Description of the community
	 */
	description?: string;
	/**
	 * The tags of the community (0-5)
	 */
	tags: string[];
	/**
	 * The banner hash of the community
	 */
	banner?: string;
	/**
	 * The icon hash of the community
	 */
	icon?: string;
}

export interface APICommunityMember {
	/**
	 * The ID of the member
	 */
	id: string;
	/**
	 * Timestamp when the member joined in the guild
	 */
	joinedAt: number;
	/**
	 * The user ID this member belongs to
	 */
	userId: string;
	/**
	 * The ID of the community this member belongs to
	 */
	communityId: string;
	/**
	 * The permissions of the member in bitfield
	 */
	permissions: string;
}

export interface APIMessage {
	/**
	 * The ID of this message
	 */
	id: string;
	/**
	 * The community ID this message belongs to
	 */
	communityId: string;
	/**
	 * The ID of the author of the message
	 */
	authorId: string;
	/**
	 * The content of the message
	 */
	content: string;
}

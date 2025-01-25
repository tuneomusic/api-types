import type { APICommunity, APICommunityMember } from '@/payloads/v1/community';

export type RESTPostNewCommunity = APICommunity;
export interface RESTPostNewCommunityJSONBody
	extends Pick<APICommunity, 'name' | 'description'> {
	/**
	 * Array of tags of the new community
	 */
	tags?: string[];
}

export type RESTDeleteCommunity = never;

export type RESTPatchUpdateCommunity = never;
export type RESTPatchUpdateCommunityJSONBody = Partial<
	Pick<APICommunity, 'name' | 'description' | 'tags' | 'banner' | 'icon'>
>;

export type RESTGetCommunity = APICommunity;

export type RESTDeleteLeaveCommunity = never;

export type RESTGetCommunityMembers = APICommunityMember[];

export interface RESTGetCommunityMembersQueryParams {
	/**
	 * Limit of members to return (2-1000)
	 * @default 100
	 */
	limit?: number;
	/**
	 * Number of members to skip before querying
	 * @default 0
	 */
	skip?: number;
}

export interface RESTPutUpdateInvite {
	/**
	 * The new invite hash generated for the community
	 */
	invite: string;
}

export type RESTPostJoinCommunity = never;

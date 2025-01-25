import type { APIApp } from '@/payloads/v1/app';

export type RESTPostNewApp = Pick<APIApp, 'id' | 'secret' | 'ownerId'>;
export type RESTPostNewAppJSONBody = Pick<
	APIApp,
	'description' | 'website' | 'redirectURI' | 'name'
>;

export type RESTDeleteApp = never;

export type RestPatchUpdateApp = APIApp;
export type RestPatchUpdateAppJSONBody = Partial<RESTPostNewAppJSONBody>;

export type RestPatchSecretReset = never;

export type RESTDeleteLeaveAppTeam = never;

export type RESTPutAppTeamKick = never;

export type RESTPostAppNewMember = never;

export type RESTGetListManageableApps = (Omit<APIApp, 'secret'> & {
	/**
	 * Only returns the secret if you are the owner of the app
	 */
	secret?: string;
})[];

export type RESTGetApp = Pick<APIApp, 'name' | 'redirectURI'>;

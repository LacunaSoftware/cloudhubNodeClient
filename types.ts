// Types.ts
export interface SessionCreateRequest {
  identifier?: string;
  redirectUri?: string;
  type?: TrustServiceSessionTypes;
  lifetimeInSeconds: number;
}

export enum TrustServiceSessionTypes {
  SingleSignature = 1,
  MultiSignature,
  SignatureSession,
  AuthenticationSession,
}

export interface SessionModel {
  services?: Array<TrustServiceAuthParametersModel> | null;
}

export interface TrustServiceAuthParametersModel {
  serviceInfo?: TrustServiceInfoModel;
  authUrl?: string;
}

export interface TrustServiceInfoModel {
  serviceName: string;
  provider: string;
  endpoint: string;
  badgeUrl: string;
}

export interface SignHashRequest
{
  session: string;
  hash: string;
  digestAlgorithm?: string;
  digestAlgorithmOid?: string;
  certificateAlias?: string;
}

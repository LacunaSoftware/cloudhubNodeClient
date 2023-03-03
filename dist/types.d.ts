export interface SessionCreateRequest {
    identifier?: string;
    redirectUri?: string;
    type?: TrustServiceSessionTypes;
}
export declare enum TrustServiceSessionTypes {
    SingleSignature = 1,
    MultiSignature = 2,
    SignatureSession = 3,
    AuthenticationSession = 4
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
export interface SignHashRequest {
    session: string;
    hash: string;
    digestAlgorithm?: string;
    digestAlgorithmOid?: string;
    certificateAlias?: string;
}

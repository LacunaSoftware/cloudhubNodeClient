import { RestClient } from "./rest-client";
import { SessionCreateRequest, SessionModel, SignHashRequest } from "./types";
export declare class CloudHubClient {
    private baseURL;
    protected client: RestClient;
    constructor(baseURL: string, apiKey: string);
    createSessionAsync: (sessionCreateRequest?: SessionCreateRequest) => Promise<SessionModel>;
    getCertificateAsync: (encodedSession: string) => Promise<Uint32Array>;
    signHashAsync: (signHashRequest?: SignHashRequest) => Promise<Uint32Array>;
}

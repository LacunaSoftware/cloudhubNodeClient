import axios, { AxiosInstance } from "axios";
import { RestClient } from "./rest-client";
import { SessionCreateRequest, SessionModel, SignHashRequest } from "./types";

export class CloudHubClient {
    private baseURL: string;
    protected client: RestClient;

    constructor(baseURL: string, apiKey: string) {
        this.client = new RestClient(baseURL, apiKey);
        this.baseURL = baseURL;
    }
    
    public createSessionAsync = async (sessionCreateRequest?: SessionCreateRequest): Promise<SessionModel> => {
        const createSessionEndpoint = "api/sessions";
        const endpoint = this.baseURL + createSessionEndpoint;
        return Promise.resolve(this.client.post(createSessionEndpoint, sessionCreateRequest));
    };

    public getCertificateAsync = async (encodedSession: string): Promise<Uint32Array> => {
        const getCertificateEndpoint = `api/sessions/certificate?session=${encodedSession}`; 
        const endpoint = this.baseURL + getCertificateEndpoint;
        return this.client.get(getCertificateEndpoint);
        
    };

    public signHashAsync = async (signHashRequest?: SignHashRequest): Promise<Uint32Array> => {
        const getCertificateEndpoint = "api/sessions/sign-hash";        
        const endpoint = this.baseURL + getCertificateEndpoint;
        return this.client.post(getCertificateEndpoint, signHashRequest);
    };
}


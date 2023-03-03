import { AxiosInstance } from "axios";
export declare class RestClient {
    private baseURL;
    private apiKey;
    private client;
    private getClient;
    constructor(baseURL: string, apiKey: string);
    initClient(): AxiosInstance;
    private errorHandling;
    post(endpoint: string, request: any): Promise<any>;
    get(endpoint: string, params?: string): Promise<any>;
}

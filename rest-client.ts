import axios, { AxiosInstance } from "axios";

export class RestClient {

    private baseURL: string;
    private apiKey: string;

    private client : AxiosInstance | null = null;

    private getClient(): AxiosInstance {
        return this.client != null ? this.client : this.initClient();
    }

    constructor(baseURL: string, apiKey: string) {
        this.baseURL = baseURL;
        this.apiKey = apiKey;
        this.client = this.getClient();
    }

    initClient() {
        return axios.create(
            {
                baseURL: this.baseURL, 
                headers: {
                    "x-api-key": this.apiKey 
                },
            }
        );
    }
    

    private errorHandling = (error: any) => {
        if(axios.isAxiosError(error)){
            if(error.response){
                throw JSON.stringify(error.response.data, null, 2) + "\n" + error.message
            } else {
                throw error.message;
            }
        } else {
            console.log("unexpectedError: ", error);
            return "an unexpected error occurred";
        }
    }

    public async post(endpoint: string, request: any){
        let client = this.getClient();
        try {
            const res = await client.post(
                endpoint, request, {
                    headers: {
                        'content-type': 'application/json',
                        Accept: 'application/json'
                    },
                });
            return res.data;
        } catch (error) {
           throw this.errorHandling(error);    
        }
    }

    public async get(endpoint:string, params?: string) {
        let client = this.getClient();
        try {
            const res = await client.get(
                endpoint, {
                    headers: {
                        'content-type': 'application/json',
                        Accept: 'application/json'
                    },
                });
            return res.data;
        } catch (error) {
           throw this.errorHandling(error);    
        }
    }
}
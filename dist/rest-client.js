"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestClient = void 0;
const axios_1 = __importDefault(require("axios"));
class RestClient {
    getClient() {
        return this.client != null ? this.client : this.initClient();
    }
    constructor(baseURL, apiKey) {
        this.client = null;
        this.errorHandling = (error) => {
            if (axios_1.default.isAxiosError(error)) {
                if (error.response) {
                    throw JSON.stringify(error.response.data, null, 2) + "\n" + error.message;
                }
                else {
                    throw error.message;
                }
            }
            else {
                console.log("unexpectedError: ", error);
                return "an unexpected error occurred";
            }
        };
        this.baseURL = baseURL;
        this.apiKey = apiKey;
        this.client = this.getClient();
    }
    initClient() {
        return axios_1.default.create({
            baseURL: this.baseURL,
            headers: {
                "x-api-key": this.apiKey
            },
        });
    }
    post(endpoint, request) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = this.getClient();
            try {
                const res = yield client.post(endpoint, request, {
                    headers: {
                        'content-type': 'application/json',
                        Accept: 'application/json'
                    },
                });
                return res.data;
            }
            catch (error) {
                throw this.errorHandling(error);
            }
        });
    }
    get(endpoint, params) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = this.getClient();
            try {
                const res = yield client.get(endpoint, {
                    headers: {
                        'content-type': 'application/json',
                        Accept: 'application/json'
                    },
                });
                return res.data;
            }
            catch (error) {
                throw this.errorHandling(error);
            }
        });
    }
}
exports.RestClient = RestClient;

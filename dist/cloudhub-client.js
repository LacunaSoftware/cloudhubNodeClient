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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudHubClient = void 0;
const rest_client_1 = require("./rest-client");
class CloudHubClient {
    constructor(baseURL, apiKey) {
        this.createSessionAsync = (sessionCreateRequest) => __awaiter(this, void 0, void 0, function* () {
            const createSessionEndpoint = "api/sessions";
            const endpoint = this.baseURL + createSessionEndpoint;
            return Promise.resolve(this.client.post(createSessionEndpoint, sessionCreateRequest));
        });
        this.getCertificateAsync = (encodedSession) => __awaiter(this, void 0, void 0, function* () {
            const getCertificateEndpoint = `api/sessions/certificate?session=${encodedSession}`;
            const endpoint = this.baseURL + getCertificateEndpoint;
            return this.client.get(getCertificateEndpoint);
        });
        this.signHashAsync = (signHashRequest) => __awaiter(this, void 0, void 0, function* () {
            const getCertificateEndpoint = "api/sessions/sign-hash";
            const endpoint = this.baseURL + getCertificateEndpoint;
            return this.client.post(getCertificateEndpoint, signHashRequest);
        });
        this.client = new rest_client_1.RestClient(baseURL, apiKey);
        this.baseURL = baseURL;
    }
}
exports.CloudHubClient = CloudHubClient;

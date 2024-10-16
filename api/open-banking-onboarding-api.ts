/* tslint:disable */
/* eslint-disable */
/**
 * NIUM Platform
 * NIUM Platform
 *
 * The version of the OpenAPI document: 2024.8.20
 * Contact: experience@nium.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { ConsentDetailsResponse } from '../model';
// @ts-ignore
import type { OpenBankingPaymentResponseDTO } from '../model';
// @ts-ignore
import type { WalletApiError } from '../model';
/**
 * OpenBankingOnboardingApi - axios parameter creator
 * @export
 */
export const OpenBankingOnboardingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This API allows Client to get the account details using the customer\'s consent Id for open banking, as part of the AIS flow.
         * @summary Account Details By Customer Consent ID.
         * @param {string} accountConsentId accountConsentId
         * @param {string} clientHashId Unique client identifier generated and shared before API handshake.
         * @param {string} customerHashId Unique customer identifier generated on customer creation.
         * @param {string} walletHashId Unique wallet identifier generated simultaneously with customer creation.
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountDetailsByCustomerConsentID: async (accountConsentId: string, clientHashId: string, customerHashId: string, walletHashId: string, xRequestId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountConsentId' is not null or undefined
            assertParamExists('accountDetailsByCustomerConsentID', 'accountConsentId', accountConsentId)
            // verify required parameter 'clientHashId' is not null or undefined
            assertParamExists('accountDetailsByCustomerConsentID', 'clientHashId', clientHashId)
            // verify required parameter 'customerHashId' is not null or undefined
            assertParamExists('accountDetailsByCustomerConsentID', 'customerHashId', customerHashId)
            // verify required parameter 'walletHashId' is not null or undefined
            assertParamExists('accountDetailsByCustomerConsentID', 'walletHashId', walletHashId)
            const localVarPath = `/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/consent/account`
                .replace(`{${"clientHashId"}}`, encodeURIComponent(String(clientHashId)))
                .replace(`{${"customerHashId"}}`, encodeURIComponent(String(customerHashId)))
                .replace(`{${"walletHashId"}}`, encodeURIComponent(String(walletHashId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication default required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

            if (accountConsentId !== undefined) {
                localVarQueryParameter['accountConsentId'] = accountConsentId;
            }

            if (xRequestId != null) {
                localVarHeaderParameter['x-request-id'] = String(xRequestId);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This API allows Client to fetch payment details using system reference number of the transaction, as part of the Open Banking PIS flow and based on customer\'s consent.
         * @summary Payment Details by System Reference Number
         * @param {string} clientHashId Unique client identifier generated and shared before API handshake.
         * @param {string} customerHashId Unique customer identifier generated on customer creation.
         * @param {string} systemReferenceNumber systemReferenceNumber
         * @param {string} walletHashId Unique wallet identifier generated simultaneously with customer creation.
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        paymentDetailsbySystemReferenceNumber: async (clientHashId: string, customerHashId: string, systemReferenceNumber: string, walletHashId: string, xRequestId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientHashId' is not null or undefined
            assertParamExists('paymentDetailsbySystemReferenceNumber', 'clientHashId', clientHashId)
            // verify required parameter 'customerHashId' is not null or undefined
            assertParamExists('paymentDetailsbySystemReferenceNumber', 'customerHashId', customerHashId)
            // verify required parameter 'systemReferenceNumber' is not null or undefined
            assertParamExists('paymentDetailsbySystemReferenceNumber', 'systemReferenceNumber', systemReferenceNumber)
            // verify required parameter 'walletHashId' is not null or undefined
            assertParamExists('paymentDetailsbySystemReferenceNumber', 'walletHashId', walletHashId)
            const localVarPath = `/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/consent/payment`
                .replace(`{${"clientHashId"}}`, encodeURIComponent(String(clientHashId)))
                .replace(`{${"customerHashId"}}`, encodeURIComponent(String(customerHashId)))
                .replace(`{${"walletHashId"}}`, encodeURIComponent(String(walletHashId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication default required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

            if (systemReferenceNumber !== undefined) {
                localVarQueryParameter['systemReferenceNumber'] = systemReferenceNumber;
            }

            if (xRequestId != null) {
                localVarHeaderParameter['x-request-id'] = String(xRequestId);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OpenBankingOnboardingApi - functional programming interface
 * @export
 */
export const OpenBankingOnboardingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OpenBankingOnboardingApiAxiosParamCreator(configuration)
    return {
        /**
         * This API allows Client to get the account details using the customer\'s consent Id for open banking, as part of the AIS flow.
         * @summary Account Details By Customer Consent ID.
         * @param {string} accountConsentId accountConsentId
         * @param {string} clientHashId Unique client identifier generated and shared before API handshake.
         * @param {string} customerHashId Unique customer identifier generated on customer creation.
         * @param {string} walletHashId Unique wallet identifier generated simultaneously with customer creation.
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountDetailsByCustomerConsentID(accountConsentId: string, clientHashId: string, customerHashId: string, walletHashId: string, xRequestId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConsentDetailsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accountDetailsByCustomerConsentID(accountConsentId, clientHashId, customerHashId, walletHashId, xRequestId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OpenBankingOnboardingApi.accountDetailsByCustomerConsentID']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * This API allows Client to fetch payment details using system reference number of the transaction, as part of the Open Banking PIS flow and based on customer\'s consent.
         * @summary Payment Details by System Reference Number
         * @param {string} clientHashId Unique client identifier generated and shared before API handshake.
         * @param {string} customerHashId Unique customer identifier generated on customer creation.
         * @param {string} systemReferenceNumber systemReferenceNumber
         * @param {string} walletHashId Unique wallet identifier generated simultaneously with customer creation.
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async paymentDetailsbySystemReferenceNumber(clientHashId: string, customerHashId: string, systemReferenceNumber: string, walletHashId: string, xRequestId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OpenBankingPaymentResponseDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.paymentDetailsbySystemReferenceNumber(clientHashId, customerHashId, systemReferenceNumber, walletHashId, xRequestId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OpenBankingOnboardingApi.paymentDetailsbySystemReferenceNumber']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * OpenBankingOnboardingApi - factory interface
 * @export
 */
export const OpenBankingOnboardingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OpenBankingOnboardingApiFp(configuration)
    return {
        /**
         * This API allows Client to get the account details using the customer\'s consent Id for open banking, as part of the AIS flow.
         * @summary Account Details By Customer Consent ID.
         * @param {OpenBankingOnboardingApiAccountDetailsByCustomerConsentIDRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountDetailsByCustomerConsentID(requestParameters: OpenBankingOnboardingApiAccountDetailsByCustomerConsentIDRequest, options?: RawAxiosRequestConfig): AxiosPromise<ConsentDetailsResponse> {
            return localVarFp.accountDetailsByCustomerConsentID(requestParameters.accountConsentId, requestParameters.clientHashId, requestParameters.customerHashId, requestParameters.walletHashId, requestParameters.xRequestId, options).then((request) => request(axios, basePath));
        },
        /**
         * This API allows Client to fetch payment details using system reference number of the transaction, as part of the Open Banking PIS flow and based on customer\'s consent.
         * @summary Payment Details by System Reference Number
         * @param {OpenBankingOnboardingApiPaymentDetailsbySystemReferenceNumberRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        paymentDetailsbySystemReferenceNumber(requestParameters: OpenBankingOnboardingApiPaymentDetailsbySystemReferenceNumberRequest, options?: RawAxiosRequestConfig): AxiosPromise<OpenBankingPaymentResponseDTO> {
            return localVarFp.paymentDetailsbySystemReferenceNumber(requestParameters.clientHashId, requestParameters.customerHashId, requestParameters.systemReferenceNumber, requestParameters.walletHashId, requestParameters.xRequestId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for accountDetailsByCustomerConsentID operation in OpenBankingOnboardingApi.
 * @export
 * @interface OpenBankingOnboardingApiAccountDetailsByCustomerConsentIDRequest
 */
export interface OpenBankingOnboardingApiAccountDetailsByCustomerConsentIDRequest {
    /**
     * accountConsentId
     * @type {string}
     * @memberof OpenBankingOnboardingApiAccountDetailsByCustomerConsentID
     */
    readonly accountConsentId: string

    /**
     * Unique client identifier generated and shared before API handshake.
     * @type {string}
     * @memberof OpenBankingOnboardingApiAccountDetailsByCustomerConsentID
     */
    readonly clientHashId: string

    /**
     * Unique customer identifier generated on customer creation.
     * @type {string}
     * @memberof OpenBankingOnboardingApiAccountDetailsByCustomerConsentID
     */
    readonly customerHashId: string

    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type {string}
     * @memberof OpenBankingOnboardingApiAccountDetailsByCustomerConsentID
     */
    readonly walletHashId: string

    /**
     * Enter a unique UUID value
     * @type {string}
     * @memberof OpenBankingOnboardingApiAccountDetailsByCustomerConsentID
     */
    readonly xRequestId?: string
}

/**
 * Request parameters for paymentDetailsbySystemReferenceNumber operation in OpenBankingOnboardingApi.
 * @export
 * @interface OpenBankingOnboardingApiPaymentDetailsbySystemReferenceNumberRequest
 */
export interface OpenBankingOnboardingApiPaymentDetailsbySystemReferenceNumberRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type {string}
     * @memberof OpenBankingOnboardingApiPaymentDetailsbySystemReferenceNumber
     */
    readonly clientHashId: string

    /**
     * Unique customer identifier generated on customer creation.
     * @type {string}
     * @memberof OpenBankingOnboardingApiPaymentDetailsbySystemReferenceNumber
     */
    readonly customerHashId: string

    /**
     * systemReferenceNumber
     * @type {string}
     * @memberof OpenBankingOnboardingApiPaymentDetailsbySystemReferenceNumber
     */
    readonly systemReferenceNumber: string

    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type {string}
     * @memberof OpenBankingOnboardingApiPaymentDetailsbySystemReferenceNumber
     */
    readonly walletHashId: string

    /**
     * Enter a unique UUID value
     * @type {string}
     * @memberof OpenBankingOnboardingApiPaymentDetailsbySystemReferenceNumber
     */
    readonly xRequestId?: string
}

/**
 * OpenBankingOnboardingApi - object-oriented interface
 * @export
 * @class OpenBankingOnboardingApi
 * @extends {BaseAPI}
 */
export class OpenBankingOnboardingApi extends BaseAPI {
    /**
     * This API allows Client to get the account details using the customer\'s consent Id for open banking, as part of the AIS flow.
     * @summary Account Details By Customer Consent ID.
     * @param {OpenBankingOnboardingApiAccountDetailsByCustomerConsentIDRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OpenBankingOnboardingApi
     */
    public accountDetailsByCustomerConsentID(requestParameters: OpenBankingOnboardingApiAccountDetailsByCustomerConsentIDRequest, options?: RawAxiosRequestConfig) {
        return OpenBankingOnboardingApiFp(this.configuration).accountDetailsByCustomerConsentID(requestParameters.accountConsentId, requestParameters.clientHashId, requestParameters.customerHashId, requestParameters.walletHashId, requestParameters.xRequestId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This API allows Client to fetch payment details using system reference number of the transaction, as part of the Open Banking PIS flow and based on customer\'s consent.
     * @summary Payment Details by System Reference Number
     * @param {OpenBankingOnboardingApiPaymentDetailsbySystemReferenceNumberRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OpenBankingOnboardingApi
     */
    public paymentDetailsbySystemReferenceNumber(requestParameters: OpenBankingOnboardingApiPaymentDetailsbySystemReferenceNumberRequest, options?: RawAxiosRequestConfig) {
        return OpenBankingOnboardingApiFp(this.configuration).paymentDetailsbySystemReferenceNumber(requestParameters.clientHashId, requestParameters.customerHashId, requestParameters.systemReferenceNumber, requestParameters.walletHashId, requestParameters.xRequestId, options).then((request) => request(this.axios, this.basePath));
    }
}


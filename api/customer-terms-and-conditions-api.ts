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
import type { CustomerApiError } from '../model';
// @ts-ignore
import type { TermsAndConditionsAcceptResponseDTO } from '../model';
// @ts-ignore
import type { TermsAndConditionsRequestDTO } from '../model';
// @ts-ignore
import type { TermsAndConditionsResponseDTO } from '../model';
/**
 * CustomerTermsAndConditionsApi - axios parameter creator
 * @export
 */
export const CustomerTermsAndConditionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This API updates the Terms and Conditions acceptance status for a customer
         * @summary Accept Terms and Conditions
         * @param {string} clientHashId Unique client identifier generated and shared before API handshake.
         * @param {string} customerHashId Unique customer identifier generated on customer creation.
         * @param {TermsAndConditionsRequestDTO} termsAndConditionsRequestDTO termsAndConditionsRequestDTO
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        acceptTermsandConditions: async (clientHashId: string, customerHashId: string, termsAndConditionsRequestDTO: TermsAndConditionsRequestDTO, xRequestId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientHashId' is not null or undefined
            assertParamExists('acceptTermsandConditions', 'clientHashId', clientHashId)
            // verify required parameter 'customerHashId' is not null or undefined
            assertParamExists('acceptTermsandConditions', 'customerHashId', customerHashId)
            // verify required parameter 'termsAndConditionsRequestDTO' is not null or undefined
            assertParamExists('acceptTermsandConditions', 'termsAndConditionsRequestDTO', termsAndConditionsRequestDTO)
            const localVarPath = `/api/v1/client/{clientHashId}/customer/{customerHashId}/termsAndConditions`
                .replace(`{${"clientHashId"}}`, encodeURIComponent(String(clientHashId)))
                .replace(`{${"customerHashId"}}`, encodeURIComponent(String(customerHashId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication default required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

            if (xRequestId != null) {
                localVarHeaderParameter['x-request-id'] = String(xRequestId);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(termsAndConditionsRequestDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This API allows you to fetch the mandatory Terms and Conditions for individual customer onboarding. Refer to the [T&C flow chart](/apis/docs/customer-life-cycle#terms-and-conditions) for more details.
         * @summary Terms and Conditions
         * @param {string} clientHashId Unique client identifier generated and shared before API handshake.
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        termsandConditions: async (clientHashId: string, xRequestId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientHashId' is not null or undefined
            assertParamExists('termsandConditions', 'clientHashId', clientHashId)
            const localVarPath = `/api/v1/client/{clientHashId}/termsAndConditions`
                .replace(`{${"clientHashId"}}`, encodeURIComponent(String(clientHashId)));
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
 * CustomerTermsAndConditionsApi - functional programming interface
 * @export
 */
export const CustomerTermsAndConditionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CustomerTermsAndConditionsApiAxiosParamCreator(configuration)
    return {
        /**
         * This API updates the Terms and Conditions acceptance status for a customer
         * @summary Accept Terms and Conditions
         * @param {string} clientHashId Unique client identifier generated and shared before API handshake.
         * @param {string} customerHashId Unique customer identifier generated on customer creation.
         * @param {TermsAndConditionsRequestDTO} termsAndConditionsRequestDTO termsAndConditionsRequestDTO
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async acceptTermsandConditions(clientHashId: string, customerHashId: string, termsAndConditionsRequestDTO: TermsAndConditionsRequestDTO, xRequestId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TermsAndConditionsAcceptResponseDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.acceptTermsandConditions(clientHashId, customerHashId, termsAndConditionsRequestDTO, xRequestId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CustomerTermsAndConditionsApi.acceptTermsandConditions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * This API allows you to fetch the mandatory Terms and Conditions for individual customer onboarding. Refer to the [T&C flow chart](/apis/docs/customer-life-cycle#terms-and-conditions) for more details.
         * @summary Terms and Conditions
         * @param {string} clientHashId Unique client identifier generated and shared before API handshake.
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async termsandConditions(clientHashId: string, xRequestId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TermsAndConditionsResponseDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.termsandConditions(clientHashId, xRequestId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CustomerTermsAndConditionsApi.termsandConditions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * CustomerTermsAndConditionsApi - factory interface
 * @export
 */
export const CustomerTermsAndConditionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CustomerTermsAndConditionsApiFp(configuration)
    return {
        /**
         * This API updates the Terms and Conditions acceptance status for a customer
         * @summary Accept Terms and Conditions
         * @param {CustomerTermsAndConditionsApiAcceptTermsandConditionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        acceptTermsandConditions(requestParameters: CustomerTermsAndConditionsApiAcceptTermsandConditionsRequest, options?: RawAxiosRequestConfig): AxiosPromise<TermsAndConditionsAcceptResponseDTO> {
            return localVarFp.acceptTermsandConditions(requestParameters.clientHashId, requestParameters.customerHashId, requestParameters.termsAndConditionsRequestDTO, requestParameters.xRequestId, options).then((request) => request(axios, basePath));
        },
        /**
         * This API allows you to fetch the mandatory Terms and Conditions for individual customer onboarding. Refer to the [T&C flow chart](/apis/docs/customer-life-cycle#terms-and-conditions) for more details.
         * @summary Terms and Conditions
         * @param {CustomerTermsAndConditionsApiTermsandConditionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        termsandConditions(requestParameters: CustomerTermsAndConditionsApiTermsandConditionsRequest, options?: RawAxiosRequestConfig): AxiosPromise<TermsAndConditionsResponseDTO> {
            return localVarFp.termsandConditions(requestParameters.clientHashId, requestParameters.xRequestId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for acceptTermsandConditions operation in CustomerTermsAndConditionsApi.
 * @export
 * @interface CustomerTermsAndConditionsApiAcceptTermsandConditionsRequest
 */
export interface CustomerTermsAndConditionsApiAcceptTermsandConditionsRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type {string}
     * @memberof CustomerTermsAndConditionsApiAcceptTermsandConditions
     */
    readonly clientHashId: string

    /**
     * Unique customer identifier generated on customer creation.
     * @type {string}
     * @memberof CustomerTermsAndConditionsApiAcceptTermsandConditions
     */
    readonly customerHashId: string

    /**
     * termsAndConditionsRequestDTO
     * @type {TermsAndConditionsRequestDTO}
     * @memberof CustomerTermsAndConditionsApiAcceptTermsandConditions
     */
    readonly termsAndConditionsRequestDTO: TermsAndConditionsRequestDTO

    /**
     * Enter a unique UUID value
     * @type {string}
     * @memberof CustomerTermsAndConditionsApiAcceptTermsandConditions
     */
    readonly xRequestId?: string
}

/**
 * Request parameters for termsandConditions operation in CustomerTermsAndConditionsApi.
 * @export
 * @interface CustomerTermsAndConditionsApiTermsandConditionsRequest
 */
export interface CustomerTermsAndConditionsApiTermsandConditionsRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type {string}
     * @memberof CustomerTermsAndConditionsApiTermsandConditions
     */
    readonly clientHashId: string

    /**
     * Enter a unique UUID value
     * @type {string}
     * @memberof CustomerTermsAndConditionsApiTermsandConditions
     */
    readonly xRequestId?: string
}

/**
 * CustomerTermsAndConditionsApi - object-oriented interface
 * @export
 * @class CustomerTermsAndConditionsApi
 * @extends {BaseAPI}
 */
export class CustomerTermsAndConditionsApi extends BaseAPI {
    /**
     * This API updates the Terms and Conditions acceptance status for a customer
     * @summary Accept Terms and Conditions
     * @param {CustomerTermsAndConditionsApiAcceptTermsandConditionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerTermsAndConditionsApi
     */
    public acceptTermsandConditions(requestParameters: CustomerTermsAndConditionsApiAcceptTermsandConditionsRequest, options?: RawAxiosRequestConfig) {
        return CustomerTermsAndConditionsApiFp(this.configuration).acceptTermsandConditions(requestParameters.clientHashId, requestParameters.customerHashId, requestParameters.termsAndConditionsRequestDTO, requestParameters.xRequestId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This API allows you to fetch the mandatory Terms and Conditions for individual customer onboarding. Refer to the [T&C flow chart](/apis/docs/customer-life-cycle#terms-and-conditions) for more details.
     * @summary Terms and Conditions
     * @param {CustomerTermsAndConditionsApiTermsandConditionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerTermsAndConditionsApi
     */
    public termsandConditions(requestParameters: CustomerTermsAndConditionsApiTermsandConditionsRequest, options?: RawAxiosRequestConfig) {
        return CustomerTermsAndConditionsApiFp(this.configuration).termsandConditions(requestParameters.clientHashId, requestParameters.xRequestId, options).then((request) => request(this.axios, this.basePath));
    }
}


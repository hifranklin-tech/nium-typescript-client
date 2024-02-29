/* tslint:disable */
/* eslint-disable */
/**
 * NIUM Platform
 * NIUM Platform
 *
 * The version of the OpenAPI document: 2023.12.12
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
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { LocalIsoRequest } from '../model';
// @ts-ignore
import { LocalIsoResponse } from '../model';
// @ts-ignore
import { SettlementRequestDTO } from '../model';
/**
 * SimulatorsApi - axios parameter creator
 * @export
 */
export const SimulatorsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This API is used to simulate the `Authorize` or `Authorization` card transaction type.
         * @summary Simulate Authorize Card Transaction
         * @param {LocalIsoRequest} localIsoRequest message
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        simulateAuthorization: async (localIsoRequest: LocalIsoRequest, xRequestId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'localIsoRequest' is not null or undefined
            assertParamExists('simulateAuthorization', 'localIsoRequest', localIsoRequest)
            const localVarPath = `/api/v1/txn`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(localIsoRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This API can be used to run simulation of a given settlement transaction
         * @summary Simulate Settlement Transaction
         * @param {SettlementRequestDTO} settlementRequestDTO settlementRequestDTO
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        simulateClearing: async (settlementRequestDTO: SettlementRequestDTO, xRequestId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'settlementRequestDTO' is not null or undefined
            assertParamExists('simulateClearing', 'settlementRequestDTO', settlementRequestDTO)
            const localVarPath = `/api/v1/settlement/run`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(settlementRequestDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SimulatorsApi - functional programming interface
 * @export
 */
export const SimulatorsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SimulatorsApiAxiosParamCreator(configuration)
    return {
        /**
         * This API is used to simulate the `Authorize` or `Authorization` card transaction type.
         * @summary Simulate Authorize Card Transaction
         * @param {LocalIsoRequest} localIsoRequest message
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async simulateAuthorization(localIsoRequest: LocalIsoRequest, xRequestId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LocalIsoResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.simulateAuthorization(localIsoRequest, xRequestId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SimulatorsApi.simulateAuthorization']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * This API can be used to run simulation of a given settlement transaction
         * @summary Simulate Settlement Transaction
         * @param {SettlementRequestDTO} settlementRequestDTO settlementRequestDTO
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async simulateClearing(settlementRequestDTO: SettlementRequestDTO, xRequestId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.simulateClearing(settlementRequestDTO, xRequestId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SimulatorsApi.simulateClearing']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SimulatorsApi - factory interface
 * @export
 */
export const SimulatorsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SimulatorsApiFp(configuration)
    return {
        /**
         * This API is used to simulate the `Authorize` or `Authorization` card transaction type.
         * @summary Simulate Authorize Card Transaction
         * @param {LocalIsoRequest} localIsoRequest message
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        simulateAuthorization(localIsoRequest: LocalIsoRequest, xRequestId?: string, options?: any): AxiosPromise<LocalIsoResponse> {
            return localVarFp.simulateAuthorization(localIsoRequest, xRequestId, options).then((request) => request(axios, basePath));
        },
        /**
         * This API can be used to run simulation of a given settlement transaction
         * @summary Simulate Settlement Transaction
         * @param {SettlementRequestDTO} settlementRequestDTO settlementRequestDTO
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        simulateClearing(settlementRequestDTO: SettlementRequestDTO, xRequestId?: string, options?: any): AxiosPromise<string> {
            return localVarFp.simulateClearing(settlementRequestDTO, xRequestId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SimulatorsApi - object-oriented interface
 * @export
 * @class SimulatorsApi
 * @extends {BaseAPI}
 */
export class SimulatorsApi extends BaseAPI {
    /**
     * This API is used to simulate the `Authorize` or `Authorization` card transaction type.
     * @summary Simulate Authorize Card Transaction
     * @param {LocalIsoRequest} localIsoRequest message
     * @param {string} [xRequestId] Enter a unique UUID value
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SimulatorsApi
     */
    public simulateAuthorization(localIsoRequest: LocalIsoRequest, xRequestId?: string, options?: RawAxiosRequestConfig) {
        return SimulatorsApiFp(this.configuration).simulateAuthorization(localIsoRequest, xRequestId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This API can be used to run simulation of a given settlement transaction
     * @summary Simulate Settlement Transaction
     * @param {SettlementRequestDTO} settlementRequestDTO settlementRequestDTO
     * @param {string} [xRequestId] Enter a unique UUID value
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SimulatorsApi
     */
    public simulateClearing(settlementRequestDTO: SettlementRequestDTO, xRequestId?: string, options?: RawAxiosRequestConfig) {
        return SimulatorsApiFp(this.configuration).simulateClearing(settlementRequestDTO, xRequestId, options).then((request) => request(this.axios, this.basePath));
    }
}


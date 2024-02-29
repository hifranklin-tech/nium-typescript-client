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
import { AccountResponseDTO } from '../model';
// @ts-ignore
import { ClientPrefundResponseDTO } from '../model';
// @ts-ignore
import { PayinApiError } from '../model';
// @ts-ignore
import { PrefundRequestDTO } from '../model';
// @ts-ignore
import { WalletApiError } from '../model';
/**
 * ClientPrefundAccountApi - axios parameter creator
 * @export
 */
export const ClientPrefundAccountApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This API allows you to fetch the available prefund balance for a client.
         * @summary Client Prefund Balances
         * @param {string} clientHashId Unique client identifier generated and shared before API handshake.
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clientPrefundBalances: async (clientHashId: string, xRequestId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientHashId' is not null or undefined
            assertParamExists('clientPrefundBalances', 'clientHashId', clientHashId)
            const localVarPath = `/api/v1/client/{clientHashId}/balances`
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
        /**
         * This API allows our clients to raise a prefund request in the system.
         * @summary Client Prefund Request
         * @param {string} clientHashId Unique client identifier generated and shared before API handshake.
         * @param {PrefundRequestDTO} prefundRequestDTO prefundRequestDTO
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clientPrefundRequest: async (clientHashId: string, prefundRequestDTO: PrefundRequestDTO, xRequestId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientHashId' is not null or undefined
            assertParamExists('clientPrefundRequest', 'clientHashId', clientHashId)
            // verify required parameter 'prefundRequestDTO' is not null or undefined
            assertParamExists('clientPrefundRequest', 'prefundRequestDTO', prefundRequestDTO)
            const localVarPath = `/api/v1/client/{clientHashId}/prefund`
                .replace(`{${"clientHashId"}}`, encodeURIComponent(String(clientHashId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(prefundRequestDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This API allows you to fetch the details of client prefund requests.
         * @summary Fetch Client Prefund Request
         * @param {string} clientHashId Unique client Id assigned to the client during the onboarding process.
         * @param {string} [amount] amount
         * @param {string} [bankReferenceNumber] bankReferenceNumber
         * @param {string} [currency] currency
         * @param {string} [endDate] endDate
         * @param {string} [order] The sort order for the results. Acceptable values are ASC or DESC. The default order value is DESC.
         * @param {number} [page] This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0.
         * @param {string} [prefundStatus] prefundStatus
         * @param {number} [size] The upper limit on the number of items to be fetched with each call. Integer values from 1 onwards are acceptable. Default size is 20.
         * @param {string} [startDate] startDate
         * @param {string} [systemReferenceNumber] systemReferenceNumber
         * @param {string} [uniquePayerId] uniquePayerId
         * @param {string} [uniquePaymentId] uniquePaymentId
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchClientPrefundRequest: async (clientHashId: string, amount?: string, bankReferenceNumber?: string, currency?: string, endDate?: string, order?: string, page?: number, prefundStatus?: string, size?: number, startDate?: string, systemReferenceNumber?: string, uniquePayerId?: string, uniquePaymentId?: string, xRequestId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientHashId' is not null or undefined
            assertParamExists('fetchClientPrefundRequest', 'clientHashId', clientHashId)
            const localVarPath = `/api/v1/client/{clientHashId}/prefundList`
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

            if (amount !== undefined) {
                localVarQueryParameter['amount'] = amount;
            }

            if (bankReferenceNumber !== undefined) {
                localVarQueryParameter['bankReferenceNumber'] = bankReferenceNumber;
            }

            if (currency !== undefined) {
                localVarQueryParameter['currency'] = currency;
            }

            if (endDate !== undefined) {
                localVarQueryParameter['endDate'] = endDate;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (prefundStatus !== undefined) {
                localVarQueryParameter['prefundStatus'] = prefundStatus;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (startDate !== undefined) {
                localVarQueryParameter['startDate'] = startDate;
            }

            if (systemReferenceNumber !== undefined) {
                localVarQueryParameter['systemReferenceNumber'] = systemReferenceNumber;
            }

            if (uniquePayerId !== undefined) {
                localVarQueryParameter['uniquePayerId'] = uniquePayerId;
            }

            if (uniquePaymentId !== undefined) {
                localVarQueryParameter['uniquePaymentId'] = uniquePaymentId;
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
 * ClientPrefundAccountApi - functional programming interface
 * @export
 */
export const ClientPrefundAccountApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ClientPrefundAccountApiAxiosParamCreator(configuration)
    return {
        /**
         * This API allows you to fetch the available prefund balance for a client.
         * @summary Client Prefund Balances
         * @param {string} clientHashId Unique client identifier generated and shared before API handshake.
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async clientPrefundBalances(clientHashId: string, xRequestId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AccountResponseDTO>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.clientPrefundBalances(clientHashId, xRequestId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ClientPrefundAccountApi.clientPrefundBalances']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * This API allows our clients to raise a prefund request in the system.
         * @summary Client Prefund Request
         * @param {string} clientHashId Unique client identifier generated and shared before API handshake.
         * @param {PrefundRequestDTO} prefundRequestDTO prefundRequestDTO
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async clientPrefundRequest(clientHashId: string, prefundRequestDTO: PrefundRequestDTO, xRequestId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ClientPrefundResponseDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.clientPrefundRequest(clientHashId, prefundRequestDTO, xRequestId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ClientPrefundAccountApi.clientPrefundRequest']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * This API allows you to fetch the details of client prefund requests.
         * @summary Fetch Client Prefund Request
         * @param {string} clientHashId Unique client Id assigned to the client during the onboarding process.
         * @param {string} [amount] amount
         * @param {string} [bankReferenceNumber] bankReferenceNumber
         * @param {string} [currency] currency
         * @param {string} [endDate] endDate
         * @param {string} [order] The sort order for the results. Acceptable values are ASC or DESC. The default order value is DESC.
         * @param {number} [page] This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0.
         * @param {string} [prefundStatus] prefundStatus
         * @param {number} [size] The upper limit on the number of items to be fetched with each call. Integer values from 1 onwards are acceptable. Default size is 20.
         * @param {string} [startDate] startDate
         * @param {string} [systemReferenceNumber] systemReferenceNumber
         * @param {string} [uniquePayerId] uniquePayerId
         * @param {string} [uniquePaymentId] uniquePaymentId
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchClientPrefundRequest(clientHashId: string, amount?: string, bankReferenceNumber?: string, currency?: string, endDate?: string, order?: string, page?: number, prefundStatus?: string, size?: number, startDate?: string, systemReferenceNumber?: string, uniquePayerId?: string, uniquePaymentId?: string, xRequestId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchClientPrefundRequest(clientHashId, amount, bankReferenceNumber, currency, endDate, order, page, prefundStatus, size, startDate, systemReferenceNumber, uniquePayerId, uniquePaymentId, xRequestId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ClientPrefundAccountApi.fetchClientPrefundRequest']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ClientPrefundAccountApi - factory interface
 * @export
 */
export const ClientPrefundAccountApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ClientPrefundAccountApiFp(configuration)
    return {
        /**
         * This API allows you to fetch the available prefund balance for a client.
         * @summary Client Prefund Balances
         * @param {string} clientHashId Unique client identifier generated and shared before API handshake.
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clientPrefundBalances(clientHashId: string, xRequestId?: string, options?: any): AxiosPromise<Array<AccountResponseDTO>> {
            return localVarFp.clientPrefundBalances(clientHashId, xRequestId, options).then((request) => request(axios, basePath));
        },
        /**
         * This API allows our clients to raise a prefund request in the system.
         * @summary Client Prefund Request
         * @param {string} clientHashId Unique client identifier generated and shared before API handshake.
         * @param {PrefundRequestDTO} prefundRequestDTO prefundRequestDTO
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clientPrefundRequest(clientHashId: string, prefundRequestDTO: PrefundRequestDTO, xRequestId?: string, options?: any): AxiosPromise<ClientPrefundResponseDTO> {
            return localVarFp.clientPrefundRequest(clientHashId, prefundRequestDTO, xRequestId, options).then((request) => request(axios, basePath));
        },
        /**
         * This API allows you to fetch the details of client prefund requests.
         * @summary Fetch Client Prefund Request
         * @param {string} clientHashId Unique client Id assigned to the client during the onboarding process.
         * @param {string} [amount] amount
         * @param {string} [bankReferenceNumber] bankReferenceNumber
         * @param {string} [currency] currency
         * @param {string} [endDate] endDate
         * @param {string} [order] The sort order for the results. Acceptable values are ASC or DESC. The default order value is DESC.
         * @param {number} [page] This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0.
         * @param {string} [prefundStatus] prefundStatus
         * @param {number} [size] The upper limit on the number of items to be fetched with each call. Integer values from 1 onwards are acceptable. Default size is 20.
         * @param {string} [startDate] startDate
         * @param {string} [systemReferenceNumber] systemReferenceNumber
         * @param {string} [uniquePayerId] uniquePayerId
         * @param {string} [uniquePaymentId] uniquePaymentId
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchClientPrefundRequest(clientHashId: string, amount?: string, bankReferenceNumber?: string, currency?: string, endDate?: string, order?: string, page?: number, prefundStatus?: string, size?: number, startDate?: string, systemReferenceNumber?: string, uniquePayerId?: string, uniquePaymentId?: string, xRequestId?: string, options?: any): AxiosPromise<object> {
            return localVarFp.fetchClientPrefundRequest(clientHashId, amount, bankReferenceNumber, currency, endDate, order, page, prefundStatus, size, startDate, systemReferenceNumber, uniquePayerId, uniquePaymentId, xRequestId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ClientPrefundAccountApi - object-oriented interface
 * @export
 * @class ClientPrefundAccountApi
 * @extends {BaseAPI}
 */
export class ClientPrefundAccountApi extends BaseAPI {
    /**
     * This API allows you to fetch the available prefund balance for a client.
     * @summary Client Prefund Balances
     * @param {string} clientHashId Unique client identifier generated and shared before API handshake.
     * @param {string} [xRequestId] Enter a unique UUID value
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientPrefundAccountApi
     */
    public clientPrefundBalances(clientHashId: string, xRequestId?: string, options?: RawAxiosRequestConfig) {
        return ClientPrefundAccountApiFp(this.configuration).clientPrefundBalances(clientHashId, xRequestId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This API allows our clients to raise a prefund request in the system.
     * @summary Client Prefund Request
     * @param {string} clientHashId Unique client identifier generated and shared before API handshake.
     * @param {PrefundRequestDTO} prefundRequestDTO prefundRequestDTO
     * @param {string} [xRequestId] Enter a unique UUID value
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientPrefundAccountApi
     */
    public clientPrefundRequest(clientHashId: string, prefundRequestDTO: PrefundRequestDTO, xRequestId?: string, options?: RawAxiosRequestConfig) {
        return ClientPrefundAccountApiFp(this.configuration).clientPrefundRequest(clientHashId, prefundRequestDTO, xRequestId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This API allows you to fetch the details of client prefund requests.
     * @summary Fetch Client Prefund Request
     * @param {string} clientHashId Unique client Id assigned to the client during the onboarding process.
     * @param {string} [amount] amount
     * @param {string} [bankReferenceNumber] bankReferenceNumber
     * @param {string} [currency] currency
     * @param {string} [endDate] endDate
     * @param {string} [order] The sort order for the results. Acceptable values are ASC or DESC. The default order value is DESC.
     * @param {number} [page] This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0.
     * @param {string} [prefundStatus] prefundStatus
     * @param {number} [size] The upper limit on the number of items to be fetched with each call. Integer values from 1 onwards are acceptable. Default size is 20.
     * @param {string} [startDate] startDate
     * @param {string} [systemReferenceNumber] systemReferenceNumber
     * @param {string} [uniquePayerId] uniquePayerId
     * @param {string} [uniquePaymentId] uniquePaymentId
     * @param {string} [xRequestId] Enter a unique UUID value
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClientPrefundAccountApi
     */
    public fetchClientPrefundRequest(clientHashId: string, amount?: string, bankReferenceNumber?: string, currency?: string, endDate?: string, order?: string, page?: number, prefundStatus?: string, size?: number, startDate?: string, systemReferenceNumber?: string, uniquePayerId?: string, uniquePaymentId?: string, xRequestId?: string, options?: RawAxiosRequestConfig) {
        return ClientPrefundAccountApiFp(this.configuration).fetchClientPrefundRequest(clientHashId, amount, bankReferenceNumber, currency, endDate, order, page, prefundStatus, size, startDate, systemReferenceNumber, uniquePayerId, uniquePaymentId, xRequestId, options).then((request) => request(this.axios, this.basePath));
    }
}

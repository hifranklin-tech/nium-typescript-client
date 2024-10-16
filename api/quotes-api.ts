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
import type { CreateQuoteErrorResponse } from '../model';
// @ts-ignore
import type { Descriptive404Error } from '../model';
// @ts-ignore
import type { FXStandard401Error } from '../model';
// @ts-ignore
import type { FXStandard403Error } from '../model';
// @ts-ignore
import type { FXStandard500Error } from '../model';
// @ts-ignore
import type { FetchQuoteErrorResponse } from '../model';
// @ts-ignore
import type { QuoteCreationRequest } from '../model';
// @ts-ignore
import type { QuoteCreationResponse } from '../model';
/**
 * QuotesApi - axios parameter creator
 * @export
 */
export const QuotesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This API creates an FX quote for a currency pair according to the desired lock period and conversion schedule. The FX rate provided by this API includes the Nium markup and can be utilized for any FX conversion within the quote\'s validity period.
         * @summary Create Quote
         * @param {string} clientHashId Unique identifier of the client.
         * @param {QuoteCreationRequest} quoteCreationRequest quoteCreationRequest
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createQuote: async (clientHashId: string, quoteCreationRequest: QuoteCreationRequest, xRequestId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientHashId' is not null or undefined
            assertParamExists('createQuote', 'clientHashId', clientHashId)
            // verify required parameter 'quoteCreationRequest' is not null or undefined
            assertParamExists('createQuote', 'quoteCreationRequest', quoteCreationRequest)
            const localVarPath = `/api/v1/client/{clientHashId}/quotes`
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
            localVarRequestOptions.data = serializeDataIfNeeded(quoteCreationRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This API allows to fetch a quote. A quote is used to identify the exchange rate, and associated markup and fees.
         * @summary Fetch Quote by ID
         * @param {string} clientHashId Unique identifier of the client.
         * @param {string} quoteId 
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchQuote: async (clientHashId: string, quoteId: string, xRequestId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientHashId' is not null or undefined
            assertParamExists('fetchQuote', 'clientHashId', clientHashId)
            // verify required parameter 'quoteId' is not null or undefined
            assertParamExists('fetchQuote', 'quoteId', quoteId)
            const localVarPath = `/api/v1/client/{clientHashId}/quotes/{quoteId}`
                .replace(`{${"clientHashId"}}`, encodeURIComponent(String(clientHashId)))
                .replace(`{${"quoteId"}}`, encodeURIComponent(String(quoteId)));
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
 * QuotesApi - functional programming interface
 * @export
 */
export const QuotesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = QuotesApiAxiosParamCreator(configuration)
    return {
        /**
         * This API creates an FX quote for a currency pair according to the desired lock period and conversion schedule. The FX rate provided by this API includes the Nium markup and can be utilized for any FX conversion within the quote\'s validity period.
         * @summary Create Quote
         * @param {string} clientHashId Unique identifier of the client.
         * @param {QuoteCreationRequest} quoteCreationRequest quoteCreationRequest
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createQuote(clientHashId: string, quoteCreationRequest: QuoteCreationRequest, xRequestId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QuoteCreationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createQuote(clientHashId, quoteCreationRequest, xRequestId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['QuotesApi.createQuote']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * This API allows to fetch a quote. A quote is used to identify the exchange rate, and associated markup and fees.
         * @summary Fetch Quote by ID
         * @param {string} clientHashId Unique identifier of the client.
         * @param {string} quoteId 
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchQuote(clientHashId: string, quoteId: string, xRequestId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QuoteCreationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchQuote(clientHashId, quoteId, xRequestId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['QuotesApi.fetchQuote']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * QuotesApi - factory interface
 * @export
 */
export const QuotesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = QuotesApiFp(configuration)
    return {
        /**
         * This API creates an FX quote for a currency pair according to the desired lock period and conversion schedule. The FX rate provided by this API includes the Nium markup and can be utilized for any FX conversion within the quote\'s validity period.
         * @summary Create Quote
         * @param {QuotesApiCreateQuoteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createQuote(requestParameters: QuotesApiCreateQuoteRequest, options?: RawAxiosRequestConfig): AxiosPromise<QuoteCreationResponse> {
            return localVarFp.createQuote(requestParameters.clientHashId, requestParameters.quoteCreationRequest, requestParameters.xRequestId, options).then((request) => request(axios, basePath));
        },
        /**
         * This API allows to fetch a quote. A quote is used to identify the exchange rate, and associated markup and fees.
         * @summary Fetch Quote by ID
         * @param {QuotesApiFetchQuoteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchQuote(requestParameters: QuotesApiFetchQuoteRequest, options?: RawAxiosRequestConfig): AxiosPromise<QuoteCreationResponse> {
            return localVarFp.fetchQuote(requestParameters.clientHashId, requestParameters.quoteId, requestParameters.xRequestId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createQuote operation in QuotesApi.
 * @export
 * @interface QuotesApiCreateQuoteRequest
 */
export interface QuotesApiCreateQuoteRequest {
    /**
     * Unique identifier of the client.
     * @type {string}
     * @memberof QuotesApiCreateQuote
     */
    readonly clientHashId: string

    /**
     * quoteCreationRequest
     * @type {QuoteCreationRequest}
     * @memberof QuotesApiCreateQuote
     */
    readonly quoteCreationRequest: QuoteCreationRequest

    /**
     * Enter a unique UUID value
     * @type {string}
     * @memberof QuotesApiCreateQuote
     */
    readonly xRequestId?: string
}

/**
 * Request parameters for fetchQuote operation in QuotesApi.
 * @export
 * @interface QuotesApiFetchQuoteRequest
 */
export interface QuotesApiFetchQuoteRequest {
    /**
     * Unique identifier of the client.
     * @type {string}
     * @memberof QuotesApiFetchQuote
     */
    readonly clientHashId: string

    /**
     * 
     * @type {string}
     * @memberof QuotesApiFetchQuote
     */
    readonly quoteId: string

    /**
     * Enter a unique UUID value
     * @type {string}
     * @memberof QuotesApiFetchQuote
     */
    readonly xRequestId?: string
}

/**
 * QuotesApi - object-oriented interface
 * @export
 * @class QuotesApi
 * @extends {BaseAPI}
 */
export class QuotesApi extends BaseAPI {
    /**
     * This API creates an FX quote for a currency pair according to the desired lock period and conversion schedule. The FX rate provided by this API includes the Nium markup and can be utilized for any FX conversion within the quote\'s validity period.
     * @summary Create Quote
     * @param {QuotesApiCreateQuoteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuotesApi
     */
    public createQuote(requestParameters: QuotesApiCreateQuoteRequest, options?: RawAxiosRequestConfig) {
        return QuotesApiFp(this.configuration).createQuote(requestParameters.clientHashId, requestParameters.quoteCreationRequest, requestParameters.xRequestId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This API allows to fetch a quote. A quote is used to identify the exchange rate, and associated markup and fees.
     * @summary Fetch Quote by ID
     * @param {QuotesApiFetchQuoteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuotesApi
     */
    public fetchQuote(requestParameters: QuotesApiFetchQuoteRequest, options?: RawAxiosRequestConfig) {
        return QuotesApiFp(this.configuration).fetchQuote(requestParameters.clientHashId, requestParameters.quoteId, requestParameters.xRequestId, options).then((request) => request(this.axios, this.basePath));
    }
}


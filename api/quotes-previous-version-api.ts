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
import type { ExchangeRateV2ResponseDto } from '../model';
// @ts-ignore
import type { FxHoldLockResponseContent } from '../model';
// @ts-ignore
import type { WalletApiError } from '../model';
/**
 * QuotesPreviousVersionApi - axios parameter creator
 * @export
 */
export const QuotesPreviousVersionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This API allows you to fetch exchange rate, and lock and hold the rates till a certain amount of time.
         * @summary Exchange Rate Lock and Hold
         * @param {string} clientHashId Unique client identifier generated and shared before API handshake.
         * @param {string} customerHashId Unique customer identifier generated on customer creation.
         * @param {string} destinationCurrency This field contains the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for the destination amount.
         * @param {string} sourceCurrency This field contains the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for the source amount.
         * @param {string} walletHashId Unique wallet identifier generated simultaneously with customer creation.
         * @param {number} [additionalFxMarkup] This field is used if client wants to apply additional Fxmarkup in the exchange rate for their customer. The value should be in percentage. For example use 0.10 for 0.1% additional markup.
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        exchangeRateLockandHold: async (clientHashId: string, customerHashId: string, destinationCurrency: string, sourceCurrency: string, walletHashId: string, additionalFxMarkup?: number, xRequestId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientHashId' is not null or undefined
            assertParamExists('exchangeRateLockandHold', 'clientHashId', clientHashId)
            // verify required parameter 'customerHashId' is not null or undefined
            assertParamExists('exchangeRateLockandHold', 'customerHashId', customerHashId)
            // verify required parameter 'destinationCurrency' is not null or undefined
            assertParamExists('exchangeRateLockandHold', 'destinationCurrency', destinationCurrency)
            // verify required parameter 'sourceCurrency' is not null or undefined
            assertParamExists('exchangeRateLockandHold', 'sourceCurrency', sourceCurrency)
            // verify required parameter 'walletHashId' is not null or undefined
            assertParamExists('exchangeRateLockandHold', 'walletHashId', walletHashId)
            const localVarPath = `/api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/lockExchangeRate`
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

            if (additionalFxMarkup !== undefined) {
                localVarQueryParameter['additionalFxMarkup'] = additionalFxMarkup;
            }

            if (destinationCurrency !== undefined) {
                localVarQueryParameter['destinationCurrency'] = destinationCurrency;
            }

            if (sourceCurrency !== undefined) {
                localVarQueryParameter['sourceCurrency'] = sourceCurrency;
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
         * This API fetches the exchange rate between source currency and destination currency. If either source or destination amount is provided, the equivalent amount will also be returned. Note that you may not send both sourceAmount and destinationAmount as query parameters together. If both are provided, sourceAmount shall be taken for conversion.
         * @summary Exchange Rate With Markup
         * @param {string} clientHashId Unique customer identifier generated on customer creation.
         * @param {string} sourceCurrencyCode This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount.
         * @param {string} destinationCurrencyCode This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount.
         * @param {number} [sourceAmount] An amount to be converted. This field takes precedence over destinationAmount, in case both are provided.
         * @param {number} [destinationAmount] An amount to which the source is converted. It can be used to find the necessary source amount value. If both sourceAmount and destinationAmount are provided, this field is ignored.
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        exchangeRateWithMarkup: async (clientHashId: string, sourceCurrencyCode: string, destinationCurrencyCode: string, sourceAmount?: number, destinationAmount?: number, xRequestId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientHashId' is not null or undefined
            assertParamExists('exchangeRateWithMarkup', 'clientHashId', clientHashId)
            // verify required parameter 'sourceCurrencyCode' is not null or undefined
            assertParamExists('exchangeRateWithMarkup', 'sourceCurrencyCode', sourceCurrencyCode)
            // verify required parameter 'destinationCurrencyCode' is not null or undefined
            assertParamExists('exchangeRateWithMarkup', 'destinationCurrencyCode', destinationCurrencyCode)
            const localVarPath = `/api/v1/client/{clientHashId}/exchangeRate`
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

            if (sourceCurrencyCode !== undefined) {
                localVarQueryParameter['sourceCurrencyCode'] = sourceCurrencyCode;
            }

            if (destinationCurrencyCode !== undefined) {
                localVarQueryParameter['destinationCurrencyCode'] = destinationCurrencyCode;
            }

            if (sourceAmount !== undefined) {
                localVarQueryParameter['sourceAmount'] = sourceAmount;
            }

            if (destinationAmount !== undefined) {
                localVarQueryParameter['destinationAmount'] = destinationAmount;
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
 * QuotesPreviousVersionApi - functional programming interface
 * @export
 */
export const QuotesPreviousVersionApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = QuotesPreviousVersionApiAxiosParamCreator(configuration)
    return {
        /**
         * This API allows you to fetch exchange rate, and lock and hold the rates till a certain amount of time.
         * @summary Exchange Rate Lock and Hold
         * @param {string} clientHashId Unique client identifier generated and shared before API handshake.
         * @param {string} customerHashId Unique customer identifier generated on customer creation.
         * @param {string} destinationCurrency This field contains the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for the destination amount.
         * @param {string} sourceCurrency This field contains the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for the source amount.
         * @param {string} walletHashId Unique wallet identifier generated simultaneously with customer creation.
         * @param {number} [additionalFxMarkup] This field is used if client wants to apply additional Fxmarkup in the exchange rate for their customer. The value should be in percentage. For example use 0.10 for 0.1% additional markup.
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async exchangeRateLockandHold(clientHashId: string, customerHashId: string, destinationCurrency: string, sourceCurrency: string, walletHashId: string, additionalFxMarkup?: number, xRequestId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FxHoldLockResponseContent>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.exchangeRateLockandHold(clientHashId, customerHashId, destinationCurrency, sourceCurrency, walletHashId, additionalFxMarkup, xRequestId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['QuotesPreviousVersionApi.exchangeRateLockandHold']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * This API fetches the exchange rate between source currency and destination currency. If either source or destination amount is provided, the equivalent amount will also be returned. Note that you may not send both sourceAmount and destinationAmount as query parameters together. If both are provided, sourceAmount shall be taken for conversion.
         * @summary Exchange Rate With Markup
         * @param {string} clientHashId Unique customer identifier generated on customer creation.
         * @param {string} sourceCurrencyCode This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount.
         * @param {string} destinationCurrencyCode This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount.
         * @param {number} [sourceAmount] An amount to be converted. This field takes precedence over destinationAmount, in case both are provided.
         * @param {number} [destinationAmount] An amount to which the source is converted. It can be used to find the necessary source amount value. If both sourceAmount and destinationAmount are provided, this field is ignored.
         * @param {string} [xRequestId] Enter a unique UUID value
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async exchangeRateWithMarkup(clientHashId: string, sourceCurrencyCode: string, destinationCurrencyCode: string, sourceAmount?: number, destinationAmount?: number, xRequestId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExchangeRateV2ResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.exchangeRateWithMarkup(clientHashId, sourceCurrencyCode, destinationCurrencyCode, sourceAmount, destinationAmount, xRequestId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['QuotesPreviousVersionApi.exchangeRateWithMarkup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * QuotesPreviousVersionApi - factory interface
 * @export
 */
export const QuotesPreviousVersionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = QuotesPreviousVersionApiFp(configuration)
    return {
        /**
         * This API allows you to fetch exchange rate, and lock and hold the rates till a certain amount of time.
         * @summary Exchange Rate Lock and Hold
         * @param {QuotesPreviousVersionApiExchangeRateLockandHoldRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        exchangeRateLockandHold(requestParameters: QuotesPreviousVersionApiExchangeRateLockandHoldRequest, options?: RawAxiosRequestConfig): AxiosPromise<FxHoldLockResponseContent> {
            return localVarFp.exchangeRateLockandHold(requestParameters.clientHashId, requestParameters.customerHashId, requestParameters.destinationCurrency, requestParameters.sourceCurrency, requestParameters.walletHashId, requestParameters.additionalFxMarkup, requestParameters.xRequestId, options).then((request) => request(axios, basePath));
        },
        /**
         * This API fetches the exchange rate between source currency and destination currency. If either source or destination amount is provided, the equivalent amount will also be returned. Note that you may not send both sourceAmount and destinationAmount as query parameters together. If both are provided, sourceAmount shall be taken for conversion.
         * @summary Exchange Rate With Markup
         * @param {QuotesPreviousVersionApiExchangeRateWithMarkupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        exchangeRateWithMarkup(requestParameters: QuotesPreviousVersionApiExchangeRateWithMarkupRequest, options?: RawAxiosRequestConfig): AxiosPromise<ExchangeRateV2ResponseDto> {
            return localVarFp.exchangeRateWithMarkup(requestParameters.clientHashId, requestParameters.sourceCurrencyCode, requestParameters.destinationCurrencyCode, requestParameters.sourceAmount, requestParameters.destinationAmount, requestParameters.xRequestId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for exchangeRateLockandHold operation in QuotesPreviousVersionApi.
 * @export
 * @interface QuotesPreviousVersionApiExchangeRateLockandHoldRequest
 */
export interface QuotesPreviousVersionApiExchangeRateLockandHoldRequest {
    /**
     * Unique client identifier generated and shared before API handshake.
     * @type {string}
     * @memberof QuotesPreviousVersionApiExchangeRateLockandHold
     */
    readonly clientHashId: string

    /**
     * Unique customer identifier generated on customer creation.
     * @type {string}
     * @memberof QuotesPreviousVersionApiExchangeRateLockandHold
     */
    readonly customerHashId: string

    /**
     * This field contains the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for the destination amount.
     * @type {string}
     * @memberof QuotesPreviousVersionApiExchangeRateLockandHold
     */
    readonly destinationCurrency: string

    /**
     * This field contains the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for the source amount.
     * @type {string}
     * @memberof QuotesPreviousVersionApiExchangeRateLockandHold
     */
    readonly sourceCurrency: string

    /**
     * Unique wallet identifier generated simultaneously with customer creation.
     * @type {string}
     * @memberof QuotesPreviousVersionApiExchangeRateLockandHold
     */
    readonly walletHashId: string

    /**
     * This field is used if client wants to apply additional Fxmarkup in the exchange rate for their customer. The value should be in percentage. For example use 0.10 for 0.1% additional markup.
     * @type {number}
     * @memberof QuotesPreviousVersionApiExchangeRateLockandHold
     */
    readonly additionalFxMarkup?: number

    /**
     * Enter a unique UUID value
     * @type {string}
     * @memberof QuotesPreviousVersionApiExchangeRateLockandHold
     */
    readonly xRequestId?: string
}

/**
 * Request parameters for exchangeRateWithMarkup operation in QuotesPreviousVersionApi.
 * @export
 * @interface QuotesPreviousVersionApiExchangeRateWithMarkupRequest
 */
export interface QuotesPreviousVersionApiExchangeRateWithMarkupRequest {
    /**
     * Unique customer identifier generated on customer creation.
     * @type {string}
     * @memberof QuotesPreviousVersionApiExchangeRateWithMarkup
     */
    readonly clientHashId: string

    /**
     * This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount.
     * @type {string}
     * @memberof QuotesPreviousVersionApiExchangeRateWithMarkup
     */
    readonly sourceCurrencyCode: string

    /**
     * This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount.
     * @type {string}
     * @memberof QuotesPreviousVersionApiExchangeRateWithMarkup
     */
    readonly destinationCurrencyCode: string

    /**
     * An amount to be converted. This field takes precedence over destinationAmount, in case both are provided.
     * @type {number}
     * @memberof QuotesPreviousVersionApiExchangeRateWithMarkup
     */
    readonly sourceAmount?: number

    /**
     * An amount to which the source is converted. It can be used to find the necessary source amount value. If both sourceAmount and destinationAmount are provided, this field is ignored.
     * @type {number}
     * @memberof QuotesPreviousVersionApiExchangeRateWithMarkup
     */
    readonly destinationAmount?: number

    /**
     * Enter a unique UUID value
     * @type {string}
     * @memberof QuotesPreviousVersionApiExchangeRateWithMarkup
     */
    readonly xRequestId?: string
}

/**
 * QuotesPreviousVersionApi - object-oriented interface
 * @export
 * @class QuotesPreviousVersionApi
 * @extends {BaseAPI}
 */
export class QuotesPreviousVersionApi extends BaseAPI {
    /**
     * This API allows you to fetch exchange rate, and lock and hold the rates till a certain amount of time.
     * @summary Exchange Rate Lock and Hold
     * @param {QuotesPreviousVersionApiExchangeRateLockandHoldRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuotesPreviousVersionApi
     */
    public exchangeRateLockandHold(requestParameters: QuotesPreviousVersionApiExchangeRateLockandHoldRequest, options?: RawAxiosRequestConfig) {
        return QuotesPreviousVersionApiFp(this.configuration).exchangeRateLockandHold(requestParameters.clientHashId, requestParameters.customerHashId, requestParameters.destinationCurrency, requestParameters.sourceCurrency, requestParameters.walletHashId, requestParameters.additionalFxMarkup, requestParameters.xRequestId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This API fetches the exchange rate between source currency and destination currency. If either source or destination amount is provided, the equivalent amount will also be returned. Note that you may not send both sourceAmount and destinationAmount as query parameters together. If both are provided, sourceAmount shall be taken for conversion.
     * @summary Exchange Rate With Markup
     * @param {QuotesPreviousVersionApiExchangeRateWithMarkupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuotesPreviousVersionApi
     */
    public exchangeRateWithMarkup(requestParameters: QuotesPreviousVersionApiExchangeRateWithMarkupRequest, options?: RawAxiosRequestConfig) {
        return QuotesPreviousVersionApiFp(this.configuration).exchangeRateWithMarkup(requestParameters.clientHashId, requestParameters.sourceCurrencyCode, requestParameters.destinationCurrencyCode, requestParameters.sourceAmount, requestParameters.destinationAmount, requestParameters.xRequestId, options).then((request) => request(this.axios, this.basePath));
    }
}


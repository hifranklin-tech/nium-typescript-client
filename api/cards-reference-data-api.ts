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
import type { ReferenceRateResponseDto } from '../model';
/**
 * CardsReferenceDataApi - axios parameter creator
 * @export
 */
export const CardsReferenceDataApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This API allows you to get the reference exchange rate.
         * @summary Reference Exchange Rate
         * @param {string} cardScheme This field accepts the card scheme provider name: Visa Mastercard
         * @param {string} clientHashId Unique customer identifier generated on customer creation.
         * @param {number} fromAmount From Amount also known as transaction amount that will be converted from the fromCurrency and to the toCurrency.
         * @param {string} fromCurrency This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) of the transaction currency. Should be one of the applicable EEA currencies (EUR, BGN, HRK, CZK, DKK, HUF, PLN, RON, SEK, GBP, ISK, CHF and NOK).
         * @param {string} toCurrency This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) of the cardholder billing currency. Should be one of the applicable EEA currencies (EUR, BGN, HRK, CZK, DKK, HUF, PLN, RON, SEK, GBP, ISK, CHF and NOK)
         * @param {string} [xRequestId] Enter a unique UUID value.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        referenceExchangeRate: async (cardScheme: string, clientHashId: string, fromAmount: number, fromCurrency: string, toCurrency: string, xRequestId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cardScheme' is not null or undefined
            assertParamExists('referenceExchangeRate', 'cardScheme', cardScheme)
            // verify required parameter 'clientHashId' is not null or undefined
            assertParamExists('referenceExchangeRate', 'clientHashId', clientHashId)
            // verify required parameter 'fromAmount' is not null or undefined
            assertParamExists('referenceExchangeRate', 'fromAmount', fromAmount)
            // verify required parameter 'fromCurrency' is not null or undefined
            assertParamExists('referenceExchangeRate', 'fromCurrency', fromCurrency)
            // verify required parameter 'toCurrency' is not null or undefined
            assertParamExists('referenceExchangeRate', 'toCurrency', toCurrency)
            const localVarPath = `/api/v1/client/{clientHashId}/referenceRate`
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

            if (cardScheme !== undefined) {
                localVarQueryParameter['cardScheme'] = cardScheme;
            }

            if (fromAmount !== undefined) {
                localVarQueryParameter['fromAmount'] = fromAmount;
            }

            if (fromCurrency !== undefined) {
                localVarQueryParameter['fromCurrency'] = fromCurrency;
            }

            if (toCurrency !== undefined) {
                localVarQueryParameter['toCurrency'] = toCurrency;
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
 * CardsReferenceDataApi - functional programming interface
 * @export
 */
export const CardsReferenceDataApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CardsReferenceDataApiAxiosParamCreator(configuration)
    return {
        /**
         * This API allows you to get the reference exchange rate.
         * @summary Reference Exchange Rate
         * @param {string} cardScheme This field accepts the card scheme provider name: Visa Mastercard
         * @param {string} clientHashId Unique customer identifier generated on customer creation.
         * @param {number} fromAmount From Amount also known as transaction amount that will be converted from the fromCurrency and to the toCurrency.
         * @param {string} fromCurrency This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) of the transaction currency. Should be one of the applicable EEA currencies (EUR, BGN, HRK, CZK, DKK, HUF, PLN, RON, SEK, GBP, ISK, CHF and NOK).
         * @param {string} toCurrency This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) of the cardholder billing currency. Should be one of the applicable EEA currencies (EUR, BGN, HRK, CZK, DKK, HUF, PLN, RON, SEK, GBP, ISK, CHF and NOK)
         * @param {string} [xRequestId] Enter a unique UUID value.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async referenceExchangeRate(cardScheme: string, clientHashId: string, fromAmount: number, fromCurrency: string, toCurrency: string, xRequestId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReferenceRateResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.referenceExchangeRate(cardScheme, clientHashId, fromAmount, fromCurrency, toCurrency, xRequestId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CardsReferenceDataApi.referenceExchangeRate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * CardsReferenceDataApi - factory interface
 * @export
 */
export const CardsReferenceDataApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CardsReferenceDataApiFp(configuration)
    return {
        /**
         * This API allows you to get the reference exchange rate.
         * @summary Reference Exchange Rate
         * @param {CardsReferenceDataApiReferenceExchangeRateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        referenceExchangeRate(requestParameters: CardsReferenceDataApiReferenceExchangeRateRequest, options?: RawAxiosRequestConfig): AxiosPromise<ReferenceRateResponseDto> {
            return localVarFp.referenceExchangeRate(requestParameters.cardScheme, requestParameters.clientHashId, requestParameters.fromAmount, requestParameters.fromCurrency, requestParameters.toCurrency, requestParameters.xRequestId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for referenceExchangeRate operation in CardsReferenceDataApi.
 * @export
 * @interface CardsReferenceDataApiReferenceExchangeRateRequest
 */
export interface CardsReferenceDataApiReferenceExchangeRateRequest {
    /**
     * This field accepts the card scheme provider name: Visa Mastercard
     * @type {string}
     * @memberof CardsReferenceDataApiReferenceExchangeRate
     */
    readonly cardScheme: string

    /**
     * Unique customer identifier generated on customer creation.
     * @type {string}
     * @memberof CardsReferenceDataApiReferenceExchangeRate
     */
    readonly clientHashId: string

    /**
     * From Amount also known as transaction amount that will be converted from the fromCurrency and to the toCurrency.
     * @type {number}
     * @memberof CardsReferenceDataApiReferenceExchangeRate
     */
    readonly fromAmount: number

    /**
     * This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) of the transaction currency. Should be one of the applicable EEA currencies (EUR, BGN, HRK, CZK, DKK, HUF, PLN, RON, SEK, GBP, ISK, CHF and NOK).
     * @type {string}
     * @memberof CardsReferenceDataApiReferenceExchangeRate
     */
    readonly fromCurrency: string

    /**
     * This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) of the cardholder billing currency. Should be one of the applicable EEA currencies (EUR, BGN, HRK, CZK, DKK, HUF, PLN, RON, SEK, GBP, ISK, CHF and NOK)
     * @type {string}
     * @memberof CardsReferenceDataApiReferenceExchangeRate
     */
    readonly toCurrency: string

    /**
     * Enter a unique UUID value.
     * @type {string}
     * @memberof CardsReferenceDataApiReferenceExchangeRate
     */
    readonly xRequestId?: string
}

/**
 * CardsReferenceDataApi - object-oriented interface
 * @export
 * @class CardsReferenceDataApi
 * @extends {BaseAPI}
 */
export class CardsReferenceDataApi extends BaseAPI {
    /**
     * This API allows you to get the reference exchange rate.
     * @summary Reference Exchange Rate
     * @param {CardsReferenceDataApiReferenceExchangeRateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CardsReferenceDataApi
     */
    public referenceExchangeRate(requestParameters: CardsReferenceDataApiReferenceExchangeRateRequest, options?: RawAxiosRequestConfig) {
        return CardsReferenceDataApiFp(this.configuration).referenceExchangeRate(requestParameters.cardScheme, requestParameters.clientHashId, requestParameters.fromAmount, requestParameters.fromCurrency, requestParameters.toCurrency, requestParameters.xRequestId, options).then((request) => request(this.axios, this.basePath));
    }
}


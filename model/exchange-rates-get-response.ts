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


// May contain unused imports in some cases
// @ts-ignore
import type { ExchangeRateGetResponse } from './exchange-rate-get-response';
// May contain unused imports in some cases
// @ts-ignore
import type { Window } from './window';

/**
 * 
 * @export
 * @interface ExchangeRatesGetResponse
 */
export interface ExchangeRatesGetResponse {
    /**
     * 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount.
     * @type {string}
     * @memberof ExchangeRatesGetResponse
     */
    'sourceCurrencyCode'?: string;
    /**
     * 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount.
     * @type {string}
     * @memberof ExchangeRatesGetResponse
     */
    'destinationCurrencyCode'?: string;
    /**
     * The start timestamp used to filter the aggregated time series. Must be in the format \'yyyy-mm-ddTHH:MM:SSZ\'.
     * @type {string}
     * @memberof ExchangeRatesGetResponse
     */
    'start'?: string;
    /**
     * The end timestamp used to filter the aggregated time series. Must be in the format \'yyyy-mm-ddTHH:MM:SSZ\'.
     * @type {string}
     * @memberof ExchangeRatesGetResponse
     */
    'end'?: string;
    /**
     * 
     * @type {Window}
     * @memberof ExchangeRatesGetResponse
     */
    'window'?: Window;
    /**
     * 
     * @type {Array<ExchangeRateGetResponse>}
     * @memberof ExchangeRatesGetResponse
     */
    'exchangeRates'?: Array<ExchangeRateGetResponse>;
}




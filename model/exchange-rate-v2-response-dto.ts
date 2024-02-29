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



/**
 * 
 * @export
 * @interface ExchangeRateV2ResponseDto
 */
export interface ExchangeRateV2ResponseDto {
    /**
     * The credited amount.
     * @type {number}
     * @memberof ExchangeRateV2ResponseDto
     */
    'destinationAmount'?: number;
    /**
     * This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount.
     * @type {string}
     * @memberof ExchangeRateV2ResponseDto
     */
    'destinationCurrencyCode'?: string;
    /**
     * The ecb exchange rate fetched for the conversion. This field is only applicable for EU and UK.
     * @type {number}
     * @memberof ExchangeRateV2ResponseDto
     */
    'ecbFxRate'?: number;
    /**
     * The exchange rate fetched for the conversion.
     * @type {number}
     * @memberof ExchangeRateV2ResponseDto
     */
    'exchangeRate'?: number;
    /**
     * Timestamp till which the quoted rate is valid. The timezone is UTC +00.
     * @type {string}
     * @memberof ExchangeRateV2ResponseDto
     */
    'expiryDate'?: string;
    /**
     * In case source or destination amount is provided the markup amount will be calculated using markupRate.
     * @type {number}
     * @memberof ExchangeRateV2ResponseDto
     */
    'markupAmount'?: number;
    /**
     * This is the markup rate charged by NIUM.
     * @type {number}
     * @memberof ExchangeRateV2ResponseDto
     */
    'markupRate'?: number;
    /**
     * This is exchangeRate subtracted by the markupRate.
     * @type {number}
     * @memberof ExchangeRateV2ResponseDto
     */
    'netExchangeRate'?: number;
    /**
     * Unique quote Id for the exchange rate.
     * @type {string}
     * @memberof ExchangeRateV2ResponseDto
     */
    'quoteId'?: string;
    /**
     * The netExchangeRate should be divided by the scaling factor to fetch the actual exchange rate.
     * @type {number}
     * @memberof ExchangeRateV2ResponseDto
     */
    'scalingFactor'?: number;
    /**
     * An amount to be converted.
     * @type {number}
     * @memberof ExchangeRateV2ResponseDto
     */
    'sourceAmount'?: number;
    /**
     * This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount.
     * @type {string}
     * @memberof ExchangeRateV2ResponseDto
     */
    'sourceCurrencyCode'?: string;
}

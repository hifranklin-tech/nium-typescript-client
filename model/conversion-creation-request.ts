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



/**
 * 
 * @export
 * @interface ConversionCreationRequest
 */
export interface ConversionCreationRequest {
    /**
     * Free text comment for clients to record and track the conversion.
     * @type {string}
     * @memberof ConversionCreationRequest
     */
    'customerComment'?: string;
    /**
     * Unique identifier of the quote.
     * @type {string}
     * @memberof ConversionCreationRequest
     */
    'quoteId'?: string;
    /**
     * The source amount to be converted to the destination currency.
     * @type {number}
     * @memberof ConversionCreationRequest
     */
    'sourceAmount'?: number;
    /**
     * The amount needed in the destination currency.
     * @type {number}
     * @memberof ConversionCreationRequest
     */
    'destinationAmount'?: number;
    /**
     * 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount.
     * @type {string}
     * @memberof ConversionCreationRequest
     */
    'sourceCurrencyCode'?: string;
    /**
     * 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount.
     * @type {string}
     * @memberof ConversionCreationRequest
     */
    'destinationCurrencyCode'?: string;
}


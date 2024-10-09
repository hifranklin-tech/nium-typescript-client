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
 * @interface CurrencyDetail
 */
export interface CurrencyDetail {
    /**
     * Current balance in the currency.
     * @type {number}
     * @memberof CurrencyDetail
     */
    'balance'?: number;
    /**
     * The 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) for the currency.
     * @type {string}
     * @memberof CurrencyDetail
     */
    'code'?: string;
    /**
     * This field describes if the currency is a base currency or not.
     * @type {boolean}
     * @memberof CurrencyDetail
     */
    'default'?: boolean;
    /**
     * The amount withheld for debiting the wallet.
     * @type {number}
     * @memberof CurrencyDetail
     */
    'withHoldingBalance'?: number;
}


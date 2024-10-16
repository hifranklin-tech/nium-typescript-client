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
 * @interface ClientCurrencyResponseDTO
 */
export interface ClientCurrencyResponseDTO {
    /**
     * This is the authorization order based on priority for available currencies. The order starts from 0 as a highest priority.
     * @type {number}
     * @memberof ClientCurrencyResponseDTO
     */
    'authorizationOrder'?: number;
    /**
     * This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes).
     * @type {string}
     * @memberof ClientCurrencyResponseDTO
     */
    'currencyCode'?: string;
    /**
     * This field contains the decimal unit which will be used for rounding off, for example 0
     * @type {number}
     * @memberof ClientCurrencyResponseDTO
     */
    'decimalUnit'?: number;
    /**
     * This field indicates if forex sell is allowed or not for the currency.
     * @type {boolean}
     * @memberof ClientCurrencyResponseDTO
     */
    'fxSellAllowed'?: boolean;
    /**
     * This field specifies if the remittance is allowed with the respective currency or not.
     * @type {boolean}
     * @memberof ClientCurrencyResponseDTO
     */
    'remittanceAllowed'?: boolean;
}


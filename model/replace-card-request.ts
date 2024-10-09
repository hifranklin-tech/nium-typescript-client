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
 * A card can be replaced using the Replace Card API only if it is permanently blocked. A permanently blocked card cannot be replaced on the same date as date of issuance. For example, a customer issued a card today and request to block the card permanently, on the same day. However, a customer may not call the Replace Card API to issue a replacement on the same date.
 * @export
 * @interface ReplaceCardRequest
 */
export interface ReplaceCardRequest {
    /**
     * The expiry date is applicable only for Virtual cards and not applicable for physical cards. This field is in MMYY format. For Virtual cards, the expiry date can be a maximum of 5 years from when the API is used.
     * @type {string}
     * @memberof ReplaceCardRequest
     */
    'cardExpiry'?: string;
    /**
     * This field accepts 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) in which the client wants to levy the card issuance fee.
     * @type {string}
     * @memberof ReplaceCardRequest
     */
    'cardFeeCurrencyCode': string;
    /**
     * 
     * @type {string}
     * @memberof ReplaceCardRequest
     */
    'plasticId'?: string;
}


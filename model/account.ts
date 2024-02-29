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
 * @interface Account
 */
export interface Account {
    /**
     * Basic Bank Account Number (BBAN) Identifier. This data elements is used for payment accounts which have no IBAN, for example: \"BARC12345612345678\".
     * @type {string}
     * @memberof Account
     */
    'bban'?: string;
    /**
     * This field contains the [3-letter ISO-4217 currency code](doc:currency-and-country-codes).
     * @type {string}
     * @memberof Account
     */
    'currency'?: string;
    /**
     * International Bank Account Number (IBAN) of an account, for example: \"FR7612345987650123456789014\".
     * @type {string}
     * @memberof Account
     */
    'iban'?: string;
    /**
     * Primary Account Number (PAN) of a card in a masked form. This is used for card account in responses, for example \" 1234\"The maximum length: 35.
     * @type {string}
     * @memberof Account
     */
    'maskedPan'?: string;
    /**
     * An alias to access a payment account via a registered mobile phone number. The maximum length: 35
     * @type {string}
     * @memberof Account
     */
    'msisdn'?: string;
    /**
     * Primary Account Number (PAN) of a card, can be tokenized by the ASPSP due to PCI DSS requirements. This is used for card account in responses. The maximum length: 35.
     * @type {string}
     * @memberof Account
     */
    'pan'?: string;
}

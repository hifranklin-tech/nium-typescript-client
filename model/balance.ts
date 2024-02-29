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


// May contain unused imports in some cases
// @ts-ignore
import { BalanceAmount } from './balance-amount';

/**
 * 
 * @export
 * @interface Balance
 */
export interface Balance {
    /**
     * 
     * @type {BalanceAmount}
     * @memberof Balance
     */
    'balanceAmount'?: BalanceAmount;
    /**
     * 
     * @type {string}
     * @memberof Balance
     */
    'balanceType'?: string;
    /**
     * Basic Bank Account Number (BBAN) Identifier.
     * @type {string}
     * @memberof Balance
     */
    'bban'?: string;
    /**
     * This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes).
     * @type {string}
     * @memberof Balance
     */
    'currency'?: string;
    /**
     * International Bank Account Number (IBAN) of an account balance, for example: \"FR7612345987650123456789014\".
     * @type {string}
     * @memberof Balance
     */
    'iban'?: string;
    /**
     * Primary Account Number (PAN) of a card in a masked form. This is used for card account in responses, for example \" 1234\". The maximum length: 35
     * @type {string}
     * @memberof Balance
     */
    'maskedPan'?: string;
    /**
     * An alias to access a payment account via a registered mobile phone number. The maximum length: 35
     * @type {string}
     * @memberof Balance
     */
    'msisdn'?: string;
    /**
     * Primary Account Number (PAN) of a card, can be tokenized by the ASPSP due to PCI DSS requirements. This is used for card account in responses. The maximum length: 35
     * @type {string}
     * @memberof Balance
     */
    'pan'?: string;
}


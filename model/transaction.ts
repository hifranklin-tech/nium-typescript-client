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
import type { CardAcceptorAddress } from './card-acceptor-address';
// May contain unused imports in some cases
// @ts-ignore
import type { TransactionAmount } from './transaction-amount';

/**
 * 
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     * Basic Bank Account Number (BBAN) Identifier.
     * @type {string}
     * @memberof Transaction
     */
    'bban'?: string;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    'bookingDate'?: string;
    /**
     * 
     * @type {CardAcceptorAddress}
     * @memberof Transaction
     */
    'cardAcceptorAddress'?: CardAcceptorAddress;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    'cardAcceptorId'?: string;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    'cardTransactionId'?: string;
    /**
     * This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes).
     * @type {string}
     * @memberof Transaction
     */
    'currency'?: string;
    /**
     * International Bank Account Number (IBAN) of an account, for example: \"FR7612345987650123456789014.
     * @type {string}
     * @memberof Transaction
     */
    'iban'?: string;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    'maskedPAN'?: string;
    /**
     * Primary Account Number (PAN) of a card in a masked form. This is used for card account in responses, for example \"1234\". The maximum length: 35
     * @type {string}
     * @memberof Transaction
     */
    'maskedPan'?: string;
    /**
     * An alias to access a payment account via a registered mobile phone number. The maximum length: 35
     * @type {string}
     * @memberof Transaction
     */
    'msisdn'?: string;
    /**
     * 
     * @type {TransactionAmount}
     * @memberof Transaction
     */
    'originalAmount'?: TransactionAmount;
    /**
     * Primary Account Number (PAN) of a card, can be tokenized by the ASPSP due to PCI DSS requirements. This is used for card account in responses. The maximum length: 35
     * @type {string}
     * @memberof Transaction
     */
    'pan'?: string;
    /**
     * 
     * @type {TransactionAmount}
     * @memberof Transaction
     */
    'transactionAmount'?: TransactionAmount;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    'transactionDate'?: string;
}


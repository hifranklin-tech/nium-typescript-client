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
 * @interface BankAccountDetails
 */
export interface BankAccountDetails {
    /**
     * Name of the beneficiary for the bank account.
     * @type {string}
     * @memberof BankAccountDetails
     */
    'accountName'?: string;
    /**
     * The bank account number.
     * @type {string}
     * @memberof BankAccountDetails
     */
    'accountNumber'?: string;
    /**
     * Name of the bank.
     * @type {string}
     * @memberof BankAccountDetails
     */
    'bankName'?: string;
    /**
     * The currency in which the auto sweep has to occur.
     * @type {string}
     * @memberof BankAccountDetails
     */
    'currency'?: string;
    /**
     * The routing type of the bank account.
     * @type {string}
     * @memberof BankAccountDetails
     */
    'routingType'?: string;
    /**
     * The routing value of the bank account.
     * @type {string}
     * @memberof BankAccountDetails
     */
    'routingValue'?: string;
}


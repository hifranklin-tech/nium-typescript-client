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
 * @interface ExpectedAccountDebit
 */
export interface ExpectedAccountDebit {
    /**
     * This field accepts the expected average transaction value for Pay Out of the corporate entity to be onboarded.
     * @type {string}
     * @memberof ExpectedAccountDebit
     */
    'averageTransactionValue'?: string;
    /**
     * This field accepts the expected monthly Volume for Pay Out of the corporate entity to be onboarded.
     * @type {string}
     * @memberof ExpectedAccountDebit
     */
    'monthlyTransactionVolume'?: string;
    /**
     * This field accepts the expected average transaction count for Pay Out transactions of the corporate entity to be onboarded.
     * @type {string}
     * @memberof ExpectedAccountDebit
     */
    'monthlyTransactions'?: string;
    /**
     * This field accepts the Primary Beneficiaries of the corporate entity to be onboarded.
     * @type {Array<string>}
     * @memberof ExpectedAccountDebit
     */
    'topBeneficiaries'?: Array<string>;
    /**
     * This field accepts the expected top Pay Out countries of the corporate entity to be onboarded.
     * @type {Array<string>}
     * @memberof ExpectedAccountDebit
     */
    'topTransactionCountries'?: Array<string>;
}


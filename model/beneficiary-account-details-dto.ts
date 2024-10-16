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
 * @interface BeneficiaryAccountDetailsDTO
 */
export interface BeneficiaryAccountDetailsDTO {
    /**
     * This field accepts the bank account type of the beneficiary.
     * @type {string}
     * @memberof BeneficiaryAccountDetailsDTO
     */
    'accountType'?: BeneficiaryAccountDetailsDTOAccountTypeEnum;
    /**
     * This field accepts an address of the beneficiary.
     * @type {string}
     * @memberof BeneficiaryAccountDetailsDTO
     */
    'address'?: string;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryAccountDetailsDTO
     */
    'alias'?: string;
    /**
     * This field accepts the city of the beneficiary.
     * @type {string}
     * @memberof BeneficiaryAccountDetailsDTO
     */
    'city'?: string;
    /**
     * This field accepts the mobile number of the beneficiary.
     * @type {string}
     * @memberof BeneficiaryAccountDetailsDTO
     */
    'contactNumber'?: string;
    /**
     * This field accepts the [ISO-2 country code](https://docs.nium.com/apis/docs/currency-and-country-codes) for the mobile number of beneficiary.
     * @type {string}
     * @memberof BeneficiaryAccountDetailsDTO
     */
    'countryCode'?: string;
    /**
     * This field accepts an email of the beneficiary.
     * @type {string}
     * @memberof BeneficiaryAccountDetailsDTO
     */
    'email'?: string;
    /**
     * This field accepts the name of a beneficiary.
     * @type {string}
     * @memberof BeneficiaryAccountDetailsDTO
     */
    'name'?: string;
    /**
     * This field accepts an postcode of the beneficiary.
     * @type {string}
     * @memberof BeneficiaryAccountDetailsDTO
     */
    'postcode'?: string;
    /**
     * This field accepts the relationship of the beneficiary with the remitter.
     * @type {string}
     * @memberof BeneficiaryAccountDetailsDTO
     */
    'remitterBeneficiaryRelationship'?: string;
    /**
     * This field accepts the state of the beneficiary.
     * @type {string}
     * @memberof BeneficiaryAccountDetailsDTO
     */
    'state'?: string;
}

export const BeneficiaryAccountDetailsDTOAccountTypeEnum = {
    Individual: 'INDIVIDUAL',
    Corporate: 'CORPORATE'
} as const;

export type BeneficiaryAccountDetailsDTOAccountTypeEnum = typeof BeneficiaryAccountDetailsDTOAccountTypeEnum[keyof typeof BeneficiaryAccountDetailsDTOAccountTypeEnum];



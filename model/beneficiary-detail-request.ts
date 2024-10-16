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
 * @interface BeneficiaryDetailRequest
 */
export interface BeneficiaryDetailRequest {
    /**
     * This field accepts the bank account type of the beneficiary. The account_type can be either Individual or Company.
     * @type {string}
     * @memberof BeneficiaryDetailRequest
     */
    'account_type': BeneficiaryDetailRequestAccountTypeEnum;
    /**
     * This field accepts an address of the beneficiary.
     * @type {string}
     * @memberof BeneficiaryDetailRequest
     */
    'address'?: string;
    /**
     * This field accepts the boolean value for the autosweepPayoutAccount.
     * @type {boolean}
     * @memberof BeneficiaryDetailRequest
     */
    'autosweep_payout_account'?: boolean;
    /**
     * This field accepts the contact name of the beneficiary.
     * @type {string}
     * @memberof BeneficiaryDetailRequest
     */
    'beneficiary_contact_name'?: string;
    /**
     * This field accepts the date of birth of the beneficiary in the format YYYY-MM-DD, for example, 2023-07-08
     * @type {string}
     * @memberof BeneficiaryDetailRequest
     */
    'beneficiary_dob'?: string;
    /**
     * This field accepts the entity type of the beneficiary.
     * @type {string}
     * @memberof BeneficiaryDetailRequest
     */
    'beneficiary_entity_type'?: string;
    /**
     * This field accepts the date of establishment of the beneficiary in the format YYYY-MM-DD, for example, 2023-07-08
     * @type {string}
     * @memberof BeneficiaryDetailRequest
     */
    'beneficiary_establishment_date'?: string;
    /**
     * This field accepts the city of the beneficiary. Maximum character limit: 50.
     * @type {string}
     * @memberof BeneficiaryDetailRequest
     */
    'city'?: string;
    /**
     * This field accepts the ISO-2 country code for the mobile number of beneficiary.
     * @type {string}
     * @memberof BeneficiaryDetailRequest
     */
    'contact_country_code'?: string;
    /**
     * This field accepts the mobile number of the beneficiary--digits only--without the country code.
     * @type {string}
     * @memberof BeneficiaryDetailRequest
     */
    'contact_number'?: string;
    /**
     * This field denotes if the beneficiary bank converts the amount in the destination account currency and credits to the account in case the beneficiary account is not in the same currency as destination currency.
     * @type {boolean}
     * @memberof BeneficiaryDetailRequest
     */
    'convert_destination_currency'?: boolean;
    /**
     * This field accepts the [ISO-2 country code](doc:currency-and-country-codes) for the mobile number of beneficiary.
     * @type {string}
     * @memberof BeneficiaryDetailRequest
     */
    'country_code': string;
    /**
     * This field accepts the boolean value for the defaultAutosweepPayoutAccount.
     * @type {boolean}
     * @memberof BeneficiaryDetailRequest
     */
    'default_autosweep_payout_account'?: boolean;
    /**
     * This field accepts an email of the beneficiary.
     * @type {string}
     * @memberof BeneficiaryDetailRequest
     */
    'email'?: string;
    /**
     * This field accepts the name of the beneficiary.The beneficiary_group_name is required.Name can contain alphabets, numbers, and special characters that is (. , () \' / -). Maximum character limit: 150.
     * @type {string}
     * @memberof BeneficiaryDetailRequest
     */
    'name': string;
    /**
     * This field accepts the postal code of the beneficiary.
     * @type {string}
     * @memberof BeneficiaryDetailRequest
     */
    'postcode'?: string;
    /**
     * This field accepts the relationship of the beneficiary with the remitter.
     * @type {string}
     * @memberof BeneficiaryDetailRequest
     */
    'relationship'?: string;
    /**
     * This field accepts the state of the beneficiary. Maximum character limit: 50.
     * @type {string}
     * @memberof BeneficiaryDetailRequest
     */
    'state'?: string;
}

export const BeneficiaryDetailRequestAccountTypeEnum = {
    Individual: 'Individual',
    Corporate: 'Corporate'
} as const;

export type BeneficiaryDetailRequestAccountTypeEnum = typeof BeneficiaryDetailRequestAccountTypeEnum[keyof typeof BeneficiaryDetailRequestAccountTypeEnum];



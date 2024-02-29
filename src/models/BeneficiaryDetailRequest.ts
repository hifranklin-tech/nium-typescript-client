/**
 * NIUM Platform
 * NIUM Platform
 *
 * OpenAPI spec version: 2023.12.12
 * Contact: experience@nium.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class BeneficiaryDetailRequest {
    /**
    * This field accepts the bank account type of the beneficiary. The account_type can be either Individual or Company.
    */
    'accountType': string;
    /**
    * This field accepts an address of the beneficiary.
    */
    'address'?: string;
    /**
    * This field accepts the boolean value for the autosweepPayoutAccount.
    */
    'autosweepPayoutAccount'?: boolean;
    /**
    * This field accepts the contact name of the beneficiary.
    */
    'beneficiaryContactName'?: string;
    /**
    * This field accepts the date of birth of the beneficiary in the format YYYY-MM-DD, for example, 2023-07-08
    */
    'beneficiaryDob'?: string;
    /**
    * This field accepts the entity type of the beneficiary.
    */
    'beneficiaryEntityType'?: string;
    /**
    * This field accepts the date of establishment of the beneficiary in the format YYYY-MM-DD, for example, 2023-07-08
    */
    'beneficiaryEstablishmentDate'?: string;
    /**
    * This field accepts the city of the beneficiary. Maximum character limit: 50.
    */
    'city'?: string;
    /**
    * This field accepts the ISO-2 country code for the mobile number of beneficiary.
    */
    'contactCountryCode'?: string;
    /**
    * This field accepts the mobile number of the beneficiary--digits only--without the country code.
    */
    'contactNumber'?: string;
    /**
    * This field accepts the [ISO-2 country code](doc:currency-and-country-codes) for the mobile number of beneficiary.
    */
    'countryCode': string;
    /**
    * This field accepts the boolean value for the defaultAutosweepPayoutAccount.
    */
    'defaultAutosweepPayoutAccount'?: boolean;
    /**
    * This field accepts an email of the beneficiary.
    */
    'email'?: string;
    /**
    * This field accepts the name of the beneficiary.The beneficiary_group_name is required.Name can contain alphabets, numbers, and special characters that is (. , () \' / -). Maximum character limit: 150.
    */
    'name': string;
    /**
    * This field accepts the postal code of the beneficiary.
    */
    'postcode'?: string;
    /**
    * This field accepts the relationship of the beneficiary with the remitter.
    */
    'relationship'?: string;
    /**
    * This field accepts the state of the beneficiary. Maximum character limit: 50.
    */
    'state'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accountType",
            "baseName": "account_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        },
        {
            "name": "autosweepPayoutAccount",
            "baseName": "autosweep_payout_account",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "beneficiaryContactName",
            "baseName": "beneficiary_contact_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "beneficiaryDob",
            "baseName": "beneficiary_dob",
            "type": "string",
            "format": ""
        },
        {
            "name": "beneficiaryEntityType",
            "baseName": "beneficiary_entity_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "beneficiaryEstablishmentDate",
            "baseName": "beneficiary_establishment_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string",
            "format": ""
        },
        {
            "name": "contactCountryCode",
            "baseName": "contact_country_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "contactNumber",
            "baseName": "contact_number",
            "type": "string",
            "format": ""
        },
        {
            "name": "countryCode",
            "baseName": "country_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultAutosweepPayoutAccount",
            "baseName": "default_autosweep_payout_account",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "postcode",
            "baseName": "postcode",
            "type": "string",
            "format": ""
        },
        {
            "name": "relationship",
            "baseName": "relationship",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BeneficiaryDetailRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


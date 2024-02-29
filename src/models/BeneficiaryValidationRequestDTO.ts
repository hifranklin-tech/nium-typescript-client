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

export class BeneficiaryValidationRequestDTO {
    /**
    * This field accepts the beneficiary account number.
    */
    'beneficiaryAccountNumber'?: string;
    /**
    * This field accepts the bank account type of the beneficiary. The account type can be either Individual or Corporate.
    */
    'beneficiaryAccountType'?: string;
    /**
    * This field accepts the bank code of a beneficiary, for example, bank code for Pakistan will be BHK. Note: This field is mandatory when the destination country is Pakistan (PK).
    */
    'beneficiaryBankCode'?: string;
    /**
    * This field accepts the mobile number of the beneficiary--digits only--without the country code.
    */
    'beneficiaryContactNumber'?: string;
    /**
    * This field accepts the 2-letter [ISO-2 country code](doc:currency-and-country-codes) of the beneficiary/bank.
    */
    'beneficiaryCountryCode'?: string;
    /**
    * This field accepts the name of a beneficiary.
    */
    'beneficiaryName'?: string;
    /**
    * This field accepts the 2-letter [ISO-2 country code](doc:currency-and-country-codes) of the destination country.
    */
    'destinationCountry': string;
    'destinationCurrency'?: string;
    /**
    * This field can accept the different modes of payout. This field can accept one of the following values: LOCAL PROXY 
    */
    'payoutMethod': string;
    /**
    * This field indicates the proxy type sent in the payment request.  For SGD-PayNow: The proxy type can be MOBILE, UEN , or NRIC For INR-UPI: The proxy type should be VPA  For MYR-DuitNow: The proxy type can be NRIC, PASSPORT, CORPORATE_REGISTRATION_NUMBER, MOBILE, or ARMY_ID Note : This field is mandatory when the payoutMethod type is PROXY.
    */
    'proxyType'?: string;
    /**
    * This field indicates the proxy value such as VPA, UEN, or mobile number etc. Note: This field is mandatory when the payoutMethod type is PROXY The mobile number should include country code.
    */
    'proxyValue'?: string;
    /**
    * This field accepts the routing code type 1, for example, SWIFT for all countries, IFSC for India, SORT CODE for UK, ACH CODE for USA, BRANCH CODE for Brazil and Bangladesh, BSB CODE for Australia, BANK CODE for HongKong. This field is Required if the payoutMethod is LOCAL.
    */
    'routingCodeType1'?: string;
    /**
    * This field accepts the routing code value 1, for example, ADCBINBB or ADCBINBB123 for SWIFT, SBIN0000058 for IFSC, 100000 for SORT CODE, 111000025 for ACH CODE, 012515 for BSB CODE, 151 for BANK CODE. This field is Required if the payoutMethod is LOCAL.
    */
    'routingCodeValue1'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "beneficiaryAccountNumber",
            "baseName": "beneficiaryAccountNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "beneficiaryAccountType",
            "baseName": "beneficiaryAccountType",
            "type": "string",
            "format": ""
        },
        {
            "name": "beneficiaryBankCode",
            "baseName": "beneficiaryBankCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "beneficiaryContactNumber",
            "baseName": "beneficiaryContactNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "beneficiaryCountryCode",
            "baseName": "beneficiaryCountryCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "beneficiaryName",
            "baseName": "beneficiaryName",
            "type": "string",
            "format": ""
        },
        {
            "name": "destinationCountry",
            "baseName": "destinationCountry",
            "type": "string",
            "format": ""
        },
        {
            "name": "destinationCurrency",
            "baseName": "destinationCurrency",
            "type": "string",
            "format": ""
        },
        {
            "name": "payoutMethod",
            "baseName": "payoutMethod",
            "type": "string",
            "format": ""
        },
        {
            "name": "proxyType",
            "baseName": "proxyType",
            "type": "string",
            "format": ""
        },
        {
            "name": "proxyValue",
            "baseName": "proxyValue",
            "type": "string",
            "format": ""
        },
        {
            "name": "routingCodeType1",
            "baseName": "routingCodeType1",
            "type": "string",
            "format": ""
        },
        {
            "name": "routingCodeValue1",
            "baseName": "routingCodeValue1",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BeneficiaryValidationRequestDTO.attributeTypeMap;
    }

    public constructor() {
    }
}


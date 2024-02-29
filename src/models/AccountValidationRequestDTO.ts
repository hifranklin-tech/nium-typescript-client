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

import { BankRoutingInfo } from '../models/BankRoutingInfo';
import { BeneficiaryAccountDetailsDTO } from '../models/BeneficiaryAccountDetailsDTO';
import { HttpFile } from '../http/http';

export class AccountValidationRequestDTO {
    /**
    * This field accepts an account number which is to be verified.
    */
    'accountNumber'?: string;
    /**
    * This field accepts the type of account.
    */
    'bankAccountType': AccountValidationRequestDTOBankAccountTypeEnum;
    /**
    * This field accepts the bank code of a beneficiary, for example, bank code for Pakistan will be BHK. Note: This field is mandatory when the destination country is Pakistan (PK).
    */
    'bankCode'?: string;
    'beneficiary'?: BeneficiaryAccountDetailsDTO;
    /**
    * This field accepts the 2-letter [ISO-2 country code](https://docs.nium.com/apis/docs/currency-and-country-codes) of the destination country.
    */
    'destinationCountry'?: string;
    /**
    * This field accepts the 3-letter ISO-3 currency code of the bank account.
    */
    'destinationCurrency': string;
    /**
    * This field can accept the different modes of payout.
    */
    'payoutMethod': AccountValidationRequestDTOPayoutMethodEnum;
    /**
    * This field indicates the proxy type sent in the payment request.  For SGD-PayNow: The proxy type can be MOBILE, UEN , or NRIC For INR-UPI: The proxy type should be VPA  For MYR-DuitNow: The proxy type can be NRIC, PASSPORT, CORPORATE_REGISTRATION_NUMBER, MOBILE, or ARMY_ID Note : This field is mandatory when the payoutMethod type is PROXY.
    */
    'proxyType'?: string;
    /**
    * This field indicates the proxy value such as VPA, UEN, or mobile number etc. Note: This field is mandatory when the payoutMethod type is PROXY The mobile number should include country code.
    */
    'proxyValue'?: string;
    'routingInfo'?: Array<BankRoutingInfo>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accountNumber",
            "baseName": "accountNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "bankAccountType",
            "baseName": "bankAccountType",
            "type": "AccountValidationRequestDTOBankAccountTypeEnum",
            "format": ""
        },
        {
            "name": "bankCode",
            "baseName": "bankCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "beneficiary",
            "baseName": "beneficiary",
            "type": "BeneficiaryAccountDetailsDTO",
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
            "type": "AccountValidationRequestDTOPayoutMethodEnum",
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
            "name": "routingInfo",
            "baseName": "routingInfo",
            "type": "Array<BankRoutingInfo>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AccountValidationRequestDTO.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum AccountValidationRequestDTOBankAccountTypeEnum {
    Checking = 'CHECKING',
    Saving = 'SAVING',
    Maestra = 'MAESTRA',
    Current = 'CURRENT'
}
export enum AccountValidationRequestDTOPayoutMethodEnum {
    Card = 'CARD',
    Wallet = 'WALLET',
    Cash = 'CASH',
    Swift = 'SWIFT',
    Local = 'LOCAL',
    Proxy = 'PROXY',
    Fedwire = 'FEDWIRE'
}


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

import { WalletPaymentIdsTagRequestDTO } from '../models/WalletPaymentIdsTagRequestDTO';
import { HttpFile } from '../http/http';

export class PaymentIdRequestDTO2 {
    /**
    * This object contains the user defined key-value pairs provided by the client. The maximum number of tags allowed is 15.
    */
    'tags'?: Array<WalletPaymentIdsTagRequestDTO>;
    /**
    * This field accepts the account category while assigning a virtual account
    */
    'accountCategory'?: PaymentIdRequestDTO2AccountCategoryEnum;
    /**
    * This field accepts the bank name.
    */
    'bankName': string;
    /**
    * This field accepts the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes).
    */
    'currencyCode': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<WalletPaymentIdsTagRequestDTO>",
            "format": ""
        },
        {
            "name": "accountCategory",
            "baseName": "accountCategory",
            "type": "PaymentIdRequestDTO2AccountCategoryEnum",
            "format": ""
        },
        {
            "name": "bankName",
            "baseName": "bankName",
            "type": "string",
            "format": ""
        },
        {
            "name": "currencyCode",
            "baseName": "currencyCode",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PaymentIdRequestDTO2.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PaymentIdRequestDTO2AccountCategoryEnum {
    SelfFundingAccount = 'SELF_FUNDING_ACCOUNT',
    CollectionAccount = 'COLLECTION_ACCOUNT',
    Null = 'Null'
}

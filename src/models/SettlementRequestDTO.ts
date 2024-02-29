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

import { Labels } from '../models/Labels';
import { HttpFile } from '../http/http';

export class SettlementRequestDTO {
    /**
    * This field contains the 6 digit authorization code
    */
    'authorizationCode'?: string;
    /**
    * This field contains the billing amount
    */
    'billingAmount'?: number;
    /**
    * This field contains the 3-letter ISO3 billing currency code
    */
    'billingCurrency'?: string;
    /**
    * This field contains the unique card identifier
    */
    'cardHashId'?: string;
    /**
    * This field contains the complete 16 digit card number
    */
    'cardNumber'?: string;
    /**
    * This field contains the unique client identifier
    */
    'clientHashId'?: string;
    /**
    * This field contains the unique client ID
    */
    'clientId'?: number;
    /**
    * This field contains the unique customer identifier 
    */
    'customerHashId'?: string;
    /**
    * This field contains the exchange rate from the source currency to the destination currency
    */
    'exchangeRate'?: string;
    'labels'?: Labels;
    /**
    * This field accepts the pre-defined logo Id
    */
    'logoId'?: string;
    /**
    * This field accepts the pre-defined logo Identifier
    */
    'logoIdentifier'?: string;
    /**
    * This field contains the 16-digit masked card number
    */
    'maskCardNumber'?: string;
    /**
    * This field contains the 4-digit mcc code
    */
    'merchantCategoryCode'?: string;
    /**
    * This field contains the merchant country code
    */
    'merchantCountryCode'?: string;
    /**
    * This field contains the unique merchant identifier
    */
    'merchantId'?: string;
    /**
    * This field contains the full merchant name and location data
    */
    'merchantNameLocation'?: string;
    /**
    * This field contains the authorization code of the original transaction
    */
    'originalAuthorizationCode'?: string;
    /**
    * This field contains the pos entry code that identifies the actual method used to capture the account number, expiration date, and the PIN
    */
    'posEntryMode'?: string;
    /**
    * This field contains the settlement date
    */
    'settlementDate'?: string;
    /**
    * This field contains the settlement id
    */
    'settlementId'?: number;
    /**
    * This field is optional & accepts the sub-bin
    */
    'subBin'?: string;
    /**
    * This field contains the token number
    */
    'tokenNumber'?: string;
    /**
    * This field contains the token requester id
    */
    'tokenRequesterId'?: string;
    /**
    * This field contains the transaction amount.
    */
    'transactionAmount'?: number;
    /**
    * This field contains the 3-letter ISO3 transaction currency code.
    */
    'transactionCurrency'?: string;
    /**
    * This field contains the type of transaction, it can be C or D
    */
    'transactionType'?: string;
    /**
    * This field contains the Unique ID provided for transaction by VISA
    */
    'visaTransactionId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "authorizationCode",
            "baseName": "authorizationCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "billingAmount",
            "baseName": "billingAmount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "billingCurrency",
            "baseName": "billingCurrency",
            "type": "string",
            "format": ""
        },
        {
            "name": "cardHashId",
            "baseName": "cardHashId",
            "type": "string",
            "format": ""
        },
        {
            "name": "cardNumber",
            "baseName": "cardNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientHashId",
            "baseName": "clientHashId",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientId",
            "baseName": "clientId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "customerHashId",
            "baseName": "customerHashId",
            "type": "string",
            "format": ""
        },
        {
            "name": "exchangeRate",
            "baseName": "exchangeRate",
            "type": "string",
            "format": ""
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "Labels",
            "format": ""
        },
        {
            "name": "logoId",
            "baseName": "logoId",
            "type": "string",
            "format": ""
        },
        {
            "name": "logoIdentifier",
            "baseName": "logoIdentifier",
            "type": "string",
            "format": ""
        },
        {
            "name": "maskCardNumber",
            "baseName": "maskCardNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "merchantCategoryCode",
            "baseName": "merchantCategoryCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "merchantCountryCode",
            "baseName": "merchantCountryCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "merchantId",
            "baseName": "merchantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "merchantNameLocation",
            "baseName": "merchantNameLocation",
            "type": "string",
            "format": ""
        },
        {
            "name": "originalAuthorizationCode",
            "baseName": "originalAuthorizationCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "posEntryMode",
            "baseName": "posEntryMode",
            "type": "string",
            "format": ""
        },
        {
            "name": "settlementDate",
            "baseName": "settlementDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "settlementId",
            "baseName": "settlementId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "subBin",
            "baseName": "subBin",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenNumber",
            "baseName": "tokenNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenRequesterId",
            "baseName": "tokenRequesterId",
            "type": "string",
            "format": ""
        },
        {
            "name": "transactionAmount",
            "baseName": "transactionAmount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "transactionCurrency",
            "baseName": "transactionCurrency",
            "type": "string",
            "format": ""
        },
        {
            "name": "transactionType",
            "baseName": "transactionType",
            "type": "string",
            "format": ""
        },
        {
            "name": "visaTransactionId",
            "baseName": "visaTransactionId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SettlementRequestDTO.attributeTypeMap;
    }

    public constructor() {
    }
}

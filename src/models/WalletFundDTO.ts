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

import { InvoiceDetails } from '../models/InvoiceDetails';
import { HttpFile } from '../http/http';

export class WalletFundDTO {
    /**
    * This field is the amount in destination currency which is to be transferred. If the amount is provided, it will take precedence over sourceAmount field.
    */
    'amount'?: number;
    /**
    * The country IP for the device by the customer for initiating the request.
    */
    'countryIpAddress'?: string;
    'currencyMap'?: { [key: string]: number; };
    /**
    * This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) for the destination amount.
    */
    'destinationCurrencyCode': string;
    /**
    * Device key
    */
    'deviceKey'?: string;
    /**
    * The value for funding channels can be prefund, bank_transfer, cards, or direct_debit. Fund wallet using prefund mode is possible as cross-currency. Fund wallet using bank_transfer mode is only possible from SGD to SGD and not cross-currency. direct_debit is only applicable for USA
    */
    'fundingChannel': WalletFundDTOFundingChannelEnum;
    /**
    * This is base64-encoded expiry date in MMYY format. This is required in case of new card addition.
    */
    'fundingInstrumentExpiry'?: string;
    /**
    * Name of the card holder as printed on the card. Maximum length of this field is 26 characters. This is required in case of new card.
    */
    'fundingInstrumentHolderName'?: string;
    /**
    * This field is the unique 36-character funding instrument identifier. The id is a card hash when fundingChannel is cards and applicable only for existing card and not needed for a new card. The id is a bank account identifier when the funding channel is direct debit.
    */
    'fundingInstrumentId'?: string;
    /**
    * This is 16-digit Base64-encoded card number. This is required in case of new card addition.
    */
    'fundingInstrumentNumber'?: string;
    /**
    * This is base64-encoded 3-digit CVV number. This is required in case of both new and existing card.
    */
    'fundingInstrumentSecurityNumber'?: string;
    'invoiceDetails'?: InvoiceDetails;
    /**
    * The IP address of the device used by the customer for initiating the request.
    */
    'ipAddress'?: string;
    /**
    * This is the name of the pocket defined under base currency.
    */
    'pocketName'?: string;
    /**
    * Save funding instrument for future purpose
    */
    'save'?: boolean;
    /**
    * The session Id for the session of the customer for initiating the request.
    */
    'sessionId'?: string;
    /**
    * This field is the amount in source currency that is to be transferred. If amount field is provided, it will take precedence over sourceAmount
    */
    'sourceAmount'?: number;
    /**
    * This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) for the source amount.
    */
    'sourceCurrencyCode': string;
    /**
    * This field allows clients to pass a narrative that they want to be displayed in the payer’s account statement when they are pulling funds using Direct Debit. The field value will be truncated at 10 chars for UK and US, and 140 chars for EU.
    */
    'statementNarrative'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "countryIpAddress",
            "baseName": "countryIpAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "currencyMap",
            "baseName": "currencyMap",
            "type": "{ [key: string]: number; }",
            "format": "double"
        },
        {
            "name": "destinationCurrencyCode",
            "baseName": "destinationCurrencyCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "deviceKey",
            "baseName": "deviceKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "fundingChannel",
            "baseName": "fundingChannel",
            "type": "WalletFundDTOFundingChannelEnum",
            "format": ""
        },
        {
            "name": "fundingInstrumentExpiry",
            "baseName": "fundingInstrumentExpiry",
            "type": "string",
            "format": ""
        },
        {
            "name": "fundingInstrumentHolderName",
            "baseName": "fundingInstrumentHolderName",
            "type": "string",
            "format": ""
        },
        {
            "name": "fundingInstrumentId",
            "baseName": "fundingInstrumentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "fundingInstrumentNumber",
            "baseName": "fundingInstrumentNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "fundingInstrumentSecurityNumber",
            "baseName": "fundingInstrumentSecurityNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "invoiceDetails",
            "baseName": "invoiceDetails",
            "type": "InvoiceDetails",
            "format": ""
        },
        {
            "name": "ipAddress",
            "baseName": "ipAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "pocketName",
            "baseName": "pocketName",
            "type": "string",
            "format": ""
        },
        {
            "name": "save",
            "baseName": "save",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sessionId",
            "baseName": "sessionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "sourceAmount",
            "baseName": "sourceAmount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "sourceCurrencyCode",
            "baseName": "sourceCurrencyCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "statementNarrative",
            "baseName": "statementNarrative",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WalletFundDTO.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum WalletFundDTOFundingChannelEnum {
    Prefund = 'PREFUND',
    BankTransfer = 'BANK_TRANSFER',
    Card = 'CARD',
    DirectDebit = 'DIRECT_DEBIT',
    FasterDirectDebit = 'FASTER_DIRECT_DEBIT'
}

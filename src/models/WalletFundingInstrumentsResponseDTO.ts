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

export class WalletFundingInstrumentsResponseDTO {
    /**
    * This field contains the name of the bank which has issued the account linked to this funding instrument.
    */
    'bankName'?: string;
    /**
    * This field contains the name of the bank which has issued the funding instrument.
    */
    'cardBankName'?: string;
    /**
    * This field contains the card network details. We currently support Visa and MasterCard. It can contain one of the following - visa OR mastercard.
    */
    'cardNetwork'?: string;
    /**
    * This field contains the type of funding card. It can contain one of the following - credit OR debit.
    */
    'cardType'?: string;
    /**
    * This field contains the unique 36-character client identifier generated and shared before API handshake.
    */
    'clientHashId'?: string;
    /**
    * This field contains the Country.
    */
    'country'?: string;
    /**
    * This field contains the timestamp of adding funding instrument in YYYY-MM-DD hh:mm:ss format.
    */
    'createdAt'?: Date;
    /**
    * This field contains the currency.
    */
    'currency'?: string;
    /**
    * This field contains the unique 36-character customer identifier generated and shared before API handshake.
    */
    'customerHashId'?: string;
    /**
    * This field contains the funding channel of the funding instrument.
    */
    'fundingChannel'?: WalletFundingInstrumentsResponseDTOFundingChannelEnum;
    /**
    * This field contains the unique 36-character funding instrument identifier.
    */
    'fundingInstrumentId'?: string;
    /**
    * This field contains the 16-digit masked card number in format 1234-56xx-xxxx-3456.
    */
    'maskCardNumber'?: string;
    /**
    * This field contains the masked account number in the format where only last 4 digits are visible.
    */
    'maskedAccountNumber'?: string;
    /**
    * This field contains the routing type.
    */
    'routingType'?: string;
    /**
    * This field contains the routing value.
    */
    'routingValue'?: string;
    /**
    * This flag indicates whether the funding instrument is saved or not.
    */
    'saved'?: boolean;
    /**
    * This field contains the status of the funding instrument.
    */
    'status'?: WalletFundingInstrumentsResponseDTOStatusEnum;
    /**
    * This flag indicates whether 3DS verification is supported on the card.
    */
    'threeDSecureUsage'?: boolean;
    /**
    * This field contains the timestamp of last update to the funding instrument in YYYY-MM-DD hh:mm:ss format
    */
    'updatedAt'?: Date;
    /**
    * This field contains the unique 36-character wallet identifier generated and shared before API handshake.
    */
    'walletHashId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bankName",
            "baseName": "bankName",
            "type": "string",
            "format": ""
        },
        {
            "name": "cardBankName",
            "baseName": "cardBankName",
            "type": "string",
            "format": ""
        },
        {
            "name": "cardNetwork",
            "baseName": "cardNetwork",
            "type": "string",
            "format": ""
        },
        {
            "name": "cardType",
            "baseName": "cardType",
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
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string",
            "format": ""
        },
        {
            "name": "customerHashId",
            "baseName": "customerHashId",
            "type": "string",
            "format": ""
        },
        {
            "name": "fundingChannel",
            "baseName": "fundingChannel",
            "type": "WalletFundingInstrumentsResponseDTOFundingChannelEnum",
            "format": ""
        },
        {
            "name": "fundingInstrumentId",
            "baseName": "fundingInstrumentId",
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
            "name": "maskedAccountNumber",
            "baseName": "maskedAccountNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "routingType",
            "baseName": "routingType",
            "type": "string",
            "format": ""
        },
        {
            "name": "routingValue",
            "baseName": "routingValue",
            "type": "string",
            "format": ""
        },
        {
            "name": "saved",
            "baseName": "saved",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "WalletFundingInstrumentsResponseDTOStatusEnum",
            "format": ""
        },
        {
            "name": "threeDSecureUsage",
            "baseName": "threeDSecureUsage",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "walletHashId",
            "baseName": "walletHashId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WalletFundingInstrumentsResponseDTO.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum WalletFundingInstrumentsResponseDTOFundingChannelEnum {
    DirectDebit = 'DIRECT_DEBIT'
}
export enum WalletFundingInstrumentsResponseDTOStatusEnum {
    Active = 'ACTIVE',
    Inactive = 'INACTIVE',
    Blocked = 'BLOCKED',
    Suspended = 'SUSPENDED',
    Uploaded = 'UPLOADED',
    Approved = 'APPROVED',
    Rejected = 'REJECTED',
    Failed = 'FAILED',
    Success = 'SUCCESS',
    Failure = 'FAILURE',
    PartiallySuccess = 'PARTIALLY SUCCESS',
    Sync = 'SYNC',
    NotSync = 'NOT SYNC',
    Pending = 'PENDING',
    RequiresAction = 'REQUIRES_ACTION',
    Clear = 'CLEAR',
    Declined = 'DECLINED',
    AccountBlocked = 'ACCOUNT_BLOCKED',
    AmountBlocked = 'AMOUNT_BLOCKED',
    DeLinked = 'DE_LINKED',
    Cancelled = 'CANCELLED'
}

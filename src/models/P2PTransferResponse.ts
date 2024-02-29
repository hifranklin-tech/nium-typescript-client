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

export class P2PTransferResponse {
    /**
    * This field provides the message in case of errors. In case of success, it is null.
    */
    'message'?: string;
    /**
    * Unique auth code generated for the transaction by the card issuance platform. This field shall be deprecated in future. Clients should use systemReferenceNumber.
    */
    'retrievalReferenceNumber'?: string;
    /**
    * The status value can be Pending or Approved.
    */
    'status'?: P2PTransferResponseStatusEnum;
    /**
    * This flag is used to specify if the transfer was successful or not.
    */
    'success'?: boolean;
    /**
    * Unique auth code generated for the transaction by the card issuance platform.
    */
    'systemReferenceNumber'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "retrievalReferenceNumber",
            "baseName": "retrievalReferenceNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "P2PTransferResponseStatusEnum",
            "format": ""
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "systemReferenceNumber",
            "baseName": "systemReferenceNumber",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return P2PTransferResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum P2PTransferResponseStatusEnum {
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
    AmountBlocked = 'AMOUNT_BLOCKED'
}


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

export class BlockCustomerRequestDTO {
    /**
    * This field accepts the action type of block/unblock.
    */
    'action': BlockCustomerRequestDTOActionEnum;
    /**
    * This field accepts comment which describes the action or reason. Maximum character limit: 255
    */
    'comment'?: string;
    /**
    * This field accepts the reason for block/unblock for customer. Following are the valid values with respect to action: => PERMANENT_BLOCK: • CUSTOMER_REQUEST • CLIENT_REQUEST • DECEASED • ACCOUNT_CLOSURE • SUSPICIOUS_ACTIVITY • FRAUDULENT_ACTIVITY • POTENTIAL_SANCTION • SANCTIONED_CUSTOMER • BLACKLISTED_CUSTOMER   => TEMPORARY_BLOCK: • CUSTOMER_REQUEST • CLIENT_REQUEST • SUSPICIOUS_ACTIVITY • POTENTIAL_SANCTION   => UNBLOCK: • CUSTOMER_REQUEST • CLIENT_REQUEST
    */
    'reason': BlockCustomerRequestDTOReasonEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "BlockCustomerRequestDTOActionEnum",
            "format": ""
        },
        {
            "name": "comment",
            "baseName": "comment",
            "type": "string",
            "format": ""
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "BlockCustomerRequestDTOReasonEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BlockCustomerRequestDTO.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BlockCustomerRequestDTOActionEnum {
    TemporaryBlock = 'TEMPORARY_BLOCK',
    PermanentBlock = 'PERMANENT_BLOCK',
    Unblock = 'UNBLOCK'
}
export enum BlockCustomerRequestDTOReasonEnum {
    CustomerRequest = 'CUSTOMER_REQUEST',
    ClientRequest = 'CLIENT_REQUEST',
    Deceased = 'DECEASED',
    AccountClosure = 'ACCOUNT_CLOSURE',
    SuspiciousActivity = 'SUSPICIOUS_ACTIVITY',
    FraudulentActivity = 'FRAUDULENT_ACTIVITY',
    PotentialSanction = 'POTENTIAL_SANCTION',
    SanctionedCustomer = 'SANCTIONED_CUSTOMER',
    BlacklistedCustomer = 'BLACKLISTED_CUSTOMER',
    NoObjection = 'NO_OBJECTION'
}

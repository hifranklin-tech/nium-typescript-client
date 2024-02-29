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

import { AccountReference } from '../models/AccountReference';
import { Amount } from '../models/Amount';
import { HttpFile } from '../http/http';

export class OpenBankingPaymentResponseDTO {
    /**
    * This field contains the system-generated comments for the transaction.
    */
    'comments'?: string;
    'creditorAccount'?: AccountReference;
    /**
    * This field contains the name of the receiver for this flow.
    */
    'creditorName'?: string;
    'debtorAccount'?: AccountReference;
    'instructedAmount'?: Amount;
    /**
    * This field contains the BIC routing code for the transaction.
    */
    'routingCodeValue'?: string;
    /**
    * This field contains the narrative for the transaction.
    */
    'statementNarrative'?: string;
    /**
    * This field contains the status of the transaction. The possible values are: INITIATED, PENDING, REJECTED, SENT_TO_BANK, PAID, RETURN
    */
    'status'?: OpenBankingPaymentResponseDTOStatusEnum;
    /**
    * This field contains the unique, system generated reference number for the transaction.
    */
    'systemReferenceNumber'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "comments",
            "baseName": "comments",
            "type": "string",
            "format": ""
        },
        {
            "name": "creditorAccount",
            "baseName": "creditorAccount",
            "type": "AccountReference",
            "format": ""
        },
        {
            "name": "creditorName",
            "baseName": "creditorName",
            "type": "string",
            "format": ""
        },
        {
            "name": "debtorAccount",
            "baseName": "debtorAccount",
            "type": "AccountReference",
            "format": ""
        },
        {
            "name": "instructedAmount",
            "baseName": "instructedAmount",
            "type": "Amount",
            "format": ""
        },
        {
            "name": "routingCodeValue",
            "baseName": "routingCodeValue",
            "type": "string",
            "format": ""
        },
        {
            "name": "statementNarrative",
            "baseName": "statementNarrative",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "OpenBankingPaymentResponseDTOStatusEnum",
            "format": ""
        },
        {
            "name": "systemReferenceNumber",
            "baseName": "systemReferenceNumber",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OpenBankingPaymentResponseDTO.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum OpenBankingPaymentResponseDTOStatusEnum {
    Initiated = 'INITIATED',
    Pending = 'PENDING',
    Rejected = 'REJECTED',
    SentToBank = 'SENT_TO_BANK',
    Paid = 'PAID',
    Return = 'RETURN'
}

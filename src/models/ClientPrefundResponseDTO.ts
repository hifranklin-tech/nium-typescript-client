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

export class ClientPrefundResponseDTO {
    /**
    * This field contains the amount transferred to account.
    */
    'amount'?: number;
    /**
    * This field will return a success message if the prefund request added successfully
    */
    'message'?: string;
    /**
    * This field contains the status.
    */
    'status'?: ClientPrefundResponseDTOStatusEnum;
    /**
    * This field contains the transaction reference number or identifier generated by card issuance platform for the client prefund request.
    */
    'systemReferenceNumber'?: string;
    /**
    * This field contains the unique email ID provided to the customer in addition to uniquePaymentId for supported regions and configuration, or else it will be null, for example, abc12_ca@nium.com.
    */
    'uniquePayerId'?: string;
    /**
    * This field contains the virtual account number per currency provided to customers for supported regions and configuration, for example, IBAN in EU, virtual account number from Moonova in AU, or else, it will be null.
    */
    'uniquePaymentId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ClientPrefundResponseDTOStatusEnum",
            "format": ""
        },
        {
            "name": "systemReferenceNumber",
            "baseName": "systemReferenceNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "uniquePayerId",
            "baseName": "uniquePayerId",
            "type": "string",
            "format": ""
        },
        {
            "name": "uniquePaymentId",
            "baseName": "uniquePaymentId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ClientPrefundResponseDTO.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ClientPrefundResponseDTOStatusEnum {
    Pending = 'Pending',
    Approved = 'Approved',
    Rejected = 'Rejected'
}


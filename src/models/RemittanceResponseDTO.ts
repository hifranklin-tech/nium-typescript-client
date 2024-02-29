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

export class RemittanceResponseDTO {
    /**
    * This field is estimated delivery time of transaction.
    */
    'estimatedDeliveryTime'?: string;
    /**
    * This field will return a success message if the money transferred successfully.
    */
    'message'?: string;
    /**
    * This field contains the unique payment ID.
    */
    'paymentId'?: string;
    /**
    * This is a unique system reference number assigned to the transaction.
    */
    'systemReferenceNumber'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "estimatedDeliveryTime",
            "baseName": "estimatedDeliveryTime",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentId",
            "baseName": "payment_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "systemReferenceNumber",
            "baseName": "system_reference_number",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RemittanceResponseDTO.attributeTypeMap;
    }

    public constructor() {
    }
}

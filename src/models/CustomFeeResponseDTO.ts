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

export class CustomFeeResponseDTO {
    /**
    * This field contains further details regarding the status of the fee.
    */
    'message'?: string;
    /**
    * This field contains the status such as success if the fee is levied successfully.
    */
    'status'?: string;
    /**
    * This field contains the unique system reference number.
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
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "systemReferenceNumber",
            "baseName": "systemReferenceNumber",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomFeeResponseDTO.attributeTypeMap;
    }

    public constructor() {
    }
}


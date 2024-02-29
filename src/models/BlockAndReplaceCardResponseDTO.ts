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

export class BlockAndReplaceCardResponseDTO {
    'status'?: string;
    'message'?: string;
    'newCardHashId'?: string;
    'maskedCardNumber'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
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
            "name": "newCardHashId",
            "baseName": "newCardHashId",
            "type": "string",
            "format": ""
        },
        {
            "name": "maskedCardNumber",
            "baseName": "maskedCardNumber",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BlockAndReplaceCardResponseDTO.attributeTypeMap;
    }

    public constructor() {
    }
}


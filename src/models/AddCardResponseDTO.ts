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

export class AddCardResponseDTO {
    /**
    * Unique card identifier generated while new/add-on card issuance.
    */
    'cardHashId'?: string;
    /**
    * Card activation status values are VIRTUAL_ACTIVE and INACTIVE
    */
    'cardActivationStatus'?: string;
    /**
    * This is the 16-digit masked card number in format 1234-56xx-xxxx-3456
    */
    'maskedCardNumber'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cardHashId",
            "baseName": "cardHashId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "cardActivationStatus",
            "baseName": "cardActivationStatus",
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
        return AddCardResponseDTO.attributeTypeMap;
    }

    public constructor() {
    }
}


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

export class TransactionsBusinessDTO {
    /**
    * This flag is used to mark or unmark a transaction as a business transaction.
    */
    'businessTransaction': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "businessTransaction",
            "baseName": "businessTransaction",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TransactionsBusinessDTO.attributeTypeMap;
    }

    public constructor() {
    }
}


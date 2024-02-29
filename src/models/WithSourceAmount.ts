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

export class WithSourceAmount {
    /**
    * The source amount to be converted to the destination currency. This value is for reference only and will not be used as the actual conversion amount.
    */
    'sourceAmount'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "sourceAmount",
            "baseName": "sourceAmount",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return WithSourceAmount.attributeTypeMap;
    }

    public constructor() {
    }
}

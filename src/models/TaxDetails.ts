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

export class TaxDetails {
    /**
    * This field accepts the 2 letter country code where the taxes are filed.
    */
    'country'?: string;
    /**
    * This field accepts the tax number.
    */
    'taxNumber'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "taxNumber",
            "baseName": "taxNumber",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TaxDetails.attributeTypeMap;
    }

    public constructor() {
    }
}


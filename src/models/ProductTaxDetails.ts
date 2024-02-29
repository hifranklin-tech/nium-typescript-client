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

export class ProductTaxDetails {
    /**
    * This field accepts the 2-letter [ISO Alpha-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf) for the country of residence for tax purpose.  AU: NA EU: Required UK: NA SG: NA
    */
    'country'?: string;
    /**
    * This field accepts the tax ID number for each country of tax residence.  AU: NA EU: Required UK: NA SG: NA
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
        return ProductTaxDetails.attributeTypeMap;
    }

    public constructor() {
    }
}


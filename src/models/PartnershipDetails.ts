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

export class PartnershipDetails {
    /**
    * The country where the partnership is established.
    */
    'partnerCountry'?: string;
    /**
    * The complete name of the partner.
    */
    'partnerName'?: string;
    /**
    * The state where the partnership is established.
    */
    'partnerState'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "partnerCountry",
            "baseName": "partnerCountry",
            "type": "string",
            "format": ""
        },
        {
            "name": "partnerName",
            "baseName": "partnerName",
            "type": "string",
            "format": ""
        },
        {
            "name": "partnerState",
            "baseName": "partnerState",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PartnershipDetails.attributeTypeMap;
    }

    public constructor() {
    }
}


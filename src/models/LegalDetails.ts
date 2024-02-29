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

export class LegalDetails {
    /**
    * The name under which the entity is formed.
    */
    'legislationName'?: string;
    /**
    * The legislation type under which the government entity is formed.
    */
    'legislationType'?: string;
    /**
    * The exchange where the business is publicly listed. Use [Fetch Corporate Constants API](ref:fetchcorporateconstants) for valid values.
    */
    'listedExchange'?: string;
    /**
    * The country where the business is registered. Use [Fetch Corporate Constants API](ref:fetchcorporateconstants) for valid values.
    */
    'registeredCountry'?: string;
    /**
    * The date the business is registered entered in the YYYY-MM-DD format.
    */
    'registeredDate'?: string;
    /**
    * This field accepts the registration type for the entity.  AU: Optional EU: NA UK: NA SG: NA
    */
    'registrationType'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "legislationName",
            "baseName": "legislationName",
            "type": "string",
            "format": ""
        },
        {
            "name": "legislationType",
            "baseName": "legislationType",
            "type": "string",
            "format": ""
        },
        {
            "name": "listedExchange",
            "baseName": "listedExchange",
            "type": "string",
            "format": ""
        },
        {
            "name": "registeredCountry",
            "baseName": "registeredCountry",
            "type": "string",
            "format": ""
        },
        {
            "name": "registeredDate",
            "baseName": "registeredDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "registrationType",
            "baseName": "registrationType",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LegalDetails.attributeTypeMap;
    }

    public constructor() {
    }
}

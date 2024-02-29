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

export class AddressV2 {
    /**
    * This field stores the address line 1.
    */
    'addressLine1'?: string;
    /**
    * This field stores the address line 2
    */
    'addressLine2'?: string;
    /**
    * This field stores the city.
    */
    'city'?: string;
    /**
    * This field stores the country. Use the [Fetch Corporate Constants API](ref:fetchcorporateconstants) to get the list of valid countries.
    */
    'country'?: string;
    /**
    * This field stores the zipCode.
    */
    'postCode'?: string;
    /**
    * This field stores the state.
    */
    'state'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "addressLine1",
            "baseName": "addressLine1",
            "type": "string",
            "format": ""
        },
        {
            "name": "addressLine2",
            "baseName": "addressLine2",
            "type": "string",
            "format": ""
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "postCode",
            "baseName": "postCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AddressV2.attributeTypeMap;
    }

    public constructor() {
    }
}


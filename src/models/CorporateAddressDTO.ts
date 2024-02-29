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

export class CorporateAddressDTO {
    /**
    * This field contains the address line 1 of the business address.
    */
    'address1'?: string;
    /**
    * This field contains the address line 2 of the business address.
    */
    'address2'?: string;
    /**
    * This field contains the city of the business address.
    */
    'city'?: string;
    /**
    * This field contains the country of the business address.
    */
    'country'?: string;
    /**
    * This field contains the state of the business address.
    */
    'state'?: string;
    /**
    * This field contains the zipCode of the business address.
    */
    'zipCode'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "address1",
            "baseName": "address1",
            "type": "string",
            "format": ""
        },
        {
            "name": "address2",
            "baseName": "address2",
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
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        },
        {
            "name": "zipCode",
            "baseName": "zipCode",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CorporateAddressDTO.attributeTypeMap;
    }

    public constructor() {
    }
}


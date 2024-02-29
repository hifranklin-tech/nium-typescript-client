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

/**
* This is an object which accepts the registered and/or business address details for the new corporate entity to be onboarded.  AU: Required EU: Required UK: Required SG: Required
*/
export class CorporateAddress {
    /**
    * This field accepts the address line 1 of the stakeholder’s residential address.  AU: Required EU: Required UK: Required SG: Optional
    */
    'addressLine1'?: string;
    /**
    * This field accepts the address line 2 of the stakeholder’s residential address.  AU: Required EU: Optional UK: Optional SG: Optional
    */
    'addressLine2'?: string;
    /**
    * This field accepts the stakeholder’s residential city.  AU: Required EU: Required UK: Required SG: Optional
    */
    'city'?: string;
    /**
    * This field accepts the [2-letter ISO Alpha-2 country code](doc:currency-and-country-codes) for the residential country of the stakeholder.  AU: Optional EU: Required UK: Required SG: Required
    */
    'country'?: string;
    /**
    * This field accepts the zip code or postal code of the stakeholder’s residential address.  AU: Optional EU: Required UK: Required SG: Required
    */
    'postcode'?: string;
    /**
    * This field accepts the state of the stakeholder’s residential address.  AU: Optional EU: Required UK: Required SG: Required
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
            "name": "postcode",
            "baseName": "postcode",
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
        return CorporateAddress.attributeTypeMap;
    }

    public constructor() {
    }
}

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

export class RemitterAccountWhiteList {
    /**
    * This field will return true if the remittance account is active else this will return false
    */
    'active'?: boolean;
    /**
    * This field contains the remitter account number, for example, 9890098900
    */
    'remitterAccountNumber'?: string;
    /**
    * This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) for the allowed remittance currencies.
    */
    'remitterAllowedCurrency'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "remitterAccountNumber",
            "baseName": "remitterAccountNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "remitterAllowedCurrency",
            "baseName": "remitterAllowedCurrency",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RemitterAccountWhiteList.attributeTypeMap;
    }

    public constructor() {
    }
}


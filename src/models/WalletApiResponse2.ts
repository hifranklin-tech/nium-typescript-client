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

export class WalletApiResponse2 {
    /**
    * This field will return the success message if the limit updated successfully.
    */
    'message'?: string;
    /**
    * This flag indicates the success of the request.
    */
    'success'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WalletApiResponse2.attributeTypeMap;
    }

    public constructor() {
    }
}


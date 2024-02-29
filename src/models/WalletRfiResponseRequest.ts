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

import { RfiResponseInfo } from '../models/RfiResponseInfo';
import { HttpFile } from '../http/http';

export class WalletRfiResponseRequest {
    /**
    * This field accepts the unique RFI hash ID.
    */
    'rfiHashId': string;
    'rfiResponseInfo': RfiResponseInfo;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "rfiHashId",
            "baseName": "rfiHashId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "rfiResponseInfo",
            "baseName": "rfiResponseInfo",
            "type": "RfiResponseInfo",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WalletRfiResponseRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

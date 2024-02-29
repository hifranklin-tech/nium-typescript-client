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

import { URL } from '../models/URL';
import { HttpFile } from '../http/http';

export class Resource {
    'description'?: string;
    'file'?: any;
    'filename'?: string;
    'inputStream'?: any;
    'open'?: boolean;
    'readable'?: boolean;
    'uri'?: string;
    'url'?: URL;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "file",
            "baseName": "file",
            "type": "any",
            "format": ""
        },
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string",
            "format": ""
        },
        {
            "name": "inputStream",
            "baseName": "inputStream",
            "type": "any",
            "format": ""
        },
        {
            "name": "open",
            "baseName": "open",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "readable",
            "baseName": "readable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "uri",
            "baseName": "uri",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "URL",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Resource.attributeTypeMap;
    }

    public constructor() {
    }
}

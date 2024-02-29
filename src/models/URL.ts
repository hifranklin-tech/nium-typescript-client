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

export class URL {
    'host'?: string;
    'authority'?: string;
    'content'?: any;
    'defaultPort'?: number;
    'file'?: string;
    'path'?: string;
    'port'?: number;
    'protocol'?: string;
    'query'?: string;
    'ref'?: string;
    'userInfo'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "host",
            "baseName": "host",
            "type": "string",
            "format": ""
        },
        {
            "name": "authority",
            "baseName": "authority",
            "type": "string",
            "format": ""
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "any",
            "format": ""
        },
        {
            "name": "defaultPort",
            "baseName": "defaultPort",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "file",
            "baseName": "file",
            "type": "string",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "protocol",
            "baseName": "protocol",
            "type": "string",
            "format": ""
        },
        {
            "name": "query",
            "baseName": "query",
            "type": "string",
            "format": ""
        },
        {
            "name": "ref",
            "baseName": "ref",
            "type": "string",
            "format": ""
        },
        {
            "name": "userInfo",
            "baseName": "userInfo",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return URL.attributeTypeMap;
    }

    public constructor() {
    }
}

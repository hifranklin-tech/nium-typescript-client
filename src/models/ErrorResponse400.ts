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

import { ErrorDetail400 } from '../models/ErrorDetail400';
import { HttpFile } from '../http/http';

export class ErrorResponse400 {
    'errorDetails'?: Array<ErrorDetail400>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "errorDetails",
            "baseName": "errorDetails",
            "type": "Array<ErrorDetail400>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ErrorResponse400.attributeTypeMap;
    }

    public constructor() {
    }
}

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

import { CancelConversionError } from '../models/CancelConversionError';
import { HttpFile } from '../http/http';

export class CancelConversionErrorResponse {
    'errors'?: Array<CancelConversionError>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<CancelConversionError>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CancelConversionErrorResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

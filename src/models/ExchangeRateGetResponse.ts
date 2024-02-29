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

export class ExchangeRateGetResponse {
    'average'?: number;
    'min'?: number;
    'max'?: number;
    'time'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "average",
            "baseName": "average",
            "type": "number",
            "format": "double"
        },
        {
            "name": "min",
            "baseName": "min",
            "type": "number",
            "format": "double"
        },
        {
            "name": "max",
            "baseName": "max",
            "type": "number",
            "format": "double"
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return ExchangeRateGetResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

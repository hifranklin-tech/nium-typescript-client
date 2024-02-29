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

export class RoutingInfo {
    /**
    * This field accepts the routing code type.
    */
    'type'?: RoutingInfoTypeEnum;
    /**
    * This field accepts the routing code value.
    */
    'value'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "RoutingInfoTypeEnum",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RoutingInfo.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum RoutingInfoTypeEnum {
    Swift = 'SWIFT',
    TransitNumber = 'TRANSIT_NUMBER',
    BsbCode = 'BSB_CODE',
    SortCode = 'SORT_CODE'
}

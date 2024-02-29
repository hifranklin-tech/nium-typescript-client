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

import { CustomerDetailResponse } from '../models/CustomerDetailResponse';
import { HttpFile } from '../http/http';

export class PaginatedCustomerDetailsResponseV2DTO {
    'content'?: Array<CustomerDetailResponse>;
    'totalElements'?: number;
    'totalPages'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "content",
            "baseName": "content",
            "type": "Array<CustomerDetailResponse>",
            "format": ""
        },
        {
            "name": "totalElements",
            "baseName": "totalElements",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "totalPages",
            "baseName": "totalPages",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return PaginatedCustomerDetailsResponseV2DTO.attributeTypeMap;
    }

    public constructor() {
    }
}


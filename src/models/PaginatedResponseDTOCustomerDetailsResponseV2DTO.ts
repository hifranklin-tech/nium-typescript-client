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

import { CustomerDetailsResponseV2DTO } from '../models/CustomerDetailsResponseV2DTO';
import { Pagination } from '../models/Pagination';
import { HttpFile } from '../http/http';

export class PaginatedResponseDTOCustomerDetailsResponseV2DTO {
    'content'?: Array<CustomerDetailsResponseV2DTO>;
    'pagination'?: Pagination;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "content",
            "baseName": "content",
            "type": "Array<CustomerDetailsResponseV2DTO>",
            "format": ""
        },
        {
            "name": "pagination",
            "baseName": "pagination",
            "type": "Pagination",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PaginatedResponseDTOCustomerDetailsResponseV2DTO.attributeTypeMap;
    }

    public constructor() {
    }
}

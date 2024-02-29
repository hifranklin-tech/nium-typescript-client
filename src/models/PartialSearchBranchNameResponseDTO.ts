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

import { BranchNameResponseDTO } from '../models/BranchNameResponseDTO';
import { HttpFile } from '../http/http';

export class PartialSearchBranchNameResponseDTO {
    'branchName'?: string;
    'routingCodeValue'?: Array<BranchNameResponseDTO>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "branchName",
            "baseName": "branchName",
            "type": "string",
            "format": ""
        },
        {
            "name": "routingCodeValue",
            "baseName": "routingCodeValue",
            "type": "Array<BranchNameResponseDTO>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PartialSearchBranchNameResponseDTO.attributeTypeMap;
    }

    public constructor() {
    }
}

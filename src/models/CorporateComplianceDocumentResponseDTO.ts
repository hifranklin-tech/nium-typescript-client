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

export class CorporateComplianceDocumentResponseDTO {
    /**
    * This field contains the case ID of the corporate customer.
    */
    'caseId'?: string;
    /**
    * This field contains the client ID of the corporate customer.
    */
    'clientId'?: string;
    /**
    * This field contains the uploaded document remarks of the corporate customer.
    */
    'remarks'?: string;
    /**
    * This field contains the uploaded document status of the corporate customer.
    */
    'status'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "caseId",
            "baseName": "caseId",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientId",
            "baseName": "clientId",
            "type": "string",
            "format": ""
        },
        {
            "name": "remarks",
            "baseName": "remarks",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CorporateComplianceDocumentResponseDTO.attributeTypeMap;
    }

    public constructor() {
    }
}


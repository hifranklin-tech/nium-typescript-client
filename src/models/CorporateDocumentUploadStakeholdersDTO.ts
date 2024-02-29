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

import { CorporateDocumentUploadStakeholderDetailsDTO } from '../models/CorporateDocumentUploadStakeholderDetailsDTO';
import { HttpFile } from '../http/http';

export class CorporateDocumentUploadStakeholdersDTO {
    /**
    * This field accepts the unique reference ID for the stakeholder of the business entity.
    */
    'referenceId'?: string;
    'stakeholderDetails'?: CorporateDocumentUploadStakeholderDetailsDTO;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "referenceId",
            "baseName": "referenceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "stakeholderDetails",
            "baseName": "stakeholderDetails",
            "type": "CorporateDocumentUploadStakeholderDetailsDTO",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CorporateDocumentUploadStakeholdersDTO.attributeTypeMap;
    }

    public constructor() {
    }
}


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

import { Template } from '../models/Template';
import { HttpFile } from '../http/http';

export class RfiTemplate {
    /**
    * This field contains the reference ID of the the entity for which the RFI is raised.
    */
    'referenceId'?: string;
    /**
    * This field contains the remarks entered by compliance while raising RFI.
    */
    'remarks'?: string;
    /**
    * This field contains the status of the RFI. The possible values are: RFI_REQUESTED RFI_RESPONDED
    */
    'status'?: string;
    'template'?: Template;
    /**
    * This field contains the ID of the RFI template.
    */
    'templateId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "referenceId",
            "baseName": "referenceId",
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
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "Template",
            "format": ""
        },
        {
            "name": "templateId",
            "baseName": "templateId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RfiTemplate.attributeTypeMap;
    }

    public constructor() {
    }
}

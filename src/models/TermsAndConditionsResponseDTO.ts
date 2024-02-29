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

export class TermsAndConditionsResponseDTO {
    /**
    * This field contains the date and time of the TnC version creation.
    */
    'createdAt'?: string;
    /**
    * This field contains the HTML format of the TnC.
    */
    'description'?: string;
    /**
    * This field contains the name of the TnC to be presented to the customer.
    */
    'name'?: string;
    /**
    * This field contains the version number of the TnC.
    */
    'versionId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "versionId",
            "baseName": "versionId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TermsAndConditionsResponseDTO.attributeTypeMap;
    }

    public constructor() {
    }
}

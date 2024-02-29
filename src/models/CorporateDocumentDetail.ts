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

export class CorporateDocumentDetail {
    /**
    * This field accepts the document number for the uploaded document. This field is required only if the documents are being uploaded  AU: Optional EU: Required UK: Optional SG: Optional
    */
    'documentNumber'?: string;
    /**
    * This field accepts the type of the document. The acceptable types of the documents are:  Business Registration Document Trust Deed Partnership Deed Association Deed Register of Directors Register of Shareholders  AU: Optional EU: Required UK: Optional SG: Optional
    */
    'documentType'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "documentNumber",
            "baseName": "documentNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "documentType",
            "baseName": "documentType",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CorporateDocumentDetail.attributeTypeMap;
    }

    public constructor() {
    }
}


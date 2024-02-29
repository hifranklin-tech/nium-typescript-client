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

export class PayoutIdentificationDocumentDTO {
    /**
    * This field accepts the Base64 encoded document being uploaded. The size limit of the original document, which can be pdf, jpeg, jpg, or png, and should not exceed 2MB. It is recommended to use standard libraries for the same. For example, java.util.Base64.getEncoder().encodeToString(byte[] data);This can be used in Java.
    */
    'document'?: string;
    /**
    * This field accepts the file name of the document being uploaded.
    */
    'fileName'?: string;
    /**
    * This field accepts the file type of the document being uploaded. The valid values are jpg, jpeg, png, pdf, image/jpg, image/jpeg, image/png, and application/pdf.
    */
    'fileType'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "document",
            "baseName": "document",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileName",
            "baseName": "fileName",
            "type": "string",
            "format": ""
        },
        {
            "name": "fileType",
            "baseName": "fileType",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PayoutIdentificationDocumentDTO.attributeTypeMap;
    }

    public constructor() {
    }
}


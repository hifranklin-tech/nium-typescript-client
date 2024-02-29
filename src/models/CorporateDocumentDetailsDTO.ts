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

export class CorporateDocumentDetailsDTO {
    /**
    * This field contains the identification issuance Country value of each uploaded document, which was provided during document upload.
    */
    'documentIssuanceCountry'?: string;
    /**
    * This field contains the identification document type. The possible identification document type are: AU: Passport, Driver Licence, Medicare Number  UK & EU: National ID & Passport
    */
    'identificationType'?: string;
    /**
    * This field contains the masked value of the selected identificationType.
    */
    'identificationValue'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "documentIssuanceCountry",
            "baseName": "documentIssuanceCountry",
            "type": "string",
            "format": ""
        },
        {
            "name": "identificationType",
            "baseName": "identificationType",
            "type": "string",
            "format": ""
        },
        {
            "name": "identificationValue",
            "baseName": "identificationValue",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CorporateDocumentDetailsDTO.attributeTypeMap;
    }

    public constructor() {
    }
}

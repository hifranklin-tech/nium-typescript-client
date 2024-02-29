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

import { Document } from '../models/Document';
import { HttpFile } from '../http/http';

export class DocumentDetail {
    /**
    * An object that contains the document copy.
    */
    'document'?: Array<Document>;
    'documentColor'?: string;
    /**
    * The date the document expires in the `YYYY-MM-DD` format. This is required if `documentType` is `PASSPORT` or `DRIVERS_LICENSE`.
    */
    'documentExpiryDate'?: string;
    'documentHolderName'?: string;
    /**
    * The country that issued the business document. Use [Fetch corporate constants](ref:fetchcorporateconstants) API  for a valid set of values.
    */
    'documentIssuanceCountry'?: string;
    'documentIssuanceState'?: string;
    'documentIssuedDate'?: string;
    'documentIssuingAuthority'?: string;
    /**
    * ID number for the given `documentType`.
    */
    'documentNumber'?: string;
    'documentReferenceNumber'?: string;
    /**
    * The type of the document. Use [Fetch corporate constants](ref:fetchcorporateconstants) API for a valid set of values.
    */
    'documentType'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "document",
            "baseName": "document",
            "type": "Array<Document>",
            "format": ""
        },
        {
            "name": "documentColor",
            "baseName": "documentColor",
            "type": "string",
            "format": ""
        },
        {
            "name": "documentExpiryDate",
            "baseName": "documentExpiryDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "documentHolderName",
            "baseName": "documentHolderName",
            "type": "string",
            "format": ""
        },
        {
            "name": "documentIssuanceCountry",
            "baseName": "documentIssuanceCountry",
            "type": "string",
            "format": ""
        },
        {
            "name": "documentIssuanceState",
            "baseName": "documentIssuanceState",
            "type": "string",
            "format": ""
        },
        {
            "name": "documentIssuedDate",
            "baseName": "documentIssuedDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "documentIssuingAuthority",
            "baseName": "documentIssuingAuthority",
            "type": "string",
            "format": ""
        },
        {
            "name": "documentNumber",
            "baseName": "documentNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "documentReferenceNumber",
            "baseName": "documentReferenceNumber",
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
        return DocumentDetail.attributeTypeMap;
    }

    public constructor() {
    }
}

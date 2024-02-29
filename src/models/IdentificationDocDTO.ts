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

import { PayoutIdentificationDocumentDTO } from '../models/PayoutIdentificationDocumentDTO';
import { HttpFile } from '../http/http';

export class IdentificationDocDTO {
    /**
    * This field accepts the color of the document being uploaded.
    */
    'identificationDocColor'?: string;
    /**
    * This field accepts the expiry date of the document being uploaded.
    */
    'identificationDocExpiry'?: string;
    /**
    * This field accepts the name of the customer as per the document being uploaded.
    */
    'identificationDocHolderName'?: string;
    /**
    * This field accepts the issuing country of the document being uploaded.
    */
    'identificationDocIssuanceCountry'?: string;
    /**
    * This field accepts the reference number of the document being uploaded.
    */
    'identificationDocReferenceNumber'?: string;
    /**
    * It is an array of actual documents for the data provided in previous fields. We support a maximum of 4 files in the array, and the total max size should be less than 10 MB. A separate object is needed for each document image.
    */
    'identificationDocument'?: Array<PayoutIdentificationDocumentDTO>;
    /**
    * This field accepts the authority issuing the document being uploaded.
    */
    'identificationIssuingAuthority'?: string;
    /**
    * This field accepts the date of issuance of the document being uploaded. The format should be yyyy-mm-dd. Example, 2010-10-10.
    */
    'identificationIssuingDate'?: string;
    /**
    * This field accepts the type of document being uploaded.
    */
    'identificationType'?: string;
    /**
    * This field accepts the unique document id being uploaded.
    */
    'identificationValue'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "identificationDocColor",
            "baseName": "identificationDocColor",
            "type": "string",
            "format": ""
        },
        {
            "name": "identificationDocExpiry",
            "baseName": "identificationDocExpiry",
            "type": "string",
            "format": ""
        },
        {
            "name": "identificationDocHolderName",
            "baseName": "identificationDocHolderName",
            "type": "string",
            "format": ""
        },
        {
            "name": "identificationDocIssuanceCountry",
            "baseName": "identificationDocIssuanceCountry",
            "type": "string",
            "format": ""
        },
        {
            "name": "identificationDocReferenceNumber",
            "baseName": "identificationDocReferenceNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "identificationDocument",
            "baseName": "identificationDocument",
            "type": "Array<PayoutIdentificationDocumentDTO>",
            "format": ""
        },
        {
            "name": "identificationIssuingAuthority",
            "baseName": "identificationIssuingAuthority",
            "type": "string",
            "format": ""
        },
        {
            "name": "identificationIssuingDate",
            "baseName": "identificationIssuingDate",
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
        return IdentificationDocDTO.attributeTypeMap;
    }

    public constructor() {
    }
}

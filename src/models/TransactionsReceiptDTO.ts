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

export class TransactionsReceiptDTO {
    /**
    * This field contains the receipt as uploaded in Base64 encoded format.
    */
    'document': string;
    /**
    * This field contains the name of the file as uploaded.
    */
    'receiptFileName': string;
    /**
    * This field contains the file type of the uploaded receipt.
    */
    'receiptType': TransactionsReceiptDTOReceiptTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "document",
            "baseName": "document",
            "type": "string",
            "format": ""
        },
        {
            "name": "receiptFileName",
            "baseName": "receiptFileName",
            "type": "string",
            "format": ""
        },
        {
            "name": "receiptType",
            "baseName": "receiptType",
            "type": "TransactionsReceiptDTOReceiptTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TransactionsReceiptDTO.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum TransactionsReceiptDTOReceiptTypeEnum {
    ImagePng = 'image/png',
    ImageJpg = 'image/jpg',
    ImageJpeg = 'image/jpeg',
    ApplicationPdf = 'application/pdf'
}

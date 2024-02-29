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

/**
* This term refers to a type of payment method where the amount to be paid is fixed and cannot be changed once the payment is initiated. This type of payment is often used for one-time transactions, such as paying for a product or service.
*/
export class StaticPayNow {
    /**
    * This field contains the codec-base64 encoded QRCode image data. This will provide the QRCode image on decoding. This image can be read by devices such as smartphone or camera.
    */
    'qrCode'?: string;
    /**
    * This field contains the type of payment method such as staticPayNow, dynamicPayNow or bankTransfer
    */
    'type': StaticPayNowTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "qrCode",
            "baseName": "qrCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "StaticPayNowTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StaticPayNow.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum StaticPayNowTypeEnum {
    StaticPayNow = 'staticPayNow'
}


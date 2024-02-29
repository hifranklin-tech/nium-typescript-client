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

export class WalletPaymentIdsTagRequestDTO2 {
    /**
    * This field accepts the action which determines the type of operation that needs to be performed. The possible values are:  DELETE: When tag needs to be deleted. MAINTAIN: When tags need to be added or updated. 
    */
    'action': WalletPaymentIdsTagRequestDTO2ActionEnum;
    /**
    * This field accepts the name of the tag. The maximum key length limit is 128 characters. 
    */
    'key': string;
    /**
    * This field accepts the value of the tag. The maximum value length limit is 256 characters. Note: In case the tags.action is MAINTAIN and the value is not present for a tag, system will not allow the request.
    */
    'value'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "WalletPaymentIdsTagRequestDTO2ActionEnum",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WalletPaymentIdsTagRequestDTO2.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum WalletPaymentIdsTagRequestDTO2ActionEnum {
    Maintain = 'MAINTAIN',
    Delete = 'DELETE'
}


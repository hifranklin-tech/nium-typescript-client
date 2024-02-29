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

export class BlockCodeDTO {
    /**
    * This field accepts the reason for card block. It is required only in case of a permanent block [blockAction = permanentBlock]. Otherwise, it is not necessary.The possible values are: fraud cardLost cardStolen damaged
    */
    'reason'?: BlockCodeDTOReasonEnum;
    /**
    * The field accepts the block action to be applied on the card.The possible values are: permanentBlock temporaryBlock unblock
    */
    'blockAction': string;
    'remarks'?: string;
    'comments'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "reason",
            "baseName": "reason",
            "type": "BlockCodeDTOReasonEnum",
            "format": ""
        },
        {
            "name": "blockAction",
            "baseName": "blockAction",
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
            "name": "comments",
            "baseName": "comments",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BlockCodeDTO.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BlockCodeDTOReasonEnum {
    FraudCardLostCardStolendamaged = 'fraud, cardLost, cardStolen,damaged'
}


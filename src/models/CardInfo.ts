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
* Card details
*/
export class CardInfo {
    /**
    * Pre-defined product Id, defined at NIUM and communicated to client for card issuance.
    */
    'cardProductId'?: string;
    /**
    * This field contains the pre-defined plastic Id which is used to determine card design.
    */
    'plasticId'?: string;
    /**
    * This field contains the 2-letter [region code](doc:currency-and-country-codes) for the card.
    */
    'regionCode'?: string;
    /**
    * This field contains the 16-digit masked card number in format 1234-56xx-xxxx-3456.
    */
    'maskedCardNumber'?: string;
    /**
    * This field contains the reference number for the card.
    */
    'proxyNumber'?: string;
    /**
    * This field contains the issued card type.
    */
    'cardType'?: string;
    /**
    * This field contains the type of the card issued.
    */
    'issuanceType'?: string;
    /**
    * This field contains the activation status of the card.
    */
    'cardStatus'?: CardInfoCardStatusEnum;
    /**
    * This field refers to a unique identifier, known as customerHashId, assigned to an individual customer who is associated with a corporate customer at the parent level. This identifier serves the purpose of distinguishing and tracking the child-level customer within a given client\'s program. By utilizing this identifier, it becomes possible to establish and maintain the appropriate linkage between the child customer and their parent corporate customer, ensuring accurate association and management of customer data.
    */
    'childCustomerHashId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cardProductId",
            "baseName": "cardProductId",
            "type": "string",
            "format": ""
        },
        {
            "name": "plasticId",
            "baseName": "plasticId",
            "type": "string",
            "format": ""
        },
        {
            "name": "regionCode",
            "baseName": "regionCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "maskedCardNumber",
            "baseName": "maskedCardNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "proxyNumber",
            "baseName": "proxyNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "cardType",
            "baseName": "cardType",
            "type": "string",
            "format": ""
        },
        {
            "name": "issuanceType",
            "baseName": "issuanceType",
            "type": "string",
            "format": ""
        },
        {
            "name": "cardStatus",
            "baseName": "cardStatus",
            "type": "CardInfoCardStatusEnum",
            "format": ""
        },
        {
            "name": "childCustomerHashId",
            "baseName": "childCustomerHashId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CardInfo.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum CardInfoCardStatusEnum {
    InactiveactivevirtualActivetempBlockpBlock = 'INACTIVE,ACTIVE,VIRTUAL_ACTIVE,TEMP_BLOCK,P_BLOCK'
}

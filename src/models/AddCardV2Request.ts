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

import { AddCardV2RequestSelectOneOfTheFollowingCardType } from '../models/AddCardV2RequestSelectOneOfTheFollowingCardType';
import { HttpFile } from '../http/http';

export class AddCardV2Request {
    'selectOneOfTheFollowingCardType'?: AddCardV2RequestSelectOneOfTheFollowingCardType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "selectOneOfTheFollowingCardType",
            "baseName": "Select one of the following card type",
            "type": "AddCardV2RequestSelectOneOfTheFollowingCardType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AddCardV2Request.attributeTypeMap;
    }

    public constructor() {
    }
}


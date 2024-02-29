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

import { BusinessPartnerV2 } from '../models/BusinessPartnerV2';
import { StakeholderDetailsV2 } from '../models/StakeholderDetailsV2';
import { HttpFile } from '../http/http';

export class StakeholderV2 {
    'businessPartner'?: BusinessPartnerV2;
    'referenceId'?: string;
    'stakeholderDetails'?: StakeholderDetailsV2;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "businessPartner",
            "baseName": "businessPartner",
            "type": "BusinessPartnerV2",
            "format": ""
        },
        {
            "name": "referenceId",
            "baseName": "referenceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "stakeholderDetails",
            "baseName": "stakeholderDetails",
            "type": "StakeholderDetailsV2",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StakeholderV2.attributeTypeMap;
    }

    public constructor() {
    }
}

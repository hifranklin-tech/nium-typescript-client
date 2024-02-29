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

import { BankAccountDetails } from '../models/BankAccountDetails';
import { RegisteredAddress } from '../models/RegisteredAddress';
import { HttpFile } from '../http/http';

export class AutoSweepBankDetails {
    'bankAccountDetails'?: BankAccountDetails;
    'clientRegisteredAddress'?: RegisteredAddress;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bankAccountDetails",
            "baseName": "bankAccountDetails",
            "type": "BankAccountDetails",
            "format": ""
        },
        {
            "name": "clientRegisteredAddress",
            "baseName": "clientRegisteredAddress",
            "type": "RegisteredAddress",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AutoSweepBankDetails.attributeTypeMap;
    }

    public constructor() {
    }
}

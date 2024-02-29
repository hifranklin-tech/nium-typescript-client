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

export class Payment {
    'creditorAccount'?: string;
    'creditorCurrency'?: string;
    'creditorName'?: string;
    'debtorAccount'?: string;
    'debtorCurrency'?: string;
    'instructedAmount'?: string;
    'instructedCurrency'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "creditorAccount",
            "baseName": "creditorAccount",
            "type": "string",
            "format": ""
        },
        {
            "name": "creditorCurrency",
            "baseName": "creditorCurrency",
            "type": "string",
            "format": ""
        },
        {
            "name": "creditorName",
            "baseName": "creditorName",
            "type": "string",
            "format": ""
        },
        {
            "name": "debtorAccount",
            "baseName": "debtorAccount",
            "type": "string",
            "format": ""
        },
        {
            "name": "debtorCurrency",
            "baseName": "debtorCurrency",
            "type": "string",
            "format": ""
        },
        {
            "name": "instructedAmount",
            "baseName": "instructedAmount",
            "type": "string",
            "format": ""
        },
        {
            "name": "instructedCurrency",
            "baseName": "instructedCurrency",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Payment.attributeTypeMap;
    }

    public constructor() {
    }
}

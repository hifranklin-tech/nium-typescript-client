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

export class ClientCurrencyResponseDTO {
    /**
    * This is the authorization order based on priority for available currencies. The order starts from 0 as a highest priority.
    */
    'authorizationOrder'?: number;
    /**
    * This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes).
    */
    'currencyCode'?: string;
    /**
    * This field contains the decimal unit which will be used for rounding off, for example 0
    */
    'decimalUnit'?: number;
    /**
    * This field indicates if forex sell is allowed or not for the currency.
    */
    'fxSellAllowed'?: boolean;
    /**
    * This field specifies if the remittance is allowed with the respective currency or not.
    */
    'remittanceAllowed'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "authorizationOrder",
            "baseName": "authorizationOrder",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "currencyCode",
            "baseName": "currencyCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "decimalUnit",
            "baseName": "decimalUnit",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "fxSellAllowed",
            "baseName": "fxSellAllowed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "remittanceAllowed",
            "baseName": "remittanceAllowed",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ClientCurrencyResponseDTO.attributeTypeMap;
    }

    public constructor() {
    }
}


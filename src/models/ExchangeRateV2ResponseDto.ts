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

export class ExchangeRateV2ResponseDto {
    /**
    * The credited amount.
    */
    'destinationAmount'?: number;
    /**
    * This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount.
    */
    'destinationCurrencyCode'?: string;
    /**
    * The ecb exchange rate fetched for the conversion. This field is only applicable for EU and UK.
    */
    'ecbFxRate'?: number;
    /**
    * The exchange rate fetched for the conversion.
    */
    'exchangeRate'?: number;
    /**
    * Timestamp till which the quoted rate is valid. The timezone is UTC +00.
    */
    'expiryDate'?: string;
    /**
    * In case source or destination amount is provided the markup amount will be calculated using markupRate.
    */
    'markupAmount'?: number;
    /**
    * This is the markup rate charged by NIUM.
    */
    'markupRate'?: number;
    /**
    * This is exchangeRate subtracted by the markupRate.
    */
    'netExchangeRate'?: number;
    /**
    * Unique quote Id for the exchange rate.
    */
    'quoteId'?: string;
    /**
    * The netExchangeRate should be divided by the scaling factor to fetch the actual exchange rate.
    */
    'scalingFactor'?: number;
    /**
    * An amount to be converted.
    */
    'sourceAmount'?: number;
    /**
    * This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount.
    */
    'sourceCurrencyCode'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "destinationAmount",
            "baseName": "destinationAmount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "destinationCurrencyCode",
            "baseName": "destinationCurrencyCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "ecbFxRate",
            "baseName": "ecbFxRate",
            "type": "number",
            "format": "double"
        },
        {
            "name": "exchangeRate",
            "baseName": "exchangeRate",
            "type": "number",
            "format": "double"
        },
        {
            "name": "expiryDate",
            "baseName": "expiryDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "markupAmount",
            "baseName": "markupAmount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "markupRate",
            "baseName": "markupRate",
            "type": "number",
            "format": "double"
        },
        {
            "name": "netExchangeRate",
            "baseName": "netExchangeRate",
            "type": "number",
            "format": "double"
        },
        {
            "name": "quoteId",
            "baseName": "quoteId",
            "type": "string",
            "format": ""
        },
        {
            "name": "scalingFactor",
            "baseName": "scalingFactor",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "sourceAmount",
            "baseName": "sourceAmount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "sourceCurrencyCode",
            "baseName": "sourceCurrencyCode",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ExchangeRateV2ResponseDto.attributeTypeMap;
    }

    public constructor() {
    }
}

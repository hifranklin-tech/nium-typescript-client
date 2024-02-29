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

export class LinkAccountResponse {
    /**
    * This field accepts the [2-letter ISO-2 country code](doc:currency-and-country-codes) where the bank account resides.
    */
    'country'?: string;
    /**
    * This field contains the timestamp when the funding instrument was added.
    */
    'createdAt'?: Date;
    /**
    * This field accepts the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) for the account to be linked.
    */
    'currency'?: string;
    /**
    * The field shows the mode of funding the wallet. Only direct debit is supported when adding a new funding instrument.
    */
    'fundingChannel'?: LinkAccountResponseFundingChannelEnum;
    /**
    * The unique 36-character alphanumeric identifier of a funding instrument. The ID is a bank account identifier when the funding channel is direct debit.
    */
    'fundingInstrumentId'?: string;
    /**
    * This field contains the URL where the customer is redirected.
    */
    'returnUrl'?: string;
    /**
    * This field contains the status of the request. The possible values are:   PENDING   FAILED
    */
    'status'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string",
            "format": ""
        },
        {
            "name": "fundingChannel",
            "baseName": "fundingChannel",
            "type": "LinkAccountResponseFundingChannelEnum",
            "format": ""
        },
        {
            "name": "fundingInstrumentId",
            "baseName": "fundingInstrumentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "returnUrl",
            "baseName": "returnUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LinkAccountResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum LinkAccountResponseFundingChannelEnum {
    DirectDebit = 'DIRECT_DEBIT'
}

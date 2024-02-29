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

export class LocalIsoRequest {
    /**
    * This field contains the 15 character acceptor id
    */
    'acceptorId42'?: string;
    /**
    * This field contains the acceptor name and location
    */
    'acceptorNameLocation43'?: string;
    /**
    * This field contains the 8 character acceptor terminal id
    */
    'acceptorTerminalId41'?: string;
    /**
    * This field contains the 3 character ai country code
    */
    'aiCountryCode19'?: string;
    /**
    * This field contains the ai identity code
    */
    'aiIdentityCode32'?: string;
    /**
    * This field contains the 6 character authorization code
    */
    'authorizationCode38'?: string;
    /**
    * This field contains the 12 character billing amount
    */
    'billingAmount6'?: string;
    /**
    * This field contains the billing amount fee30
    */
    'billingAmountFee30'?: string;
    /**
    * This field contains the billing amount fee8
    */
    'billingAmountFee8'?: string;
    /**
    * This field contains the billing conversion rate10
    */
    'billingConversionRate10'?: string;
    /**
    * This field contains the 3 character billing currency code
    */
    'billingCurrencyCode51'?: string;
    /**
    * This field contains the capture date
    */
    'captureDateYYMM17'?: string;
    /**
    * This field contains the card sequence number
    */
    'cardSequenceNumber23'?: string;
    /**
    * This field contains the conversion date
    */
    'conversionDateYYMM16'?: string;
    /**
    * This field contains the expiry date
    */
    'expiryDateYYMM14'?: string;
    /**
    * This field contains the 3 character fi country code
    */
    'fiCountryCode21'?: string;
    /**
    * This field contains the fi identity code
    */
    'fiIdentityCode33'?: string;
    /**
    * This field contains the local date13
    */
    'localDate13'?: string;
    /**
    * This field contains the local time12
    */
    'localTime12'?: string;
    /**
    * This field contains the 4 character merchant type
    */
    'merchantType18'?: string;
    /**
    * This field contains the 4 character message type
    */
    'messageType0'?: string;
    /**
    * This field contains the mid62
    */
    'mid62'?: string;
    /**
    * This field contains the misc data
    */
    'miscData58'?: string;
    /**
    * This field contains the network international id
    */
    'networkInternationalId24'?: string;
    /**
    * This field contains the original data element
    */
    'originalDataElement90'?: string;
    /**
    * This field contains the 16 character pan2
    */
    'pan2'?: string;
    /**
    * This field contains the 2 character pos condition code
    */
    'posConditionCode25'?: string;
    /**
    * This field contains the pos entry capability code
    */
    'posEntryCapabilityCode60'?: string;
    /**
    * This field contains the 4 character pos entry mode
    */
    'posEntryMode22'?: string;
    /**
    * This field contains the pos pin capture code
    */
    'posPinCaptureCode26'?: string;
    /**
    * This field contains the 6 character processing code
    */
    'processingCode3'?: string;
    /**
    * This field contains the replacement amount
    */
    'replacementAmount95'?: string;
    /**
    * This field contains the 2 character response code
    */
    'responseCode39'?: string;
    /**
    * This field contains the rrn
    */
    'rrn'?: string;
    /**
    * This field contains the settlement amount
    */
    'settlementAmount5'?: string;
    /**
    * This field contains the settlement amount fee
    */
    'settlementAmountFee29'?: string;
    /**
    * This field contains the settlement conversion rate9
    */
    'settlementConversionRate9'?: string;
    /**
    * This field contains the settlement currency code
    */
    'settlementCurrencyCode50'?: string;
    /**
    * This field contains the settlement date
    */
    'settlementDateYYMM15'?: string;
    /**
    * This field contains the settlement processing amount fee
    */
    'settlementProcessingAmountFee31'?: string;
    /**
    * This field contains the stan
    */
    'stan'?: string;
    /**
    * This field contains the trace identifier
    */
    'traceIdentifier115'?: string;
    /**
    * This field contains the track 2 Data
    */
    'track2Data35'?: string;
    /**
    * This field contains the 12 character transaction amount
    */
    'transactionAmount4'?: string;
    /**
    * This field contains the transaction amount fee
    */
    'transactionAmountFee28'?: string;
    /**
    * This field contains the 3 character transaction currency code
    */
    'transactionCurrencyCode49'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "acceptorId42",
            "baseName": "acceptorId42",
            "type": "string",
            "format": ""
        },
        {
            "name": "acceptorNameLocation43",
            "baseName": "acceptorNameLocation43",
            "type": "string",
            "format": ""
        },
        {
            "name": "acceptorTerminalId41",
            "baseName": "acceptorTerminalId41",
            "type": "string",
            "format": ""
        },
        {
            "name": "aiCountryCode19",
            "baseName": "aiCountryCode19",
            "type": "string",
            "format": ""
        },
        {
            "name": "aiIdentityCode32",
            "baseName": "aiIdentityCode32",
            "type": "string",
            "format": ""
        },
        {
            "name": "authorizationCode38",
            "baseName": "authorizationCode38",
            "type": "string",
            "format": ""
        },
        {
            "name": "billingAmount6",
            "baseName": "billingAmount6",
            "type": "string",
            "format": ""
        },
        {
            "name": "billingAmountFee30",
            "baseName": "billingAmountFee30",
            "type": "string",
            "format": ""
        },
        {
            "name": "billingAmountFee8",
            "baseName": "billingAmountFee8",
            "type": "string",
            "format": ""
        },
        {
            "name": "billingConversionRate10",
            "baseName": "billingConversionRate10",
            "type": "string",
            "format": ""
        },
        {
            "name": "billingCurrencyCode51",
            "baseName": "billingCurrencyCode51",
            "type": "string",
            "format": ""
        },
        {
            "name": "captureDateYYMM17",
            "baseName": "captureDateYYMM17",
            "type": "string",
            "format": ""
        },
        {
            "name": "cardSequenceNumber23",
            "baseName": "cardSequenceNumber23",
            "type": "string",
            "format": ""
        },
        {
            "name": "conversionDateYYMM16",
            "baseName": "conversionDateYYMM16",
            "type": "string",
            "format": ""
        },
        {
            "name": "expiryDateYYMM14",
            "baseName": "expiryDateYYMM14",
            "type": "string",
            "format": ""
        },
        {
            "name": "fiCountryCode21",
            "baseName": "fiCountryCode21",
            "type": "string",
            "format": ""
        },
        {
            "name": "fiIdentityCode33",
            "baseName": "fiIdentityCode33",
            "type": "string",
            "format": ""
        },
        {
            "name": "localDate13",
            "baseName": "localDate13",
            "type": "string",
            "format": ""
        },
        {
            "name": "localTime12",
            "baseName": "localTime12",
            "type": "string",
            "format": ""
        },
        {
            "name": "merchantType18",
            "baseName": "merchantType18",
            "type": "string",
            "format": ""
        },
        {
            "name": "messageType0",
            "baseName": "messageType0",
            "type": "string",
            "format": ""
        },
        {
            "name": "mid62",
            "baseName": "mid62",
            "type": "string",
            "format": ""
        },
        {
            "name": "miscData58",
            "baseName": "miscData58",
            "type": "string",
            "format": ""
        },
        {
            "name": "networkInternationalId24",
            "baseName": "networkInternationalId24",
            "type": "string",
            "format": ""
        },
        {
            "name": "originalDataElement90",
            "baseName": "originalDataElement90",
            "type": "string",
            "format": ""
        },
        {
            "name": "pan2",
            "baseName": "pan2",
            "type": "string",
            "format": ""
        },
        {
            "name": "posConditionCode25",
            "baseName": "posConditionCode25",
            "type": "string",
            "format": ""
        },
        {
            "name": "posEntryCapabilityCode60",
            "baseName": "posEntryCapabilityCode60",
            "type": "string",
            "format": ""
        },
        {
            "name": "posEntryMode22",
            "baseName": "posEntryMode22",
            "type": "string",
            "format": ""
        },
        {
            "name": "posPinCaptureCode26",
            "baseName": "posPinCaptureCode26",
            "type": "string",
            "format": ""
        },
        {
            "name": "processingCode3",
            "baseName": "processingCode3",
            "type": "string",
            "format": ""
        },
        {
            "name": "replacementAmount95",
            "baseName": "replacementAmount95",
            "type": "string",
            "format": ""
        },
        {
            "name": "responseCode39",
            "baseName": "responseCode39",
            "type": "string",
            "format": ""
        },
        {
            "name": "rrn",
            "baseName": "rrn",
            "type": "string",
            "format": ""
        },
        {
            "name": "settlementAmount5",
            "baseName": "settlementAmount5",
            "type": "string",
            "format": ""
        },
        {
            "name": "settlementAmountFee29",
            "baseName": "settlementAmountFee29",
            "type": "string",
            "format": ""
        },
        {
            "name": "settlementConversionRate9",
            "baseName": "settlementConversionRate9",
            "type": "string",
            "format": ""
        },
        {
            "name": "settlementCurrencyCode50",
            "baseName": "settlementCurrencyCode50",
            "type": "string",
            "format": ""
        },
        {
            "name": "settlementDateYYMM15",
            "baseName": "settlementDateYYMM15",
            "type": "string",
            "format": ""
        },
        {
            "name": "settlementProcessingAmountFee31",
            "baseName": "settlementProcessingAmountFee31",
            "type": "string",
            "format": ""
        },
        {
            "name": "stan",
            "baseName": "stan",
            "type": "string",
            "format": ""
        },
        {
            "name": "traceIdentifier115",
            "baseName": "traceIdentifier115",
            "type": "string",
            "format": ""
        },
        {
            "name": "track2Data35",
            "baseName": "track2Data35",
            "type": "string",
            "format": ""
        },
        {
            "name": "transactionAmount4",
            "baseName": "transactionAmount4",
            "type": "string",
            "format": ""
        },
        {
            "name": "transactionAmountFee28",
            "baseName": "transactionAmountFee28",
            "type": "string",
            "format": ""
        },
        {
            "name": "transactionCurrencyCode49",
            "baseName": "transactionCurrencyCode49",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LocalIsoRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


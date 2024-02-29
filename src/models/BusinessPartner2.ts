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

import { Addresses } from '../models/Addresses';
import { LegalDetails } from '../models/LegalDetails';
import { ProductDocumentDetail } from '../models/ProductDocumentDetail';
import { ProductRegulatoryDetails } from '../models/ProductRegulatoryDetails';
import { HttpFile } from '../http/http';

export class BusinessPartner2 {
    'addresses'?: Addresses;
    'businessEntityType'?: string;
    'businessInOtherCountries'?: Array<any>;
    /**
    * This field accepts the registered business name of the business partner.
    */
    'businessName'?: string;
    /**
    * This field accepts the registered business registration number of the business partner.
    */
    'businessRegistrationNumber'?: string;
    /**
    * This field contains the legal entity type of the business.
    */
    'businessType'?: string;
    'description'?: string;
    'documentDetails'?: ProductDocumentDetail;
    'legalDetails'?: LegalDetails;
    'purposeCode'?: string;
    'regulatoryDetails'?: ProductRegulatoryDetails;
    /**
    * This field accepts the percentage of shares held by stakeholder.
    */
    'sharePercentage'?: string;
    'ticker'?: string;
    /**
    * This field accepts the Trading Name also known as Doing Business As(DBA) name.
    */
    'tradeName'?: string;
    'trusteeName'?: string;
    'website'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "addresses",
            "baseName": "addresses",
            "type": "Addresses",
            "format": ""
        },
        {
            "name": "businessEntityType",
            "baseName": "businessEntityType",
            "type": "string",
            "format": ""
        },
        {
            "name": "businessInOtherCountries",
            "baseName": "businessInOtherCountries",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "businessName",
            "baseName": "businessName",
            "type": "string",
            "format": ""
        },
        {
            "name": "businessRegistrationNumber",
            "baseName": "businessRegistrationNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "businessType",
            "baseName": "businessType",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "documentDetails",
            "baseName": "documentDetails",
            "type": "ProductDocumentDetail",
            "format": ""
        },
        {
            "name": "legalDetails",
            "baseName": "legalDetails",
            "type": "LegalDetails",
            "format": ""
        },
        {
            "name": "purposeCode",
            "baseName": "purposeCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "regulatoryDetails",
            "baseName": "regulatoryDetails",
            "type": "ProductRegulatoryDetails",
            "format": ""
        },
        {
            "name": "sharePercentage",
            "baseName": "sharePercentage",
            "type": "string",
            "format": ""
        },
        {
            "name": "ticker",
            "baseName": "ticker",
            "type": "string",
            "format": ""
        },
        {
            "name": "tradeName",
            "baseName": "tradeName",
            "type": "string",
            "format": ""
        },
        {
            "name": "trusteeName",
            "baseName": "trusteeName",
            "type": "string",
            "format": ""
        },
        {
            "name": "website",
            "baseName": "website",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BusinessPartner2.attributeTypeMap;
    }

    public constructor() {
    }
}


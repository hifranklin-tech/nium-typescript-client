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

import { CorporateAddresses } from '../models/CorporateAddresses';
import { CorporateLegalDetails } from '../models/CorporateLegalDetails';
import { CorporateStakeholders } from '../models/CorporateStakeholders';
import { HttpFile } from '../http/http';

export class CorporateBusinessDetails {
    /**
    * This object accepts additional information about the business. Acceptable fields are `isSameBusinessAddress` (for all regions), `searchId` (for EU, SG, UK), and `businessExtractCoveredStakeholder` (for EU). Acceptable values for all the above fields are `Yes` and `No`.
    */
    'additionalInfo'?: { [key: string]: string; };
    'addresses'?: CorporateAddresses;
    /**
    * This field contains the name of a business.
    */
    'businessName'?: string;
    /**
    * This field accepts the business registration number of the new corporate entity to be onboarded.
    */
    'businessRegistrationNumber'?: string;
    'legalDetails'?: CorporateLegalDetails;
    /**
    * This array accepts the stakeholder details for the new corporate entity to be onboarded.
    */
    'stakeholders'?: Array<CorporateStakeholders>;
    /**
    * This field accepts the business website link of the new corporate entity to be onboarded.
    */
    'website'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "additionalInfo",
            "baseName": "additionalInfo",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "addresses",
            "baseName": "addresses",
            "type": "CorporateAddresses",
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
            "name": "legalDetails",
            "baseName": "legalDetails",
            "type": "CorporateLegalDetails",
            "format": ""
        },
        {
            "name": "stakeholders",
            "baseName": "stakeholders",
            "type": "Array<CorporateStakeholders>",
            "format": ""
        },
        {
            "name": "website",
            "baseName": "website",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CorporateBusinessDetails.attributeTypeMap;
    }

    public constructor() {
    }
}

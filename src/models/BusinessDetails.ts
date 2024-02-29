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
import { ApplicantDetails } from '../models/ApplicantDetails';
import { BankAccountDetails } from '../models/BankAccountDetails';
import { LegalDetails } from '../models/LegalDetails';
import { ProductAssociationDetails } from '../models/ProductAssociationDetails';
import { ProductDocumentDetail } from '../models/ProductDocumentDetail';
import { ProductPartnershipDetails } from '../models/ProductPartnershipDetails';
import { ProductRegulatoryDetails } from '../models/ProductRegulatoryDetails';
import { ProductTaxDetails } from '../models/ProductTaxDetails';
import { Stakeholders } from '../models/Stakeholders';
import { HttpFile } from '../http/http';

export class BusinessDetails {
    /**
    * This object accepts additional information about the business.  AU: Optional EU: Optional UK: Optional SG: Optional
    */
    'additionalInfo'?: { [key: string]: string; };
    'addresses'?: Addresses;
    'applicantDetails'?: ApplicantDetails;
    'associationDetails'?: ProductAssociationDetails;
    'bankAccountDetails'?: BankAccountDetails;
    /**
    * This field contains the name of a business.  AU: Required EU: Required UK: Required SG: Required
    */
    'businessName'?: string;
    /**
    * This field accepts the business registration number of the new corporate entity to be onboarded.  AU: Required EU: Required UK: Required SG: Required
    */
    'businessRegistrationNumber'?: string;
    /**
    * This field accepts the legal entity type of the business. The supported entity types are: Sole Trader  Private Limited Company Public Company Partnership Limited Liability Partnership Firm Government Body Associations Trust Regulated Trust Unregulated Trust  AU: Required EU: Required UK: Required SG: Required
    */
    'businessType'?: string;
    'description'?: string;
    /**
    * This is an array which accepts the document details for KYB. This field is required only if the documents are being uploaded  AU: Optional EU: Optional UK: Optional SG: Optional
    */
    'documentDetails'?: Array<ProductDocumentDetail>;
    /**
    * This field accepts the former name of the new corporate entity to be onboarded.  AU: NA EU: NA UK: NA SG: Optional
    */
    'formerName'?: string;
    'legalDetails'?: LegalDetails;
    'partnershipDetails'?: ProductPartnershipDetails;
    /**
    * This field accepts the unique reference ID for the Business Entity provided by client.  AU: Optional EU: Optional UK: Optional SG: Optional
    */
    'referenceId'?: string;
    'regulatoryDetails'?: ProductRegulatoryDetails;
    /**
    * This field accepts the settlor name.  AU: Optional EU: NA UK: NA SG: NA
    */
    'settlorName'?: string;
    /**
    * This array accepts the stakeholder details for the new corporate entity to be onboarded. This field is required in case the region is AU and entity type [refer businessDetails.businessType] is one of the following: Sole Trader Unregulated Trust Partnerships Government Body Association  AU: Required EU: Required UK: Required SG: Required
    */
    'stakeholders'?: Array<Stakeholders>;
    'stockSymbol'?: string;
    /**
    * This array accepts the tax details for the new corporate entity to be onboarded.  AU: NA EU: Required UK: NA SG: NA
    */
    'taxDetails'?: Array<ProductTaxDetails>;
    /**
    * This field accepts the Trading Name also known as Doing Business As(DBA) name. This field is needed in case the new corporate entity to be onboarded. is doing business with a name other than the registered business name.  AU: Optional EU: Optional UK: Optional SG: Optional
    */
    'tradeName'?: string;
    /**
    * This field accepts the full business name of the trustee in case the entity type is a trust. This field is required in case the region is AU and entity type [refer businessDetails.businessType] is a Regulated Trust or an Unregulated Trust.  AU: Optional EU: NA UK: NA SG: Optional
    */
    'trusteeName'?: string;
    /**
    * This field accepts the business website link of the new corporate entity to be onboarded.  AU: Optional EU: Optional UK: Optional SG: Optional
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
            "type": "Addresses",
            "format": ""
        },
        {
            "name": "applicantDetails",
            "baseName": "applicantDetails",
            "type": "ApplicantDetails",
            "format": ""
        },
        {
            "name": "associationDetails",
            "baseName": "associationDetails",
            "type": "ProductAssociationDetails",
            "format": ""
        },
        {
            "name": "bankAccountDetails",
            "baseName": "bankAccountDetails",
            "type": "BankAccountDetails",
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
            "type": "Array<ProductDocumentDetail>",
            "format": ""
        },
        {
            "name": "formerName",
            "baseName": "formerName",
            "type": "string",
            "format": ""
        },
        {
            "name": "legalDetails",
            "baseName": "legalDetails",
            "type": "LegalDetails",
            "format": ""
        },
        {
            "name": "partnershipDetails",
            "baseName": "partnershipDetails",
            "type": "ProductPartnershipDetails",
            "format": ""
        },
        {
            "name": "referenceId",
            "baseName": "referenceId",
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
            "name": "settlorName",
            "baseName": "settlorName",
            "type": "string",
            "format": ""
        },
        {
            "name": "stakeholders",
            "baseName": "stakeholders",
            "type": "Array<Stakeholders>",
            "format": ""
        },
        {
            "name": "stockSymbol",
            "baseName": "stockSymbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "taxDetails",
            "baseName": "taxDetails",
            "type": "Array<ProductTaxDetails>",
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
        return BusinessDetails.attributeTypeMap;
    }

    public constructor() {
    }
}

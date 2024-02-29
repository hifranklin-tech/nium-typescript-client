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

import { AddressV2 } from '../models/AddressV2';
import { ApplicantDetailsV2 } from '../models/ApplicantDetailsV2';
import { AssociationDetails } from '../models/AssociationDetails';
import { CorporateDocumentDetails2DTO } from '../models/CorporateDocumentDetails2DTO';
import { LegalDetailsV2 } from '../models/LegalDetailsV2';
import { PartnershipDetails } from '../models/PartnershipDetails';
import { RegulatoryDetails } from '../models/RegulatoryDetails';
import { StakeholderV2 } from '../models/StakeholderV2';
import { TaxDetailsResponseDTO } from '../models/TaxDetailsResponseDTO';
import { HttpFile } from '../http/http';

export class BusinessDetailsResponseV2DTO {
    'applicantDetails'?: ApplicantDetailsV2;
    'associationDetail'?: AssociationDetails;
    'businessAddress'?: AddressV2;
    /**
    * This field contains business extract covered stakeholder which specifies if the business extract document given covers the stakeholder details. The value for this field can be either Yes or No.
    */
    'businessExtractCoveredStakeholder'?: string;
    /**
    * This field contains the business name of the entity.
    */
    'businessName'?: string;
    /**
    * This field contains the business registration number of the entity.
    */
    'businessRegistrationNumber'?: string;
    /**
    * This field contains the legal entity type of the business.
    */
    'businessType'?: string;
    /**
    * This field contains the  description of the business details
    */
    'description'?: string;
    /**
    * This is an array which contains the document details.
    */
    'documentDetails'?: Array<CorporateDocumentDetails2DTO>;
    /**
    * This field contains the former name.
    */
    'formerName'?: string;
    'legalDetails'?: LegalDetailsV2;
    'partnershipDetails'?: PartnershipDetails;
    /**
    * This field contains the  reference id of the entity
    */
    'referenceId'?: string;
    'registeredAddress'?: AddressV2;
    'regulatoryDetails'?: RegulatoryDetails;
    'settlorName'?: string;
    'stakeholders'?: Array<StakeholderV2>;
    'stockSymbol'?: string;
    /**
    * This array contains tax details provided during compliance onboarding for EU customers. Otherwise, it contains null.
    */
    'taxDetails'?: Array<TaxDetailsResponseDTO>;
    /**
    * This field contains the trading name which is also known as Doing Business As(DBA)(In case the entity is doing business with a different name than the registered business name).
    */
    'tradeName'?: string;
    'trusteeName'?: string;
    'website'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "applicantDetails",
            "baseName": "applicantDetails",
            "type": "ApplicantDetailsV2",
            "format": ""
        },
        {
            "name": "associationDetail",
            "baseName": "associationDetail",
            "type": "AssociationDetails",
            "format": ""
        },
        {
            "name": "businessAddress",
            "baseName": "businessAddress",
            "type": "AddressV2",
            "format": ""
        },
        {
            "name": "businessExtractCoveredStakeholder",
            "baseName": "businessExtractCoveredStakeholder",
            "type": "string",
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
            "type": "Array<CorporateDocumentDetails2DTO>",
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
            "type": "LegalDetailsV2",
            "format": ""
        },
        {
            "name": "partnershipDetails",
            "baseName": "partnershipDetails",
            "type": "PartnershipDetails",
            "format": ""
        },
        {
            "name": "referenceId",
            "baseName": "referenceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "registeredAddress",
            "baseName": "registeredAddress",
            "type": "AddressV2",
            "format": ""
        },
        {
            "name": "regulatoryDetails",
            "baseName": "regulatoryDetails",
            "type": "RegulatoryDetails",
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
            "type": "Array<StakeholderV2>",
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
            "type": "Array<TaxDetailsResponseDTO>",
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
        return BusinessDetailsResponseV2DTO.attributeTypeMap;
    }

    public constructor() {
    }
}

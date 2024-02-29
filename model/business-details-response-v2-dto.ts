/* tslint:disable */
/* eslint-disable */
/**
 * NIUM Platform
 * NIUM Platform
 *
 * The version of the OpenAPI document: 2023.12.12
 * Contact: experience@nium.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { AddressV2 } from './address-v2';
// May contain unused imports in some cases
// @ts-ignore
import { ApplicantDetailsV2 } from './applicant-details-v2';
// May contain unused imports in some cases
// @ts-ignore
import { AssociationDetails } from './association-details';
// May contain unused imports in some cases
// @ts-ignore
import { CorporateDocumentDetails2DTO } from './corporate-document-details2-dto';
// May contain unused imports in some cases
// @ts-ignore
import { LegalDetailsV2 } from './legal-details-v2';
// May contain unused imports in some cases
// @ts-ignore
import { PartnershipDetails } from './partnership-details';
// May contain unused imports in some cases
// @ts-ignore
import { RegulatoryDetails } from './regulatory-details';
// May contain unused imports in some cases
// @ts-ignore
import { StakeholderV2 } from './stakeholder-v2';
// May contain unused imports in some cases
// @ts-ignore
import { TaxDetailsResponseDTO } from './tax-details-response-dto';

/**
 * 
 * @export
 * @interface BusinessDetailsResponseV2DTO
 */
export interface BusinessDetailsResponseV2DTO {
    /**
     * 
     * @type {ApplicantDetailsV2}
     * @memberof BusinessDetailsResponseV2DTO
     */
    'applicantDetails'?: ApplicantDetailsV2;
    /**
     * 
     * @type {AssociationDetails}
     * @memberof BusinessDetailsResponseV2DTO
     */
    'associationDetail'?: AssociationDetails;
    /**
     * 
     * @type {AddressV2}
     * @memberof BusinessDetailsResponseV2DTO
     */
    'businessAddress'?: AddressV2;
    /**
     * This field contains business extract covered stakeholder which specifies if the business extract document given covers the stakeholder details. The value for this field can be either Yes or No.
     * @type {string}
     * @memberof BusinessDetailsResponseV2DTO
     */
    'businessExtractCoveredStakeholder'?: string;
    /**
     * This field contains the business name of the entity.
     * @type {string}
     * @memberof BusinessDetailsResponseV2DTO
     */
    'businessName'?: string;
    /**
     * This field contains the business registration number of the entity.
     * @type {string}
     * @memberof BusinessDetailsResponseV2DTO
     */
    'businessRegistrationNumber'?: string;
    /**
     * This field contains the legal entity type of the business.
     * @type {string}
     * @memberof BusinessDetailsResponseV2DTO
     */
    'businessType'?: string;
    /**
     * This field contains the  description of the business details
     * @type {string}
     * @memberof BusinessDetailsResponseV2DTO
     */
    'description'?: string;
    /**
     * This is an array which contains the document details.
     * @type {Array<CorporateDocumentDetails2DTO>}
     * @memberof BusinessDetailsResponseV2DTO
     */
    'documentDetails'?: Array<CorporateDocumentDetails2DTO>;
    /**
     * This field contains the former name.
     * @type {string}
     * @memberof BusinessDetailsResponseV2DTO
     */
    'formerName'?: string;
    /**
     * 
     * @type {LegalDetailsV2}
     * @memberof BusinessDetailsResponseV2DTO
     */
    'legalDetails'?: LegalDetailsV2;
    /**
     * 
     * @type {PartnershipDetails}
     * @memberof BusinessDetailsResponseV2DTO
     */
    'partnershipDetails'?: PartnershipDetails;
    /**
     * This field contains the  reference id of the entity
     * @type {string}
     * @memberof BusinessDetailsResponseV2DTO
     */
    'referenceId'?: string;
    /**
     * 
     * @type {AddressV2}
     * @memberof BusinessDetailsResponseV2DTO
     */
    'registeredAddress'?: AddressV2;
    /**
     * 
     * @type {RegulatoryDetails}
     * @memberof BusinessDetailsResponseV2DTO
     */
    'regulatoryDetails'?: RegulatoryDetails;
    /**
     * 
     * @type {string}
     * @memberof BusinessDetailsResponseV2DTO
     */
    'settlorName'?: string;
    /**
     * 
     * @type {Array<StakeholderV2>}
     * @memberof BusinessDetailsResponseV2DTO
     */
    'stakeholders'?: Array<StakeholderV2>;
    /**
     * 
     * @type {string}
     * @memberof BusinessDetailsResponseV2DTO
     */
    'stockSymbol'?: string;
    /**
     * This array contains tax details provided during compliance onboarding for EU customers. Otherwise, it contains null.
     * @type {Array<TaxDetailsResponseDTO>}
     * @memberof BusinessDetailsResponseV2DTO
     */
    'taxDetails'?: Array<TaxDetailsResponseDTO>;
    /**
     * This field contains the trading name which is also known as Doing Business As(DBA)(In case the entity is doing business with a different name than the registered business name).
     * @type {string}
     * @memberof BusinessDetailsResponseV2DTO
     */
    'tradeName'?: string;
    /**
     * 
     * @type {string}
     * @memberof BusinessDetailsResponseV2DTO
     */
    'trusteeName'?: string;
    /**
     * 
     * @type {string}
     * @memberof BusinessDetailsResponseV2DTO
     */
    'website'?: string;
}

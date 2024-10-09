/* tslint:disable */
/* eslint-disable */
/**
 * NIUM Platform
 * NIUM Platform
 *
 * The version of the OpenAPI document: 2024.8.20
 * Contact: experience@nium.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { AssociationDetails } from './association-details';
// May contain unused imports in some cases
// @ts-ignore
import type { CorporateAddressDTO } from './corporate-address-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { CorporateDocumentDetailsDTO } from './corporate-document-details-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { PartnershipDetails } from './partnership-details';
// May contain unused imports in some cases
// @ts-ignore
import type { RegulatoryDetails } from './regulatory-details';
// May contain unused imports in some cases
// @ts-ignore
import type { TaxDetails } from './tax-details';

/**
 * 
 * @export
 * @interface BusinessDetailsResponseDTO
 */
export interface BusinessDetailsResponseDTO {
    /**
     * 
     * @type {AssociationDetails}
     * @memberof BusinessDetailsResponseDTO
     */
    'associationDetail'?: AssociationDetails;
    /**
     * 
     * @type {CorporateAddressDTO}
     * @memberof BusinessDetailsResponseDTO
     */
    'businessAddress'?: CorporateAddressDTO;
    /**
     * This field contains business extract covered stakeholder which specifies if the business extract document given covers the stakeholder details. The value for this field can be either Yes or No.
     * @type {string}
     * @memberof BusinessDetailsResponseDTO
     */
    'businessExtractCoveredStakeholder'?: string;
    /**
     * This field contains the business name of the entity.
     * @type {string}
     * @memberof BusinessDetailsResponseDTO
     */
    'businessName'?: string;
    /**
     * This field contains the business registration number of the entity.
     * @type {string}
     * @memberof BusinessDetailsResponseDTO
     */
    'businessRegistrationNumber'?: string;
    /**
     * This field contains the business registration number type.
     * @type {string}
     * @memberof BusinessDetailsResponseDTO
     */
    'businessRegistrationType'?: string;
    /**
     * This field contains the legal entity type of the business.
     * @type {string}
     * @memberof BusinessDetailsResponseDTO
     */
    'businessType'?: string;
    /**
     * This field contains the case ID of the corporate customer.
     * @type {string}
     * @memberof BusinessDetailsResponseDTO
     */
    'caseId'?: string;
    /**
     * This field contains the client ID of the corporate customer.
     * @type {string}
     * @memberof BusinessDetailsResponseDTO
     */
    'clientId'?: string;
    /**
     * This field contains the compliance region of the customer.
     * @type {string}
     * @memberof BusinessDetailsResponseDTO
     */
    'complianceRegion'?: string;
    /**
     * This field accepts the description of the business for the corporate customer.
     * @type {string}
     * @memberof BusinessDetailsResponseDTO
     */
    'description'?: string;
    /**
     * This is an array which contains the document details.
     * @type {Array<CorporateDocumentDetailsDTO>}
     * @memberof BusinessDetailsResponseDTO
     */
    'documentDetails'?: Array<CorporateDocumentDetailsDTO>;
    /**
     * This field contains the former name.
     * @type {string}
     * @memberof BusinessDetailsResponseDTO
     */
    'formerName'?: string;
    /**
     * This field contains the name of the legislation under which the corporate entity being onboarded was formed.
     * @type {string}
     * @memberof BusinessDetailsResponseDTO
     */
    'legislationName'?: string;
    /**
     * This field contains the type of the legislation under which the corporate entity being onboarded was formed. The possible values are:  Established under Commonwealth legislation Established under State Territory legislation Other
     * @type {string}
     * @memberof BusinessDetailsResponseDTO
     */
    'legislationType'?: string;
    /**
     * This field contains the exchange where the company got listed.
     * @type {string}
     * @memberof BusinessDetailsResponseDTO
     */
    'listedExchange'?: string;
    /**
     * 
     * @type {PartnershipDetails}
     * @memberof BusinessDetailsResponseDTO
     */
    'partnershipDetails'?: PartnershipDetails;
    /**
     * This field contains the reference ID of the entity
     * @type {string}
     * @memberof BusinessDetailsResponseDTO
     */
    'referenceId'?: string;
    /**
     * 
     * @type {CorporateAddressDTO}
     * @memberof BusinessDetailsResponseDTO
     */
    'registeredAddress'?: CorporateAddressDTO;
    /**
     * This field contains the 2-letter [ISO Alpha-2 country code](doc:currency-and-country-codes) where business is registered.
     * @type {string}
     * @memberof BusinessDetailsResponseDTO
     */
    'registeredCountry'?: string;
    /**
     * This field contains the business registration date.
     * @type {string}
     * @memberof BusinessDetailsResponseDTO
     */
    'registeredDate'?: string;
    /**
     * 
     * @type {RegulatoryDetails}
     * @memberof BusinessDetailsResponseDTO
     */
    'regulatoryDetails'?: RegulatoryDetails;
    /**
     * 
     * @type {string}
     * @memberof BusinessDetailsResponseDTO
     */
    'settlorName'?: string;
    /**
     * 
     * @type {string}
     * @memberof BusinessDetailsResponseDTO
     */
    'stockSymbol'?: string;
    /**
     * This array contains tax details provided during compliance onboarding for EU customers. Otherwise, it contains null.
     * @type {Array<TaxDetails>}
     * @memberof BusinessDetailsResponseDTO
     */
    'taxDetails'?: Array<TaxDetails>;
    /**
     * This field contains the trading name which is also known as Doing Business As(DBA)(In case the entity is doing business with a different name than the registered business name).
     * @type {string}
     * @memberof BusinessDetailsResponseDTO
     */
    'tradeName'?: string;
    /**
     * 
     * @type {string}
     * @memberof BusinessDetailsResponseDTO
     */
    'trusteeName'?: string;
    /**
     * This field contains the website of the company.
     * @type {string}
     * @memberof BusinessDetailsResponseDTO
     */
    'website'?: string;
}


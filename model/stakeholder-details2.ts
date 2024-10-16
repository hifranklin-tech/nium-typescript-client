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
import type { ContactDetails } from './contact-details';
// May contain unused imports in some cases
// @ts-ignore
import type { ProductAddress } from './product-address';
// May contain unused imports in some cases
// @ts-ignore
import type { ProductDocumentDetail } from './product-document-detail';
// May contain unused imports in some cases
// @ts-ignore
import type { ProductProfessionalDetails } from './product-professional-details';
// May contain unused imports in some cases
// @ts-ignore
import type { ProductTaxDetails } from './product-tax-details';

/**
 * 
 * @export
 * @interface StakeholderDetails2
 */
export interface StakeholderDetails2 {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof StakeholderDetails2
     */
    'additionalInfo'?: { [key: string]: string; };
    /**
     * 
     * @type {ProductAddress}
     * @memberof StakeholderDetails2
     */
    'address'?: ProductAddress;
    /**
     * 
     * @type {string}
     * @memberof StakeholderDetails2
     */
    'birthCountry'?: string;
    /**
     * 
     * @type {ContactDetails}
     * @memberof StakeholderDetails2
     */
    'contactDetails'?: ContactDetails;
    /**
     * This field accepts the date of birth of the stakeholder.
     * @type {string}
     * @memberof StakeholderDetails2
     */
    'dateOfBirth'?: string;
    /**
     * 
     * @type {ProductDocumentDetail}
     * @memberof StakeholderDetails2
     */
    'documentDetails'?: ProductDocumentDetail;
    /**
     * This field accepts the first name of the stakeholder.
     * @type {string}
     * @memberof StakeholderDetails2
     */
    'firstName'?: string;
    /**
     * This field accepts the gender of the stakeholder. The acceptable values are: Male Female
     * @type {string}
     * @memberof StakeholderDetails2
     */
    'gender'?: string;
    /**
     * 
     * @type {string}
     * @memberof StakeholderDetails2
     */
    'isPrimaryApplicant'?: string;
    /**
     * This field accepts the last name of the stakeholder.
     * @type {string}
     * @memberof StakeholderDetails2
     */
    'lastName'?: string;
    /**
     * This field accepts the middle name of the stakeholder.
     * @type {string}
     * @memberof StakeholderDetails2
     */
    'middleName'?: string;
    /**
     * This field accepts the [2-letter ISO Alpha-2 country code](doc:currency-and-country-codes) for the nationality of the stakeholder.
     * @type {string}
     * @memberof StakeholderDetails2
     */
    'nationality'?: string;
    /**
     * This array accepts the professional details of the stakeholder.
     * @type {Array<ProductProfessionalDetails>}
     * @memberof StakeholderDetails2
     */
    'professionalDetails'?: Array<ProductProfessionalDetails>;
    /**
     * 
     * @type {string}
     * @memberof StakeholderDetails2
     */
    'sourceOfFunds'?: string;
    /**
     * This an array which accepts the tax details.
     * @type {Array<ProductTaxDetails>}
     * @memberof StakeholderDetails2
     */
    'taxDetails'?: Array<ProductTaxDetails>;
    /**
     * 
     * @type {string}
     * @memberof StakeholderDetails2
     */
    'title'?: string;
}


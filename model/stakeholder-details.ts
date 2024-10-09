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
 * @interface StakeholderDetails
 */
export interface StakeholderDetails {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof StakeholderDetails
     */
    'additionalInfo'?: { [key: string]: string; };
    /**
     * 
     * @type {ProductAddress}
     * @memberof StakeholderDetails
     */
    'address'?: ProductAddress;
    /**
     * This field accepts the birth country name of the stakeholder.  AU: NA EU: Required UK: NA SG: NA
     * @type {string}
     * @memberof StakeholderDetails
     */
    'birthCountry'?: string;
    /**
     * 
     * @type {ContactDetails}
     * @memberof StakeholderDetails
     */
    'contactDetails'?: ContactDetails;
    /**
     * This field accepts the date of birth of the stakeholder in yyyy-MM-dd format.  AU: Optional EU: Required UK: Required SG: Required
     * @type {string}
     * @memberof StakeholderDetails
     */
    'dateOfBirth'?: string;
    /**
     * This array accepts the document details for the stakeholder. This field is required only if the documents are being uploaded.  AU: Optional EU: Conditional UK: Optional SG: Optional
     * @type {Array<ProductDocumentDetail>}
     * @memberof StakeholderDetails
     */
    'documentDetails'?: Array<ProductDocumentDetail>;
    /**
     * This field contains the first name of the stakeholder.  AU: Optional EU: Required UK: Required SG: Required
     * @type {string}
     * @memberof StakeholderDetails
     */
    'firstName'?: string;
    /**
     * This field accepts the gender of the stakeholder. The acceptable values are: Male Female  AU: Optional EU: NA UK: NA SG: NA
     * @type {string}
     * @memberof StakeholderDetails
     */
    'gender'?: string;
    /**
     * This object accepts the desired mode to do the KYC of the individual stakeholder.  AU: Optional EU: Required UK: Required SG: Required
     * @type {string}
     * @memberof StakeholderDetails
     */
    'kycMode'?: string;
    /**
     * This field contains the last name of the stakeholder.  AU: Optional EU: Required UK: Required SG: Required
     * @type {string}
     * @memberof StakeholderDetails
     */
    'lastName'?: string;
    /**
     * This field contains the middle name of the stakeholder.  AU: Optional EU: Optional UK: Optional SG: Optional
     * @type {string}
     * @memberof StakeholderDetails
     */
    'middleName'?: string;
    /**
     * This field accepts the 2-letter [ISO Alpha-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf) for the nationality of the stakeholder.  AU: Optional EU: Required UK: Required SG: Required
     * @type {string}
     * @memberof StakeholderDetails
     */
    'nationality'?: string;
    /**
     * This array accepts the professional details of the stakeholder.  AU: Optional EU: Required UK: Required SG: Required
     * @type {Array<ProductProfessionalDetails>}
     * @memberof StakeholderDetails
     */
    'professionalDetails'?: Array<ProductProfessionalDetails>;
    /**
     * This array accepts the tax details.  AU: NA EU: Required UK: NA SG: NA
     * @type {Array<ProductTaxDetails>}
     * @memberof StakeholderDetails
     */
    'taxDetails'?: Array<ProductTaxDetails>;
}


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
import type { CorporateAddress } from './corporate-address';
// May contain unused imports in some cases
// @ts-ignore
import type { CorporateContactDetails } from './corporate-contact-details';
// May contain unused imports in some cases
// @ts-ignore
import type { CorporateDocumentDetail } from './corporate-document-detail';
// May contain unused imports in some cases
// @ts-ignore
import type { CorporateProfessionalDetails } from './corporate-professional-details';

/**
 * This object accepts further details for the stakeholder of the new corporate entity to be onboarded. This object and the items inside are required in case entity type of stakeholder is INDIVIDUAL  AU: Optional EU: Required UK: Required SG: Required
 * @export
 * @interface CorporateStakeholderDetails
 */
export interface CorporateStakeholderDetails {
    /**
     * 
     * @type {CorporateAddress}
     * @memberof CorporateStakeholderDetails
     */
    'address'?: CorporateAddress;
    /**
     * 
     * @type {CorporateContactDetails}
     * @memberof CorporateStakeholderDetails
     */
    'contactDetails'?: CorporateContactDetails;
    /**
     * This field accepts the date of birth of the stakeholder in yyyy-MM-dd format.
     * @type {string}
     * @memberof CorporateStakeholderDetails
     */
    'dateOfBirth'?: string;
    /**
     * This array accepts the document details for the stakeholder. This field is required only if the documents are being uploaded.
     * @type {Array<CorporateDocumentDetail>}
     * @memberof CorporateStakeholderDetails
     */
    'documentDetails'?: Array<CorporateDocumentDetail>;
    /**
     * This field contains the first name of the stakeholder.
     * @type {string}
     * @memberof CorporateStakeholderDetails
     */
    'firstName'?: string;
    /**
     * This field contains the last name of the stakeholder.
     * @type {string}
     * @memberof CorporateStakeholderDetails
     */
    'lastName'?: string;
    /**
     * This field contains the middle name of the stakeholder.
     * @type {string}
     * @memberof CorporateStakeholderDetails
     */
    'middleName'?: string;
    /**
     * This field accepts the 2-letter [ISO Alpha-2 country code](doc:currency-and-country-codes) for the nationality of the stakeholder.
     * @type {string}
     * @memberof CorporateStakeholderDetails
     */
    'nationality'?: string;
    /**
     * This array accepts the professional details of the stakeholder.
     * @type {Array<CorporateProfessionalDetails>}
     * @memberof CorporateStakeholderDetails
     */
    'professionalDetails'?: Array<CorporateProfessionalDetails>;
}


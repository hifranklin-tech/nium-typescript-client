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
import type { CorporateAddresses } from './corporate-addresses';
// May contain unused imports in some cases
// @ts-ignore
import type { CorporateLegalDetails } from './corporate-legal-details';
// May contain unused imports in some cases
// @ts-ignore
import type { CorporateStakeholders } from './corporate-stakeholders';

/**
 * 
 * @export
 * @interface CorporateBusinessDetails
 */
export interface CorporateBusinessDetails {
    /**
     * This object accepts additional information about the business. Acceptable fields are `isSameBusinessAddress` (for all regions), `searchId` (for EU, SG, UK), and `businessExtractCoveredStakeholder` (for EU). Acceptable values for all the above fields are `Yes` and `No`.
     * @type {{ [key: string]: string; }}
     * @memberof CorporateBusinessDetails
     */
    'additionalInfo'?: { [key: string]: string; };
    /**
     * 
     * @type {CorporateAddresses}
     * @memberof CorporateBusinessDetails
     */
    'addresses'?: CorporateAddresses;
    /**
     * This field contains the name of a business.
     * @type {string}
     * @memberof CorporateBusinessDetails
     */
    'businessName'?: string;
    /**
     * This field accepts the business registration number of the new corporate entity to be onboarded.
     * @type {string}
     * @memberof CorporateBusinessDetails
     */
    'businessRegistrationNumber'?: string;
    /**
     * 
     * @type {CorporateLegalDetails}
     * @memberof CorporateBusinessDetails
     */
    'legalDetails'?: CorporateLegalDetails;
    /**
     * This array accepts the stakeholder details for the new corporate entity to be onboarded.
     * @type {Array<CorporateStakeholders>}
     * @memberof CorporateBusinessDetails
     */
    'stakeholders'?: Array<CorporateStakeholders>;
    /**
     * This field accepts the business website link of the new corporate entity to be onboarded.
     * @type {string}
     * @memberof CorporateBusinessDetails
     */
    'website'?: string;
}


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
import { BusinessPartner2 } from './business-partner2';
// May contain unused imports in some cases
// @ts-ignore
import { StakeholderDetails2 } from './stakeholder-details2';

/**
 * 
 * @export
 * @interface Stakeholders2
 */
export interface Stakeholders2 {
    /**
     * 
     * @type {BusinessPartner2}
     * @memberof Stakeholders2
     */
    'businessPartner'?: BusinessPartner2;
    /**
     * 
     * @type {string}
     * @memberof Stakeholders2
     */
    'entityType'?: string;
    /**
     * This is the reference Id of the stakeholder for which the RFI is raised.
     * @type {string}
     * @memberof Stakeholders2
     */
    'referenceId'?: string;
    /**
     * 
     * @type {StakeholderDetails2}
     * @memberof Stakeholders2
     */
    'stakeholderDetails'?: StakeholderDetails2;
}

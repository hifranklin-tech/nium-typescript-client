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
import { BusinessDetails } from './business-details';
// May contain unused imports in some cases
// @ts-ignore
import { ProductCustomerTagDTO } from './product-customer-tag-dto';
// May contain unused imports in some cases
// @ts-ignore
import { RiskAssessmentInfo } from './risk-assessment-info';

/**
 * 
 * @export
 * @interface CorporateCustomerRequestsDTO
 */
export interface CorporateCustomerRequestsDTO {
    /**
     * This object contains the user defined key-value pairs provided by the client. The maximum number of tags allowed is 15.  AU: Optional EU: Optional UK: Optional SG: Optional
     * @type {Array<ProductCustomerTagDTO>}
     * @memberof CorporateCustomerRequestsDTO
     */
    'tags'?: Array<ProductCustomerTagDTO>;
    /**
     * This field accepts the authentication code generated as part of SCA (Strong Customer Authentication). Note: : Authentication code must be passed if regulatory region of the program is UK or EU. Otherwise, do not use this field and do not pass any value.
     * @type {string}
     * @memberof CorporateCustomerRequestsDTO
     */
    'authenticationCode'?: string;
    /**
     * 
     * @type {BusinessDetails}
     * @memberof CorporateCustomerRequestsDTO
     */
    'businessDetails'?: BusinessDetails;
    /**
     * This field accepts the NIUM client Id of the customer. This field should be provided only while performing the re-initiate KYB process.  AU: Optional EU: Optional UK: Optional SG: Optional
     * @type {string}
     * @memberof CorporateCustomerRequestsDTO
     */
    'clientId'?: string;
    /**
     * This field accepts the unique customer identifier generated at the time of customer creation. It is received in the response of the previously executed Onboard Customer API. This field should be provided only while performing the re-initiate KYB process.  AU: Optional EU: Optional UK: Optional SG: Optional
     * @type {string}
     * @memberof CorporateCustomerRequestsDTO
     */
    'customerHashId'?: string;
    /**
     * This field accepts the region code for which onboarding has been triggered. The acceptable value are: AU EU UK SG  AU: Required EU: Required UK: Required SG: Required
     * @type {string}
     * @memberof CorporateCustomerRequestsDTO
     */
    'region'?: string;
    /**
     * 
     * @type {RiskAssessmentInfo}
     * @memberof CorporateCustomerRequestsDTO
     */
    'riskAssessmentInfo'?: RiskAssessmentInfo;
}

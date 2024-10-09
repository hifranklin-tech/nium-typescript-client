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
import type { BusinessDetails2 } from './business-details2';
// May contain unused imports in some cases
// @ts-ignore
import type { ExpectedAccountUsage } from './expected-account-usage';
// May contain unused imports in some cases
// @ts-ignore
import type { RiskAssessmentInfo } from './risk-assessment-info';

/**
 * 
 * @export
 * @interface ProductRfiResponseRequest
 */
export interface ProductRfiResponseRequest {
    /**
     * 
     * @type {BusinessDetails2}
     * @memberof ProductRfiResponseRequest
     */
    'businessInfo'?: BusinessDetails2;
    /**
     * 
     * @type {ExpectedAccountUsage}
     * @memberof ProductRfiResponseRequest
     */
    'expectedAccountUsage'?: ExpectedAccountUsage;
    /**
     * This field accepts the RFI template ID as received in [Fetch Corporate Customer RFI Details](ref:fetchcorporatecustomerrfidetails) API.
     * @type {string}
     * @memberof ProductRfiResponseRequest
     */
    'rfiTemplateId'?: string;
    /**
     * 
     * @type {RiskAssessmentInfo}
     * @memberof ProductRfiResponseRequest
     */
    'riskAssessmentInfo'?: RiskAssessmentInfo;
}


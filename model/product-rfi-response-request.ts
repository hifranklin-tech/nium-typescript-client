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
import { BusinessDetails2 } from './business-details2';
// May contain unused imports in some cases
// @ts-ignore
import { RiskAssessmentInfo } from './risk-assessment-info';

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


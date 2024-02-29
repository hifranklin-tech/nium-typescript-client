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



/**
 * This object contains the risk assessment information.
 * @export
 * @interface CorporateRiskAssessmentInfo
 */
export interface CorporateRiskAssessmentInfo {
    /**
     * This field accepts the annual turnover for the corporate entity to be onboarded. Refer to the [Glossary of Annual Turnover](https://docs.nium.com/baas/onboard-corporate-customer#glossary-of-annual-turnover): for the applicable values.
     * @type {string}
     * @memberof CorporateRiskAssessmentInfo
     */
    'annualTurnover'?: string;
    /**
     * This field accepts the total number of employees for the corporate entity to be onboarded.
     * @type {string}
     * @memberof CorporateRiskAssessmentInfo
     */
    'totalEmployees'?: string;
}


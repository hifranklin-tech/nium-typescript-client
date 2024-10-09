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



/**
 * 
 * @export
 * @interface RiskAssessmentInfoV2
 */
export interface RiskAssessmentInfoV2 {
    /**
     * 
     * @type {string}
     * @memberof RiskAssessmentInfoV2
     */
    'annualTurnover'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RiskAssessmentInfoV2
     */
    'countryOfOperation'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof RiskAssessmentInfoV2
     */
    'industrySector'?: string;
    /**
     * 
     * @type {string}
     * @memberof RiskAssessmentInfoV2
     */
    'intendedUseOfAccount'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RiskAssessmentInfoV2
     */
    'ofacLicencePresent'?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof RiskAssessmentInfoV2
     */
    'restrictedCountries'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof RiskAssessmentInfoV2
     */
    'totalEmployees'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RiskAssessmentInfoV2
     */
    'transactionCountries'?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof RiskAssessmentInfoV2
     */
    'travelRestrictedCountry'?: boolean;
}


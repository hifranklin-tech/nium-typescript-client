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
import { BusinessDetailsResponseV2DTO } from './business-details-response-v2-dto';
// May contain unused imports in some cases
// @ts-ignore
import { RiskAssessmentInfoV2 } from './risk-assessment-info-v2';

/**
 * 
 * @export
 * @interface CorporateCustomerResponseDTO
 */
export interface CorporateCustomerResponseDTO {
    /**
     * 
     * @type {BusinessDetailsResponseV2DTO}
     * @memberof CorporateCustomerResponseDTO
     */
    'businessDetails'?: BusinessDetailsResponseV2DTO;
    /**
     * This field shows the compliance case Id of the customer.
     * @type {string}
     * @memberof CorporateCustomerResponseDTO
     */
    'caseId'?: string;
    /**
     * This field shows the NIUM client Id of the customer. This field should be provided only while performing the re-initiate KYB process.  AU: Optional EU: Optional UK: Optional SG: Optional
     * @type {string}
     * @memberof CorporateCustomerResponseDTO
     */
    'clientId'?: string;
    /**
     * This field shows the region code for which onboarding has been triggered. The acceptable value are: AU EU UK SG  AU: Required EU: Required UK: Required SG: Required
     * @type {string}
     * @memberof CorporateCustomerResponseDTO
     */
    'complianceRegion'?: string;
    /**
     * 
     * @type {RiskAssessmentInfoV2}
     * @memberof CorporateCustomerResponseDTO
     */
    'riskAssessmentInfo'?: RiskAssessmentInfoV2;
}


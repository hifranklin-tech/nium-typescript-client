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
import { ComplianceIdentificationDocDTO } from './compliance-identification-doc-dto';

/**
 * 
 * @export
 * @interface ComplianceDocumentDTO
 */
export interface ComplianceDocumentDTO {
    /**
     * This field is an array which accepts document objects. Total size of the array should be less than 10 MB.
     * @type {Array<ComplianceIdentificationDocDTO>}
     * @memberof ComplianceDocumentDTO
     */
    'identificationDoc'?: Array<ComplianceIdentificationDocDTO>;
}

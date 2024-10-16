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
import type { DocumentDetail } from './document-detail';

/**
 * 
 * @export
 * @interface CorporateDocumentUploadApplicantDetailsDTO
 */
export interface CorporateDocumentUploadApplicantDetailsDTO {
    /**
     * 
     * @type {Array<DocumentDetail>}
     * @memberof CorporateDocumentUploadApplicantDetailsDTO
     */
    'documentDetails'?: Array<DocumentDetail>;
    /**
     * This field accepts the unique reference ID for the applicant of the business entity.
     * @type {string}
     * @memberof CorporateDocumentUploadApplicantDetailsDTO
     */
    'referenceId'?: string;
}


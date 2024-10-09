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
import type { RfiResponseRequest } from './rfi-response-request';

/**
 * 
 * @export
 * @interface UploadRfiDocumentRequestDto
 */
export interface UploadRfiDocumentRequestDto {
    /**
     * This field accepts the additional requests for information, depending upon documents required to raise RFI
     * @type {Array<RfiResponseRequest>}
     * @memberof UploadRfiDocumentRequestDto
     */
    'rfiResponseRequest': Array<RfiResponseRequest>;
}


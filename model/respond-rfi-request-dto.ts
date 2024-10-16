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
import type { ProductRfiResponseRequest } from './product-rfi-response-request';

/**
 * 
 * @export
 * @interface RespondRfiRequestDTO
 */
export interface RespondRfiRequestDTO {
    /**
     * This field accepts the compliance case Id of the customer.
     * @type {string}
     * @memberof RespondRfiRequestDTO
     */
    'caseId'?: string;
    /**
     * This field accepts the NIUM client Id of the customer.
     * @type {string}
     * @memberof RespondRfiRequestDTO
     */
    'clientId'?: string;
    /**
     * This field contains the unique customer identifier generated at the time of customer creation.
     * @type {string}
     * @memberof RespondRfiRequestDTO
     */
    'customerHashId'?: string;
    /**
     * This field accepts the region code for which onboarding has been triggered.
     * @type {string}
     * @memberof RespondRfiRequestDTO
     */
    'region'?: string;
    /**
     * This is an array which accepts the requests for information, depending upon documents required to raise RFI.
     * @type {Array<ProductRfiResponseRequest>}
     * @memberof RespondRfiRequestDTO
     */
    'rfiResponseRequest'?: Array<ProductRfiResponseRequest>;
}


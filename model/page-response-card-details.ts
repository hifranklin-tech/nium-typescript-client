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
import { CardDetails } from './card-details';

/**
 * 
 * @export
 * @interface PageResponseCardDetails
 */
export interface PageResponseCardDetails {
    /**
     * 
     * @type {Array<CardDetails>}
     * @memberof PageResponseCardDetails
     */
    'content'?: Array<CardDetails>;
    /**
     * 
     * @type {number}
     * @memberof PageResponseCardDetails
     */
    'totalElements'?: number;
    /**
     * 
     * @type {number}
     * @memberof PageResponseCardDetails
     */
    'totalPages'?: number;
}


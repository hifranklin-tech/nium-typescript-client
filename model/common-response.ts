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
import { ErrorCodeMapping } from './error-code-mapping';

/**
 * 
 * @export
 * @interface CommonResponse
 */
export interface CommonResponse {
    /**
     * 
     * @type {string}
     * @memberof CommonResponse
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonResponse
     */
    'message'?: string;
    /**
     * 
     * @type {Array<ErrorCodeMapping>}
     * @memberof CommonResponse
     */
    'errorDetails'?: Array<ErrorCodeMapping>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CommonResponse
     */
    'errors'?: Array<string>;
}


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
import type { ErrorCodeMapping } from './error-code-mapping';

/**
 * 
 * @export
 * @interface ApplicationCommonResponse
 */
export interface ApplicationCommonResponse {
    /**
     * application status of application
     * @type {string}
     * @memberof ApplicationCommonResponse
     */
    'applicationStatus'?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationCommonResponse
     */
    'message'?: string;
    /**
     * 
     * @type {Array<ErrorCodeMapping>}
     * @memberof ApplicationCommonResponse
     */
    'errorDetails'?: Array<ErrorCodeMapping>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApplicationCommonResponse
     */
    'errors'?: Array<string>;
}


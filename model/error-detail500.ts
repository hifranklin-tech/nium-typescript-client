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
import { ErrorCodes500 } from './error-codes500';

/**
 * error details description
 * @export
 * @interface ErrorDetail500
 */
export interface ErrorDetail500 {
    /**
     * 
     * @type {ErrorCodes500}
     * @memberof ErrorDetail500
     */
    'code'?: ErrorCodes500;
    /**
     * Description of the error.
     * @type {string}
     * @memberof ErrorDetail500
     */
    'description'?: string;
}




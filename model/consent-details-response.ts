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
import { Consent } from './consent';
// May contain unused imports in some cases
// @ts-ignore
import { Payment } from './payment';

/**
 * 
 * @export
 * @interface ConsentDetailsResponse
 */
export interface ConsentDetailsResponse {
    /**
     * 
     * @type {Consent}
     * @memberof ConsentDetailsResponse
     */
    'consent'?: Consent;
    /**
     * Id of the consent to retrieve.
     * @type {string}
     * @memberof ConsentDetailsResponse
     */
    'id'?: string;
    /**
     * 
     * @type {Payment}
     * @memberof ConsentDetailsResponse
     */
    'payment'?: Payment;
}


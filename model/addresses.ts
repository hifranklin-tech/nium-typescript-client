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
import { BusinessAddress } from './business-address';
// May contain unused imports in some cases
// @ts-ignore
import { RegisteredAddress } from './registered-address';

/**
 * 
 * @export
 * @interface Addresses
 */
export interface Addresses {
    /**
     * 
     * @type {BusinessAddress}
     * @memberof Addresses
     */
    'businessAddress'?: BusinessAddress;
    /**
     * 
     * @type {RegisteredAddress}
     * @memberof Addresses
     */
    'registeredAddress'?: RegisteredAddress;
}


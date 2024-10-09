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
import type { URL } from './url';

/**
 * 
 * @export
 * @interface Resource
 */
export interface Resource {
    /**
     * 
     * @type {string}
     * @memberof Resource
     */
    'description'?: string;
    /**
     * 
     * @type {any}
     * @memberof Resource
     */
    'file'?: any;
    /**
     * 
     * @type {string}
     * @memberof Resource
     */
    'filename'?: string;
    /**
     * 
     * @type {object}
     * @memberof Resource
     */
    'inputStream'?: object;
    /**
     * 
     * @type {boolean}
     * @memberof Resource
     */
    'open'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Resource
     */
    'readable'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Resource
     */
    'uri'?: string;
    /**
     * 
     * @type {URL}
     * @memberof Resource
     */
    'url'?: URL;
}


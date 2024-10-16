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



/**
 * 
 * @export
 * @interface PayoutClientCustomTagDTO
 */
export interface PayoutClientCustomTagDTO {
    /**
     * This field accepts the Client\'s custom key of the tag. The maximum key length limit is 128 characters.
     * @type {string}
     * @memberof PayoutClientCustomTagDTO
     */
    'key'?: string;
    /**
     * This field accepts the Client\'s custom value of the tag. The maximum value length limit is 256 characters.
     * @type {string}
     * @memberof PayoutClientCustomTagDTO
     */
    'value'?: string;
}


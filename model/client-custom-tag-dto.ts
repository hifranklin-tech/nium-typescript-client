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



/**
 * 
 * @export
 * @interface ClientCustomTagDTO
 */
export interface ClientCustomTagDTO {
    /**
     * This field accepts the Client\'s custom key of the tag. The maximum key length limit is 128 characters.
     * @type {string}
     * @memberof ClientCustomTagDTO
     */
    'key'?: string;
    /**
     * This field accepts the Client\'s custom value of the tag. The maximum value length limit is 256 characters.
     * @type {string}
     * @memberof ClientCustomTagDTO
     */
    'value'?: string;
}


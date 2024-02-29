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
 * @interface AddCardV2ResponseDTO
 */
export interface AddCardV2ResponseDTO {
    /**
     * Unique card identifier generated while new/add-on card issuance.
     * @type {string}
     * @memberof AddCardV2ResponseDTO
     */
    'cardHashId'?: string;
    /**
     * Card activation status values are VIRTUAL_ACTIVE and INACTIVE
     * @type {string}
     * @memberof AddCardV2ResponseDTO
     */
    'cardActivationStatus'?: string;
}

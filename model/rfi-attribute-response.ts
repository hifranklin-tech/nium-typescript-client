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
 * @interface RfiAttributeResponse
 */
export interface RfiAttributeResponse {
    /**
     * This field contains the field label for the RFI.
     * @type {string}
     * @memberof RfiAttributeResponse
     */
    'label'?: string;
    /**
     * This field contains the field type. The possible values are data or document.
     * @type {string}
     * @memberof RfiAttributeResponse
     */
    'type'?: string;
    /**
     * This field contains the field value for the RFI. This will be used while responding to transaction RFI.
     * @type {string}
     * @memberof RfiAttributeResponse
     */
    'value'?: string;
}


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
 * @interface RequiredFields
 */
export interface RequiredFields {
    /**
     * This field contains the label of the field for which the RFI is raised.
     * @type {string}
     * @memberof RequiredFields
     */
    'fieldLabel'?: string;
    /**
     * This field contains the field value for which the RFI is raised.
     * @type {string}
     * @memberof RequiredFields
     */
    'fieldValue'?: string;
    /**
     * This field contains the type for which the RFI is raised. The possible values are: data document
     * @type {string}
     * @memberof RequiredFields
     */
    'type'?: string;
}


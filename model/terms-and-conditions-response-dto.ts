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
 * @interface TermsAndConditionsResponseDTO
 */
export interface TermsAndConditionsResponseDTO {
    /**
     * This field contains the date and time of the TnC version creation.
     * @type {string}
     * @memberof TermsAndConditionsResponseDTO
     */
    'createdAt'?: string;
    /**
     * This field contains the HTML format of the TnC.
     * @type {string}
     * @memberof TermsAndConditionsResponseDTO
     */
    'description'?: string;
    /**
     * This field contains the name of the TnC to be presented to the customer.
     * @type {string}
     * @memberof TermsAndConditionsResponseDTO
     */
    'name'?: string;
    /**
     * This field contains the version number of the TnC.
     * @type {string}
     * @memberof TermsAndConditionsResponseDTO
     */
    'versionId'?: string;
}


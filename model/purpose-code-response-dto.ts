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
 * @interface PurposeCodeResponseDTO
 */
export interface PurposeCodeResponseDTO {
    /**
     * This field contains the description of the purpose of transfer.
     * @type {string}
     * @memberof PurposeCodeResponseDTO
     */
    'description'?: string;
    /**
     * This field contains the purpose code for the remittance transaction. Refer to the [Glossary of Purpose Codes](doc:purpose-of-transfer-codes) for the list of possible values.
     * @type {string}
     * @memberof PurposeCodeResponseDTO
     */
    'purposeCode'?: string;
}


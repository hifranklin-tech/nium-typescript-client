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
 * @interface TaxDetailsResponseDTO
 */
export interface TaxDetailsResponseDTO {
    /**
     * This field accepts the country of residence of the customer, for example, \"France\". Note: This field is mandatory for EU and UK.
     * @type {string}
     * @memberof TaxDetailsResponseDTO
     */
    'country': string;
    /**
     * This field accepts the tax ID number of the customer, for example, \"FR123456\". Note: This field is mandatory for EU and UK.
     * @type {string}
     * @memberof TaxDetailsResponseDTO
     */
    'taxNumber': string;
}


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
 * @interface ProductProfessionalDetails
 */
export interface ProductProfessionalDetails {
    /**
     * This field accepts the position. Use the [Fetch Corporate Constants API](ref:fetchcorporateconstants) to get the list of valid enum values.
     * @type {string}
     * @memberof ProductProfessionalDetails
     */
    'position'?: string;
    /**
     * This field accepts the end date of the position.
     * @type {string}
     * @memberof ProductProfessionalDetails
     */
    'positionEndDate'?: string;
    /**
     * This field accepts the start date of the position.
     * @type {string}
     * @memberof ProductProfessionalDetails
     */
    'positionStartDate'?: string;
    /**
     * This field accepts the percentage of shares held. Enter a number between 0 to 100.
     * @type {string}
     * @memberof ProductProfessionalDetails
     */
    'sharePercentage'?: string;
}


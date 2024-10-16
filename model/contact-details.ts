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
 * @interface ContactDetails
 */
export interface ContactDetails {
    /**
     * This field accepts the contact number of the applicant.
     * @type {string}
     * @memberof ContactDetails
     */
    'contactNo'?: string;
    /**
     * This field accepts the 2 letter country code of the applicant. Use the [Fetch Corporate Constants API](ref:fetchcorporateconstantsusingget) to get the list of valid country codes.
     * @type {string}
     * @memberof ContactDetails
     */
    'countryCode'?: string;
    /**
     * This field accepts the email of the applicant.
     * @type {string}
     * @memberof ContactDetails
     */
    'email'?: string;
}


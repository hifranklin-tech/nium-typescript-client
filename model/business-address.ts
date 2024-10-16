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
 * This object accepts the business address details for the new corporate entity to be onboarded. This field is required in case the principal place of business is different than the registered address that is when the isSameBusinessAddress is No.
 * @export
 * @interface BusinessAddress
 */
export interface BusinessAddress {
    /**
     * This field contains the address line 1 of the business address.
     * @type {string}
     * @memberof BusinessAddress
     */
    'addressLine1'?: string;
    /**
     * This field contains the address line 2 of the business address.
     * @type {string}
     * @memberof BusinessAddress
     */
    'addressLine2'?: string;
    /**
     * This field contains the city name of the business address.
     * @type {string}
     * @memberof BusinessAddress
     */
    'city'?: string;
    /**
     * This field contains the country name of the business address.
     * @type {string}
     * @memberof BusinessAddress
     */
    'country'?: string;
    /**
     * This field contains the postcode of the business address.
     * @type {string}
     * @memberof BusinessAddress
     */
    'postcode'?: string;
    /**
     * This field contains the state name of the business address.
     * @type {string}
     * @memberof BusinessAddress
     */
    'state'?: string;
}


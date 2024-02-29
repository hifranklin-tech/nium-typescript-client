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
 * @interface AddressV2
 */
export interface AddressV2 {
    /**
     * This field stores the address line 1.
     * @type {string}
     * @memberof AddressV2
     */
    'addressLine1'?: string;
    /**
     * This field stores the address line 2
     * @type {string}
     * @memberof AddressV2
     */
    'addressLine2'?: string;
    /**
     * This field stores the city.
     * @type {string}
     * @memberof AddressV2
     */
    'city'?: string;
    /**
     * This field stores the country. Use the [Fetch Corporate Constants API](ref:fetchcorporateconstants) to get the list of valid countries.
     * @type {string}
     * @memberof AddressV2
     */
    'country'?: string;
    /**
     * This field stores the zipCode.
     * @type {string}
     * @memberof AddressV2
     */
    'postCode'?: string;
    /**
     * This field stores the state.
     * @type {string}
     * @memberof AddressV2
     */
    'state'?: string;
}

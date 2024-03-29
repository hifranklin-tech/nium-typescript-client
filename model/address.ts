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
 * @interface Address
 */
export interface Address {
    /**
     * Address line1 field captures the first line of the address, typically including house number, street name, and any unit/apartment number
     * @type {string}
     * @memberof Address
     */
    'addressLine1'?: string;
    /**
     * Address line2 is an optional field for adding extra details to the address.
     * @type {string}
     * @memberof Address
     */
    'addressLine2'?: string;
    /**
     * City field is where the city or town name of the address
     * @type {string}
     * @memberof Address
     */
    'city'?: string;
    /**
     * Country is two-letter ISO2 country code of the address
     * @type {string}
     * @memberof Address
     */
    'country'?: string;
    /**
     * State field is where the name of the state, province, or region should be entered for the address
     * @type {string}
     * @memberof Address
     */
    'state'?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    'zip'?: string;
}


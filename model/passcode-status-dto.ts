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
 * @interface PasscodeStatusDTO
 */
export interface PasscodeStatusDTO {
    /**
     * Unique card identifier generated while new/add-on card issuance.
     * @type {string}
     * @memberof PasscodeStatusDTO
     */
    'cardHashId'?: string;
    /**
     * Passcode enrollment status
     * @type {boolean}
     * @memberof PasscodeStatusDTO
     */
    'passcodeEnrolled'?: boolean;
    /**
     * Passcode enrollment created date and time
     * @type {string}
     * @memberof PasscodeStatusDTO
     */
    'createdDateTime'?: string;
    /**
     * Passcode enrollment updated date and time
     * @type {string}
     * @memberof PasscodeStatusDTO
     */
    'updatedDateTime'?: string;
}


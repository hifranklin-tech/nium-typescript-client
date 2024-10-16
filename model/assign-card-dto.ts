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
 * @interface AssignCardDTO
 */
export interface AssignCardDTO {
    /**
     * This field accepts the 19-digit account number (also known as card proxy number) printed on the non-personalized physical card. Alternately, the leading zeros may also be ignored in which case only the last 16-digits are required. For example, account number can be entered as 0007560010000160875, 007560010000160875, 07560010000160875 or 7560010000160875
     * @type {string}
     * @memberof AssignCardDTO
     */
    'accountNumber': string;
    /**
     * This field accepts the last 4 digit of the card number
     * @type {string}
     * @memberof AssignCardDTO
     */
    'cardNumberLast4Digits': string;
}


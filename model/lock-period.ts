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
 * The duration for which the quote remains valid after creation.
 * @export
 * @enum {string}
 */

export const LockPeriod = {
    _5Mins: '5_mins',
    _15Mins: '15_mins',
    _1Hour: '1_hour',
    _4Hours: '4_hours',
    _8Hours: '8_hours',
    _24Hours: '24_hours'
} as const;

export type LockPeriod = typeof LockPeriod[keyof typeof LockPeriod];




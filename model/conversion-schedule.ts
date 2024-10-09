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
 * The time period after which the conversion should be settled.
 * @export
 * @enum {string}
 */

export const ConversionSchedule = {
    Immediate: 'immediate',
    EndOfDay: 'end_of_day',
    NextDay: 'next_day',
    _2Days: '2_days'
} as const;

export type ConversionSchedule = typeof ConversionSchedule[keyof typeof ConversionSchedule];




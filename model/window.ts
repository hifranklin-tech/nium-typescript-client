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
 * Specifies the field by which the results should be grouped.
 * @export
 * @enum {string}
 */

export const Window = {
    Day: '1_day',
    Hour: '1_hour'
} as const;

export type Window = typeof Window[keyof typeof Window];



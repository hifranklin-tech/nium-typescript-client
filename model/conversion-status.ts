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
 * The status of the conversion.
 * @export
 * @enum {string}
 */

export const ConversionStatus = {
    Created: 'created',
    Processing: 'processing',
    Completed: 'completed',
    Cancelled: 'cancelled',
    Failed: 'failed',
    PendingCancellation: 'pending_cancellation'
} as const;

export type ConversionStatus = typeof ConversionStatus[keyof typeof ConversionStatus];




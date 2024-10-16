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
 * Reason for a conversion cancellation.    * `user_cancel`: User initiated cancellation.   * `insufficient_fund`: Cancellation due to insufficient balance in the wallet at the time of conversion execution. 
 * @export
 * @enum {string}
 */

export const CancellationReason = {
    UserCancel: 'user_cancel',
    InsufficientFund: 'insufficient_fund',
    Expired: 'expired'
} as const;

export type CancellationReason = typeof CancellationReason[keyof typeof CancellationReason];




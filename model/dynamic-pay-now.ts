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
 * This term refers to a type of payment method where the amount to be paid can be adjusted or changed in real-time before the payment is initiated. This type of payment is often used for transactions with dynamic pricing, such as buying a stock or making a bid in an auction.
 * @export
 * @interface DynamicPayNow
 */
export interface DynamicPayNow {
    /**
     * This field contains the UEN number associated with NIUM PayNow account.
     * @type {string}
     * @memberof DynamicPayNow
     */
    'UEN'?: string;
    /**
     * This field contains the type of payment method such as staticPayNow, dynamicPayNow, or bankTransfer.
     * @type {string}
     * @memberof DynamicPayNow
     */
    'type': DynamicPayNowTypeEnum;
}

export const DynamicPayNowTypeEnum = {
    DynamicPayNow: 'dynamicPayNow'
} as const;

export type DynamicPayNowTypeEnum = typeof DynamicPayNowTypeEnum[keyof typeof DynamicPayNowTypeEnum];



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
 * The amount to be paid can be adjusted or changed in real-time before the payment is initiated. DynamicPayNow payments are often used for transactions with dynamic pricing like buying shares of a company\'s stock or making a bid in an auction.
 * @export
 * @interface DynamicPayNow
 */
export interface DynamicPayNow {
    /**
     * The UEN number associated with NIUM\'s PayNow account.
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



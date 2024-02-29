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
 * @interface Payout
 */
export interface Payout {
    /**
     * The audit Id must be taken from [Exchange Rate Lock and Hold](ref:exchangeratelockandhold) API.
     * @type {number}
     * @memberof Payout
     */
    'audit_id'?: number;
    /**
     * This field accepts the destination amount for remittance. Either the source or the destination amount is mandatory.  Allowed decimal limit is 2.
     * @type {number}
     * @memberof Payout
     */
    'destination_amount'?: number;
    /**
     * This field indicates if compliance checks are to be done at the time of payout creation. This field is applicable only for scheduled and Post-Funded payouts.
     * @type {boolean}
     * @memberof Payout
     */
    'preScreening'?: boolean;
    /**
     * This field accepts scheduled payout date in yyyy-MM-dd format
     * @type {string}
     * @memberof Payout
     */
    'scheduledPayoutDate'?: string;
    /**
     * This field should denote the date of providing of service/export in yyyy-MM-dd format
     * @type {string}
     * @memberof Payout
     */
    'serviceTime'?: string;
    /**
     * This field accepts the source amount for remittance. Either the source or the destination amount is mandatory.  Allowed decimal limit is 2.
     * @type {number}
     * @memberof Payout
     */
    'source_amount'?: number;
    /**
     * This field accepts the source currency for remittance.
     * @type {string}
     * @memberof Payout
     */
    'source_currency'?: string;
    /**
     * This field accepts the swift fee type and defines who will bear the SWIFT charges for the given transaction. Clients can send any of the below values basis which, they will be charged for the SWIFT transaction. In case this field is absent SHA will be applied by default.  SHA - SWIFT charges shared by the customer and beneficiary OUR - SWIFT charges borne by the customer  Note: Clients should make sure that fee template is configured for each of the swift fee type. To know if the template is configured, clients should call [Fee Details](/apis/reference/feedetails) API
     * @type {string}
     * @memberof Payout
     */
    'swiftFeeType'?: PayoutSwiftFeeTypeEnum;
    /**
     * This field should denote the invoice number relevant to the transaction
     * @type {string}
     * @memberof Payout
     */
    'tradeOrderID'?: string;
}

export const PayoutSwiftFeeTypeEnum = {
    Ben: 'BEN',
    Our: 'OUR',
    Sha: 'SHA'
} as const;

export type PayoutSwiftFeeTypeEnum = typeof PayoutSwiftFeeTypeEnum[keyof typeof PayoutSwiftFeeTypeEnum];



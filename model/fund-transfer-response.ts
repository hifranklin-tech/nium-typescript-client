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
 * @interface FundTransferResponse
 */
export interface FundTransferResponse {
    /**
     * Provides more details about the returned error. Returns null is there are no errors.
     * @type {string}
     * @memberof FundTransferResponse
     */
    'message'?: string;
    /**
     * The status of the transfer.
     * @type {string}
     * @memberof FundTransferResponse
     */
    'status'?: FundTransferResponseStatusEnum;
    /**
     * The transaction reference number generated by the card issuance platform.
     * @type {string}
     * @memberof FundTransferResponse
     */
    'systemReferenceNumber'?: string;
}

export const FundTransferResponseStatusEnum = {
    Active: 'ACTIVE',
    Inactive: 'INACTIVE',
    Blocked: 'BLOCKED',
    Suspended: 'SUSPENDED',
    Uploaded: 'UPLOADED',
    Approved: 'APPROVED',
    Rejected: 'REJECTED',
    Failed: 'FAILED',
    Success: 'SUCCESS',
    Failure: 'FAILURE',
    PartiallySuccess: 'PARTIALLY SUCCESS',
    Sync: 'SYNC',
    NotSync: 'NOT SYNC',
    Pending: 'PENDING',
    RequiresAction: 'REQUIRES_ACTION',
    Clear: 'CLEAR',
    Declined: 'DECLINED',
    AccountBlocked: 'ACCOUNT_BLOCKED',
    AmountBlocked: 'AMOUNT_BLOCKED'
} as const;

export type FundTransferResponseStatusEnum = typeof FundTransferResponseStatusEnum[keyof typeof FundTransferResponseStatusEnum];



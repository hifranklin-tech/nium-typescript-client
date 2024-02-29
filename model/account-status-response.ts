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
 * @interface AccountStatusResponse
 */
export interface AccountStatusResponse {
    /**
     * This field contains the name of the bank which has issued the account linked to this funding instrument.
     * @type {string}
     * @memberof AccountStatusResponse
     */
    'bankName'?: string;
    /**
     * This field contains the unique 36-character client identifier generated and shared before API handshake.
     * @type {string}
     * @memberof AccountStatusResponse
     */
    'clientHashId'?: string;
    /**
     * This field contains the [2-letter ISO-2 country code](doc:currency-and-country-codes) where the bank account resides.
     * @type {string}
     * @memberof AccountStatusResponse
     */
    'country'?: string;
    /**
     * This field contains the timestamp when the funding instrument was added.
     * @type {string}
     * @memberof AccountStatusResponse
     */
    'createdAt'?: string;
    /**
     * This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) for the account to be linked.
     * @type {string}
     * @memberof AccountStatusResponse
     */
    'currency'?: string;
    /**
     * This field contains the unique 36-character customer identifier generated and shared before API handshake.
     * @type {string}
     * @memberof AccountStatusResponse
     */
    'customerHashId'?: string;
    /**
     * The field shows the mode of funding the wallet.
     * @type {string}
     * @memberof AccountStatusResponse
     */
    'fundingChannel'?: AccountStatusResponseFundingChannelEnum;
    /**
     * This field contains the unique 36-character funding instrument identifier.
     * @type {string}
     * @memberof AccountStatusResponse
     */
    'fundingInstrumentId'?: string;
    /**
     * This field contains the masked bank account number in the format XXXXXXXXXXXX1111.
     * @type {string}
     * @memberof AccountStatusResponse
     */
    'maskedAccountNumber'?: string;
    /**
     * This field contains the URL where the customer is redirected.
     * @type {string}
     * @memberof AccountStatusResponse
     */
    'redirectURL'?: string;
    /**
     * This field contains the routing code type, for example, \'ACH CODE\' for US.
     * @type {string}
     * @memberof AccountStatusResponse
     */
    'routingType'?: string;
    /**
     * This field contains the routing code value.
     * @type {string}
     * @memberof AccountStatusResponse
     */
    'routingValue'?: string;
    /**
     * This flag returns true when the funding instrument is saved. This can return false when funding instrument status is not yet approved.
     * @type {boolean}
     * @memberof AccountStatusResponse
     */
    'saved'?: boolean;
    /**
     * This field contains the current status of the funding instrument.
     * @type {string}
     * @memberof AccountStatusResponse
     */
    'status'?: AccountStatusResponseStatusEnum;
    /**
     * This field contains the additional information of the status response.
     * @type {string}
     * @memberof AccountStatusResponse
     */
    'statusDescription'?: string;
    /**
     * This field contains the timestamp when the funding instrument was last updated.
     * @type {string}
     * @memberof AccountStatusResponse
     */
    'updatedAt'?: string;
    /**
     * This field contains the unique 36-character wallet identifier generated and shared before API handshake.
     * @type {string}
     * @memberof AccountStatusResponse
     */
    'walletHashId'?: string;
}

export const AccountStatusResponseFundingChannelEnum = {
    DirectDebit: 'DIRECT_DEBIT'
} as const;

export type AccountStatusResponseFundingChannelEnum = typeof AccountStatusResponseFundingChannelEnum[keyof typeof AccountStatusResponseFundingChannelEnum];
export const AccountStatusResponseStatusEnum = {
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
    AmountBlocked: 'AMOUNT_BLOCKED',
    DeLinked: 'DE_LINKED',
    Cancelled: 'CANCELLED'
} as const;

export type AccountStatusResponseStatusEnum = typeof AccountStatusResponseStatusEnum[keyof typeof AccountStatusResponseStatusEnum];


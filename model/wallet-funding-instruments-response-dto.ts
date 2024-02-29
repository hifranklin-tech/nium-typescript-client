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
 * @interface WalletFundingInstrumentsResponseDTO
 */
export interface WalletFundingInstrumentsResponseDTO {
    /**
     * This field contains the name of the bank which has issued the account linked to this funding instrument.
     * @type {string}
     * @memberof WalletFundingInstrumentsResponseDTO
     */
    'bankName'?: string;
    /**
     * This field contains the name of the bank which has issued the funding instrument.
     * @type {string}
     * @memberof WalletFundingInstrumentsResponseDTO
     */
    'cardBankName'?: string;
    /**
     * This field contains the card network details. We currently support Visa and MasterCard. It can contain one of the following - visa OR mastercard.
     * @type {string}
     * @memberof WalletFundingInstrumentsResponseDTO
     */
    'cardNetwork'?: string;
    /**
     * This field contains the type of funding card. It can contain one of the following - credit OR debit.
     * @type {string}
     * @memberof WalletFundingInstrumentsResponseDTO
     */
    'cardType'?: string;
    /**
     * This field contains the unique 36-character client identifier generated and shared before API handshake.
     * @type {string}
     * @memberof WalletFundingInstrumentsResponseDTO
     */
    'clientHashId'?: string;
    /**
     * This field contains the Country.
     * @type {string}
     * @memberof WalletFundingInstrumentsResponseDTO
     */
    'country'?: string;
    /**
     * This field contains the timestamp of adding funding instrument in YYYY-MM-DD hh:mm:ss format.
     * @type {string}
     * @memberof WalletFundingInstrumentsResponseDTO
     */
    'createdAt'?: string;
    /**
     * This field contains the currency.
     * @type {string}
     * @memberof WalletFundingInstrumentsResponseDTO
     */
    'currency'?: string;
    /**
     * This field contains the unique 36-character customer identifier generated and shared before API handshake.
     * @type {string}
     * @memberof WalletFundingInstrumentsResponseDTO
     */
    'customerHashId'?: string;
    /**
     * This field contains the funding channel of the funding instrument.
     * @type {string}
     * @memberof WalletFundingInstrumentsResponseDTO
     */
    'fundingChannel'?: WalletFundingInstrumentsResponseDTOFundingChannelEnum;
    /**
     * This field contains the unique 36-character funding instrument identifier.
     * @type {string}
     * @memberof WalletFundingInstrumentsResponseDTO
     */
    'fundingInstrumentId'?: string;
    /**
     * This field contains the 16-digit masked card number in format 1234-56xx-xxxx-3456.
     * @type {string}
     * @memberof WalletFundingInstrumentsResponseDTO
     */
    'maskCardNumber'?: string;
    /**
     * This field contains the masked account number in the format where only last 4 digits are visible.
     * @type {string}
     * @memberof WalletFundingInstrumentsResponseDTO
     */
    'maskedAccountNumber'?: string;
    /**
     * This field contains the routing type.
     * @type {string}
     * @memberof WalletFundingInstrumentsResponseDTO
     */
    'routingType'?: string;
    /**
     * This field contains the routing value.
     * @type {string}
     * @memberof WalletFundingInstrumentsResponseDTO
     */
    'routingValue'?: string;
    /**
     * This flag indicates whether the funding instrument is saved or not.
     * @type {boolean}
     * @memberof WalletFundingInstrumentsResponseDTO
     */
    'saved'?: boolean;
    /**
     * This field contains the status of the funding instrument.
     * @type {string}
     * @memberof WalletFundingInstrumentsResponseDTO
     */
    'status'?: WalletFundingInstrumentsResponseDTOStatusEnum;
    /**
     * This flag indicates whether 3DS verification is supported on the card.
     * @type {boolean}
     * @memberof WalletFundingInstrumentsResponseDTO
     */
    'threeDSecureUsage'?: boolean;
    /**
     * This field contains the timestamp of last update to the funding instrument in YYYY-MM-DD hh:mm:ss format
     * @type {string}
     * @memberof WalletFundingInstrumentsResponseDTO
     */
    'updatedAt'?: string;
    /**
     * This field contains the unique 36-character wallet identifier generated and shared before API handshake.
     * @type {string}
     * @memberof WalletFundingInstrumentsResponseDTO
     */
    'walletHashId'?: string;
}

export const WalletFundingInstrumentsResponseDTOFundingChannelEnum = {
    DirectDebit: 'DIRECT_DEBIT'
} as const;

export type WalletFundingInstrumentsResponseDTOFundingChannelEnum = typeof WalletFundingInstrumentsResponseDTOFundingChannelEnum[keyof typeof WalletFundingInstrumentsResponseDTOFundingChannelEnum];
export const WalletFundingInstrumentsResponseDTOStatusEnum = {
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

export type WalletFundingInstrumentsResponseDTOStatusEnum = typeof WalletFundingInstrumentsResponseDTOStatusEnum[keyof typeof WalletFundingInstrumentsResponseDTOStatusEnum];



/**
 * NIUM Platform
 * NIUM Platform
 *
 * OpenAPI spec version: 2023.12.12
 * Contact: experience@nium.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class FeeResponseDTO {
    /**
    * This field contains the 3-letter [ISO-4217 authorization currency code](doc:currency-and-country-codes).
    */
    'authCurrency'?: string;
    /**
    * This field contains the 3-letter [ISO-4217 fee currency code](doc:currency-and-country-codes).
    */
    'feeCurrency'?: string;
    /**
    * This field contains the name of the fee or markup.
    */
    'feeName'?: FeeResponseDTOFeeNameEnum;
    /**
    * This field contains the actual value of the fee. It can be an amount or percentage.
    */
    'feeValue'?: number;
    /**
    * This field determines if the fee is a fixed amount or a percentage. It is true for a fixed amount and false for a percentage.
    */
    'fixed'?: boolean;
    /**
    * This field contains the starting point of the slab of transaction amount on which the fee is applicable.
    */
    'slabFrom'?: number;
    /**
    * This field contains the ending point of the slab of transaction amount on which the fee is applicable.
    */
    'slabTo'?: number;
    /**
    * This field contains the fee status and the possible values are: Active Inactive 
    */
    'status'?: FeeResponseDTOStatusEnum;
    /**
    * This field contains the value of the threshold fee. It can be fixed or percentage.
    */
    'thresholdFeeValue'?: number;
    /**
    * This field contains the 3-letter [ISO-4217 transaction currency code](doc:currency-and-country-codes).
    */
    'transactionCurrency'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "authCurrency",
            "baseName": "authCurrency",
            "type": "string",
            "format": ""
        },
        {
            "name": "feeCurrency",
            "baseName": "feeCurrency",
            "type": "string",
            "format": ""
        },
        {
            "name": "feeName",
            "baseName": "feeName",
            "type": "FeeResponseDTOFeeNameEnum",
            "format": ""
        },
        {
            "name": "feeValue",
            "baseName": "feeValue",
            "type": "number",
            "format": "double"
        },
        {
            "name": "fixed",
            "baseName": "fixed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "slabFrom",
            "baseName": "slabFrom",
            "type": "number",
            "format": "double"
        },
        {
            "name": "slabTo",
            "baseName": "slabTo",
            "type": "number",
            "format": "double"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "FeeResponseDTOStatusEnum",
            "format": ""
        },
        {
            "name": "thresholdFeeValue",
            "baseName": "thresholdFeeValue",
            "type": "number",
            "format": "double"
        },
        {
            "name": "transactionCurrency",
            "baseName": "transactionCurrency",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FeeResponseDTO.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FeeResponseDTOFeeNameEnum {
    AtmFee = 'ATM_FEE',
    EcomFee = 'ECOM_FEE',
    VirCardFee = 'VIR_CARD_FEE',
    PlasticFee = 'PLASTIC_FEE',
    AddonCardFee = 'ADDON_CARD_FEE',
    ReplacementFee = 'REPLACEMENT_FEE',
    WalletRefundFee = 'WALLET_REFUND_FEE',
    RemitBankFee = 'REMIT_BANK_FEE',
    RemitBankFeeSwiftBen = 'REMIT_BANK_FEE_SWIFT_BEN',
    RemitBankFeeSwiftOur = 'REMIT_BANK_FEE_SWIFT_OUR',
    RemitBankFeeSwift = 'REMIT_BANK_FEE_SWIFT',
    RemitCashFee = 'REMIT_CASH_FEE',
    RemitWalletFee = 'REMIT_WALLET_FEE',
    RemitCardFee = 'REMIT_CARD_FEE',
    RemitProxyFee = 'REMIT_PROXY_FEE',
    RemitBankFeeFedwire = 'REMIT_BANK_FEE_FEDWIRE',
    TransactionMarkup = 'TRANSACTION_MARKUP',
    FxMarkup = 'FX_MARKUP',
    FxMarkupAutoSweep = 'FX_MARKUP_AUTO_SWEEP',
    FxMarkupAutoSweepEod = 'FX_MARKUP_AUTO_SWEEP_EOD',
    FxMarkupAutoSweepReceive = 'FX_MARKUP_AUTO_SWEEP_RECEIVE',
    FxMarkupLockandhold1 = 'FX_MARKUP_LOCKANDHOLD_1',
    InternationalAtmFee = 'INTERNATIONAL_ATM_FEE',
    AtmDeclineFee = 'ATM_DECLINE_FEE',
    NonAtmDeclineFee = 'NON_ATM_DECLINE_FEE',
    AccountOpeningFee = 'ACCOUNT_OPENING_FEE',
    AccountMaintenanceFee = 'ACCOUNT_MAINTENANCE_FEE',
    AccountInactiveFee = 'ACCOUNT_INACTIVE_FEE',
    P2PFee = 'P2P_FEE',
    WalletCreditThirdPartyFee = 'WALLET_CREDIT_THIRD_PARTY_FEE',
    WalletCreditOfflineFee = 'WALLET_CREDIT_OFFLINE_FEE',
    WalletCreditCardFee = 'WALLET_CREDIT_CARD_FEE',
    WalletCreditDirectDebitFee = 'WALLET_CREDIT_DIRECT_DEBIT_FEE',
    AutoSweepFeeEod = 'AUTO_SWEEP_FEE_EOD',
    AutoSweepFeeReceive = 'AUTO_SWEEP_FEE_RECEIVE',
    FxMarkupSettle2Days = 'FX_MARKUP_SETTLE_2DAYS',
    FxMarkupSettleNextday = 'FX_MARKUP_SETTLE_NEXTDAY',
    FxMarkupSettleEndofday = 'FX_MARKUP_SETTLE_ENDOFDAY',
    FxMarkupSettleImmediate = 'FX_MARKUP_SETTLE_IMMEDIATE',
    FxMarkupLock5Mins = 'FX_MARKUP_LOCK_5MINS',
    FxMarkupLock15Mins = 'FX_MARKUP_LOCK_15MINS',
    FxMarkupLock1Hour = 'FX_MARKUP_LOCK_1HOUR',
    FxMarkupLock4Hours = 'FX_MARKUP_LOCK_4HOURS',
    FxMarkupLock8Hours = 'FX_MARKUP_LOCK_8HOURS',
    FxMarkupLock24Hours = 'FX_MARKUP_LOCK_24HOURS',
    FxMarkupCancellation = 'FX_MARKUP_CANCELLATION',
    FxMarkupReversal = 'FX_MARKUP_REVERSAL',
    DomesticLinkedCardFee = 'DOMESTIC_LINKED_CARD_FEE'
}
export enum FeeResponseDTOStatusEnum {
    Active = 'ACTIVE',
    Inactive = 'INACTIVE',
    Blocked = 'BLOCKED',
    Suspended = 'SUSPENDED',
    Uploaded = 'UPLOADED',
    Approved = 'APPROVED',
    Rejected = 'REJECTED',
    Failed = 'FAILED',
    Success = 'SUCCESS',
    Failure = 'FAILURE',
    PartiallySuccess = 'PARTIALLY SUCCESS',
    Sync = 'SYNC',
    NotSync = 'NOT SYNC',
    Pending = 'PENDING',
    RequiresAction = 'REQUIRES_ACTION',
    Clear = 'CLEAR',
    Declined = 'DECLINED',
    AccountBlocked = 'ACCOUNT_BLOCKED',
    AmountBlocked = 'AMOUNT_BLOCKED'
}


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
 * @interface AccountResponseDTO
 */
export interface AccountResponseDTO {
    /**
     * This field contains the name of the currency pool, for example, \"currency pool\".
     * @type {string}
     * @memberof AccountResponseDTO
     */
    'accountType'?: AccountResponseDTOAccountTypeEnum;
    /**
     * This field contains the available balance in the pool mentioned in accountType field.
     * @type {number}
     * @memberof AccountResponseDTO
     */
    'balance'?: number;
    /**
     * This field contains the date and time of create for an account type.
     * @type {string}
     * @memberof AccountResponseDTO
     */
    'createdAt'?: string;
    /**
     * This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) in which the balance is specified.
     * @type {string}
     * @memberof AccountResponseDTO
     */
    'currency'?: string;
    /**
     * This flag will be true only for base currency and false for other currencies.
     * @type {string}
     * @memberof AccountResponseDTO
     */
    'isDefault'?: string;
    /**
     * This field contains the date and time of last update for an account type.
     * @type {string}
     * @memberof AccountResponseDTO
     */
    'updatedAt'?: string;
}

export const AccountResponseDTOAccountTypeEnum = {
    NiumPool: 'NIUM_POOL',
    ClientPool: 'CLIENT_POOL',
    WalletPool: 'WALLET_POOL',
    IncomePool: 'INCOME_POOL',
    ExpensePool: 'EXPENSE_POOL',
    ReceivablePool: 'RECEIVABLE_POOL',
    UnsettledPool: 'UNSETTLED_POOL',
    PayablePool: 'PAYABLE_POOL',
    SuspensePool: 'SUSPENSE_POOL',
    HoldPool: 'HOLD_POOL',
    RemitPool: 'REMIT_POOL',
    NetworkPool: 'NETWORK_POOL'
} as const;

export type AccountResponseDTOAccountTypeEnum = typeof AccountResponseDTOAccountTypeEnum[keyof typeof AccountResponseDTOAccountTypeEnum];



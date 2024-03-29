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


// May contain unused imports in some cases
// @ts-ignore
import { WalletPaymentIdsTagRequestDTO } from './wallet-payment-ids-tag-request-dto';

/**
 * 
 * @export
 * @interface PaymentIdRequestDTO2
 */
export interface PaymentIdRequestDTO2 {
    /**
     * This object contains the user defined key-value pairs provided by the client. The maximum number of tags allowed is 15.
     * @type {Array<WalletPaymentIdsTagRequestDTO>}
     * @memberof PaymentIdRequestDTO2
     */
    'tags'?: Array<WalletPaymentIdsTagRequestDTO>;
    /**
     * This field accepts the account category while assigning a virtual account
     * @type {string}
     * @memberof PaymentIdRequestDTO2
     */
    'accountCategory'?: PaymentIdRequestDTO2AccountCategoryEnum;
    /**
     * This field accepts the bank name.
     * @type {string}
     * @memberof PaymentIdRequestDTO2
     */
    'bankName': string;
    /**
     * This field accepts the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes).
     * @type {string}
     * @memberof PaymentIdRequestDTO2
     */
    'currencyCode': string;
}

export const PaymentIdRequestDTO2AccountCategoryEnum = {
    SelfFundingAccount: 'SELF_FUNDING_ACCOUNT',
    CollectionAccount: 'COLLECTION_ACCOUNT',
    Null: 'Null'
} as const;

export type PaymentIdRequestDTO2AccountCategoryEnum = typeof PaymentIdRequestDTO2AccountCategoryEnum[keyof typeof PaymentIdRequestDTO2AccountCategoryEnum];



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


// May contain unused imports in some cases
// @ts-ignore
import type { CustomerDetailDTO } from './customer-detail-dto';
// May contain unused imports in some cases
// @ts-ignore
import type { WalletPaymentIdsTagRequestDTO } from './wallet-payment-ids-tag-request-dto';

/**
 * 
 * @export
 * @interface PaymentIdRequestDTO2
 */
export interface PaymentIdRequestDTO2 {
    /**
     * Use this field to create and include tags for your future reference. Accepts client defined key-value pairs. The maximum number of tags allowed is 15.
     * @type {Array<WalletPaymentIdsTagRequestDTO>}
     * @memberof PaymentIdRequestDTO2
     */
    'tags'?: Array<WalletPaymentIdsTagRequestDTO>;
    /**
     * The category the virtual account was assigned to.
     * @type {string}
     * @memberof PaymentIdRequestDTO2
     */
    'accountCategory'?: PaymentIdRequestDTO2AccountCategoryEnum;
    /**
     * The name of the bank which has issued the account linked to this account.
     * @type {string}
     * @memberof PaymentIdRequestDTO2
     */
    'bankName': string;
    /**
     * The 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) of the payment.
     * @type {string}
     * @memberof PaymentIdRequestDTO2
     */
    'currencyCode': string;
    /**
     * 
     * @type {CustomerDetailDTO}
     * @memberof PaymentIdRequestDTO2
     */
    'customerDetails'?: CustomerDetailDTO;
}

export const PaymentIdRequestDTO2AccountCategoryEnum = {
    SelfFundingAccount: 'SELF_FUNDING_ACCOUNT',
    CollectionAccount: 'COLLECTION_ACCOUNT',
    Null: 'Null'
} as const;

export type PaymentIdRequestDTO2AccountCategoryEnum = typeof PaymentIdRequestDTO2AccountCategoryEnum[keyof typeof PaymentIdRequestDTO2AccountCategoryEnum];



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
import { WalletPaymentIdsTagRequestDTO2 } from './wallet-payment-ids-tag-request-dto2';

/**
 * 
 * @export
 * @interface PaymentIdTagRequestDTO
 */
export interface PaymentIdTagRequestDTO {
    /**
     * This object accepts the user defined key-value pairs. The maximum number of tags allowed is 15.
     * @type {Array<WalletPaymentIdsTagRequestDTO2>}
     * @memberof PaymentIdTagRequestDTO
     */
    'tags': Array<WalletPaymentIdsTagRequestDTO2>;
    /**
     * This field accepts the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes).
     * @type {string}
     * @memberof PaymentIdTagRequestDTO
     */
    'currencyCode': string;
    /**
     * This field contains the unique virtual account assigned to customer.
     * @type {string}
     * @memberof PaymentIdTagRequestDTO
     */
    'uniquePaymentId': string;
}

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
import type { WalletFundResponseDTOPaymentMethodsInner } from './wallet-fund-response-dtopayment-methods-inner';

/**
 * 
 * @export
 * @interface WalletFundResponseDTO
 */
export interface WalletFundResponseDTO {
    /**
     * The credited amount.
     * @type {number}
     * @memberof WalletFundResponseDTO
     */
    'destinationAmount'?: number;
    /**
     * The 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) for the destination amount.
     * @type {string}
     * @memberof WalletFundResponseDTO
     */
    'destinationCurrencyCode'?: string;
    /**
     * An array with three types of objects:<ul><li>Bank transfer data</li><li>Dynamic pay now code</li><li>Static pay now code</li></ul>
     * @type {Array<WalletFundResponseDTOPaymentMethodsInner>}
     * @memberof WalletFundResponseDTO
     */
    'paymentMethods'?: Array<WalletFundResponseDTOPaymentMethodsInner>;
    /**
     * A 3DS Stripe URL generated to enter a One-Time Password (OTP).
     * @type {string}
     * @memberof WalletFundResponseDTO
     */
    'returnUrl'?: string;
    /**
     * The amount in the source currency that\'s being converted and transfered. Note the `amount` field takes precedence over `sourceAmount`.
     * @type {number}
     * @memberof WalletFundResponseDTO
     */
    'sourceAmount'?: number;
    /**
     * The 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) for the source amount.
     * @type {string}
     * @memberof WalletFundResponseDTO
     */
    'sourceCurrencyCode'?: string;
    /**
     * Returns the following values:<ul> <li><strong>Pending:</strong> Authorization of the transaction is awaiting approval.</li> <li><strong>Approved:</strong> The transaction has been approved and successfully authorized.</li> <li><strong>Rejected:</strong> The transaction was rejected due to NIUM\'s risk and compliance policy.</li> <li><strong>Declined:</strong> The transaction was declined. Follow up with the account owner to confirm funds are available, and the details provided are correct.</li> <li><strong>Reversal:</strong> The transaction was reversed and refunded.</li> <li><strong>Disputed:</strong> The account owner has disputed the transaction and filed a dispute with their bank.</li> <li><strong>DisputeClosed:</strong> The dispute filed against the transaction has been resolved.</li> </ul>
     * @type {string}
     * @memberof WalletFundResponseDTO
     */
    'status'?: string;
    /**
     * The transaction reference number generated by the card issuance platform.
     * @type {string}
     * @memberof WalletFundResponseDTO
     */
    'systemReferenceNumber'?: string;
}


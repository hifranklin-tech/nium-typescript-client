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
import { BankTransfer } from './bank-transfer';
// May contain unused imports in some cases
// @ts-ignore
import { DynamicPayNow } from './dynamic-pay-now';
// May contain unused imports in some cases
// @ts-ignore
import { StaticPayNow } from './static-pay-now';

/**
 * 
 * @export
 * @interface WalletFundResponseDTOPaymentMethodsInner
 */
export interface WalletFundResponseDTOPaymentMethodsInner {
    /**
     * This field contains the name of NIUM bank account.
     * @type {string}
     * @memberof WalletFundResponseDTOPaymentMethodsInner
     */
    'accountName'?: string;
    /**
     * This field contains the physical bank account number of NIUM.
     * @type {string}
     * @memberof WalletFundResponseDTOPaymentMethodsInner
     */
    'accountNumber'?: string;
    /**
     * This field contains the bank name to which money has to be transferred.
     * @type {string}
     * @memberof WalletFundResponseDTOPaymentMethodsInner
     */
    'bankName'?: string;
    /**
     * This field contains the IBAN that is International Bank Account Number. It is a combination of country code, check digits, bank code, sort code and account number.
     * @type {string}
     * @memberof WalletFundResponseDTOPaymentMethodsInner
     */
    'iban'?: string;
    /**
     * UEN number associated with NIUM PayNow account.
     * @type {string}
     * @memberof WalletFundResponseDTOPaymentMethodsInner
     */
    'sortCode'?: string;
    /**
     * This field contains the type of payment method such as staticPayNow, dynamicPayNow or bankTransfer
     * @type {string}
     * @memberof WalletFundResponseDTOPaymentMethodsInner
     */
    'type': WalletFundResponseDTOPaymentMethodsInnerTypeEnum;
    /**
     * This field contains the UEN number associated with NIUM PayNow account.
     * @type {string}
     * @memberof WalletFundResponseDTOPaymentMethodsInner
     */
    'UEN'?: string;
    /**
     * This field contains the codec-base64 encoded QRCode image data. This will provide the QRCode image on decoding. This image can be read by devices such as smartphone or camera.
     * @type {string}
     * @memberof WalletFundResponseDTOPaymentMethodsInner
     */
    'qrCode'?: string;
}

export const WalletFundResponseDTOPaymentMethodsInnerTypeEnum = {
    BankTransfer: 'bankTransfer',
    DynamicPayNow: 'dynamicPayNow',
    StaticPayNow: 'staticPayNow'
} as const;

export type WalletFundResponseDTOPaymentMethodsInnerTypeEnum = typeof WalletFundResponseDTOPaymentMethodsInnerTypeEnum[keyof typeof WalletFundResponseDTOPaymentMethodsInnerTypeEnum];


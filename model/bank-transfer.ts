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
 * This term refers to a method of electronic payment that allows you to transfer funds from your bank account to another bank account, either within the same bank or to a different financial institution. This method of payment is often used for larger transactions, such as paying bills or sending money to a friend or family member.
 * @export
 * @interface BankTransfer
 */
export interface BankTransfer {
    /**
     * This field contains the name of NIUM bank account.
     * @type {string}
     * @memberof BankTransfer
     */
    'accountName'?: string;
    /**
     * This field contains the physical bank account number of NIUM.
     * @type {string}
     * @memberof BankTransfer
     */
    'accountNumber'?: string;
    /**
     * This field contains the bank name to which money has to be transferred.
     * @type {string}
     * @memberof BankTransfer
     */
    'bankName'?: string;
    /**
     * This field contains the IBAN that is International Bank Account Number. It is a combination of country code, check digits, bank code, sort code and account number.
     * @type {string}
     * @memberof BankTransfer
     */
    'iban'?: string;
    /**
     * UEN number associated with NIUM PayNow account.
     * @type {string}
     * @memberof BankTransfer
     */
    'sortCode'?: string;
    /**
     * This field contains the type of payment method such as staticPayNow, dynamicPayNow or bankTransfer
     * @type {string}
     * @memberof BankTransfer
     */
    'type': BankTransferTypeEnum;
}

export const BankTransferTypeEnum = {
    BankTransfer: 'bankTransfer'
} as const;

export type BankTransferTypeEnum = typeof BankTransferTypeEnum[keyof typeof BankTransferTypeEnum];



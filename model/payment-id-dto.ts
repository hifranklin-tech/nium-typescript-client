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
 * @interface PaymentIdDTO
 */
export interface PaymentIdDTO {
    /**
     * This field contains the bank name for the paymentId.
     * @type {string}
     * @memberof PaymentIdDTO
     */
    'bankName'?: PaymentIdDTOBankNameEnum;
    /**
     * This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes).
     * @type {string}
     * @memberof PaymentIdDTO
     */
    'currencyCode'?: string;
    /**
     * This field contains the unique email Id provided to the customer in addition to uniquePaymentId for supported regions and configuration, or else it will be null, for example, abc12_ca@nium.com.
     * @type {string}
     * @memberof PaymentIdDTO
     */
    'uniquePayerId'?: string;
    /**
     * This field contains the virtual account number per currency provided to customers for supported regions and configuration, for example, IBAN in EU, virtual account number from Moonova in AU, or else, it will be null.
     * @type {string}
     * @memberof PaymentIdDTO
     */
    'uniquePaymentId'?: string;
}

export const PaymentIdDTOBankNameEnum = {
    BolLt: 'BOL_LT',
    MonoovaAu: 'MONOOVA_AU',
    DbsHk: 'DBS_HK',
    DbsSg: 'DBS_SG',
    JpmAu: 'JPM_AU',
    JpmSg: 'JPM_SG',
    CbGb: 'CB_GB',
    CfsbUs: 'CFSB_US'
} as const;

export type PaymentIdDTOBankNameEnum = typeof PaymentIdDTOBankNameEnum[keyof typeof PaymentIdDTOBankNameEnum];



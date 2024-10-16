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
 * @interface PayoutRequest
 */
export interface PayoutRequest {
    /**
     * This field accepts an account number as a payout detail.
     * @type {string}
     * @memberof PayoutRequest
     */
    'account_number'?: string;
    /**
     * The type of account. This field is conditional in case of WALLET payout.
     * @type {string}
     * @memberof PayoutRequest
     */
    'account_type'?: PayoutRequestAccountTypeEnum;
    /**
     * This field accepts the bank code of the payout.
     * @type {string}
     * @memberof PayoutRequest
     */
    'bank_code'?: string;
    /**
     * This field contains the beneficiary bank name.
     * @type {string}
     * @memberof PayoutRequest
     */
    'bank_name'?: string;
    /**
     * This field accepts the [ISO-2 country code](doc:currency-and-country-codes) for the payout bank.
     * @type {string}
     * @memberof PayoutRequest
     */
    'country_code'?: string;
    /**
     * This field accepts the 3-letter [ISO-4217 destination currency code](doc:currency-and-country-codes) of the payout as per the destination country from supported corridors.
     * @type {string}
     * @memberof PayoutRequest
     */
    'destination_currency': string;
    /**
     * This field accepts the type of identification document name for a beneficiary.
     * @type {string}
     * @memberof PayoutRequest
     */
    'identification_type'?: string;
    /**
     * This field accepts an identification document number for the beneficiary.
     * @type {string}
     * @memberof PayoutRequest
     */
    'identification_value'?: string;
    /**
     * This field accepts the payout method for the remittance payout.
     * @type {string}
     * @memberof PayoutRequest
     */
    'payout_method': PayoutRequestPayoutMethodEnum;
    /**
     * This field indicates the proxy type sent in the payment request.  For SGD-PayNow: The proxy type can be MOBILE, UEN, NRIC, or VPA.  For INR-UPI: The proxy type should be VPA. For BRL-PIX: The proxy type can be MOBILE, ID, EMAIL, or RANDOM_KEY For AUD-PayID: The proxy type can be MOBILE, EMAIL, ABN, or ORGANISATION_ID(only domestic payouts are allowed) For MYR-DuitNow: The proxy type can be NRIC, PASSPORT, CORPORATE_REGISTRATION_NUMBER, MOBILE, or ARMY_ID. Note: This field is mandatory when the payout_method type is PROXY
     * @type {string}
     * @memberof PayoutRequest
     */
    'proxy_type'?: string;
    /**
     * This field indicates the proxy value such as VPA, UEN, or mobile number etc. Note: This field is mandatory when the payout_method type is PROXY The mobile number should include country code.
     * @type {string}
     * @memberof PayoutRequest
     */
    'proxy_value'?: string;
    /**
     * This field accepts the routing code type 1, for example, SWIFT for all countries, IFSC for India, SORT CODE for UK, ACH CODE for USA, BRANCH CODE for Brazil and Bangladesh, BSB CODE for Australia, BANK CODE for HongKong.
     * @type {string}
     * @memberof PayoutRequest
     */
    'routing_code_type_1'?: string;
    /**
     * This field accepts the routing code type 2, for example, SWIFT for all countries, IFSC for India, SORT CODE for UK, ACH CODE for USA, BRANCH CODE for Brazil and Bangladesh, BSB CODE for Australia, BANK CODE for HongKong.
     * @type {string}
     * @memberof PayoutRequest
     */
    'routing_code_type_2'?: string;
    /**
     * This field accepts the routing code value 1, for example, ADCBINBB or ADCBINBB123 for SWIFT, SBIN0000058 for IFSC, 100000 for SORT CODE, 111000025 for ACH CODE, 012515 for BSB CODE, 151 for BANK CODE.
     * @type {string}
     * @memberof PayoutRequest
     */
    'routing_code_value_1'?: string;
    /**
     * This field accepts the routing code value 2, for example, ADCBINBB or ADCBINBB123 for SWIFT, SBIN0000058 for IFSC, 100000 for SORT CODE, 111000025 for ACH CODE, 012515 for BSB CODE, 151 for BANK CODE.
     * @type {string}
     * @memberof PayoutRequest
     */
    'routing_code_value_2'?: string;
}

export const PayoutRequestAccountTypeEnum = {
    Current: 'Current',
    Saving: 'Saving',
    Maestra: 'Maestra',
    Checking: 'Checking'
} as const;

export type PayoutRequestAccountTypeEnum = typeof PayoutRequestAccountTypeEnum[keyof typeof PayoutRequestAccountTypeEnum];
export const PayoutRequestPayoutMethodEnum = {
    Local: 'LOCAL',
    Swift: 'SWIFT',
    Wallet: 'WALLET',
    Cash: 'CASH',
    Card: 'CARD',
    Proxy: 'PROXY',
    Fedwire: 'FEDWIRE'
} as const;

export type PayoutRequestPayoutMethodEnum = typeof PayoutRequestPayoutMethodEnum[keyof typeof PayoutRequestPayoutMethodEnum];



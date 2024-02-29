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
 * 
 * @export
 * @interface InwardPaymentManualRequestDTO
 */
export interface InwardPaymentManualRequestDTO {
    /**
     * This object accepts the additional information
     * @type {{ [key: string]: string; }}
     * @memberof InwardPaymentManualRequestDTO
     */
    'additionalInfo'?: { [key: string]: string; };
    /**
     * This field contains the amount.
     * @type {number}
     * @memberof InwardPaymentManualRequestDTO
     */
    'amount'?: number;
    /**
     * This field contains the bank reference number
     * @type {string}
     * @memberof InwardPaymentManualRequestDTO
     */
    'bankReferenceNumber'?: string;
    /**
     * This field contains the source of payment/fund.
     * @type {string}
     * @memberof InwardPaymentManualRequestDTO
     */
    'bankSource'?: InwardPaymentManualRequestDTOBankSourceEnum;
    /**
     * This field contains the country.
     * @type {string}
     * @memberof InwardPaymentManualRequestDTO
     */
    'country'?: string;
    /**
     * This field contains the 3-letter currency code.
     * @type {string}
     * @memberof InwardPaymentManualRequestDTO
     */
    'currency'?: InwardPaymentManualRequestDTOCurrencyEnum;
    /**
     * This field contains the expiry time for ICC.
     * @type {string}
     * @memberof InwardPaymentManualRequestDTO
     */
    'iccExpiry'?: string;
    /**
     * This field contains the payment instruction type
     * @type {string}
     * @memberof InwardPaymentManualRequestDTO
     */
    'instructionType'?: InwardPaymentManualRequestDTOInstructionTypeEnum;
    /**
     * This field contains the narrative.
     * @type {string}
     * @memberof InwardPaymentManualRequestDTO
     */
    'narrative'?: string;
    /**
     * This field contains the remitter account number.
     * @type {string}
     * @memberof InwardPaymentManualRequestDTO
     */
    'remitterAccountNumber'?: string;
    /**
     * This field contains the remitter bank code.
     * @type {string}
     * @memberof InwardPaymentManualRequestDTO
     */
    'remitterBankCode'?: string;
    /**
     * This field contains the remitter bank name.
     * @type {string}
     * @memberof InwardPaymentManualRequestDTO
     */
    'remitterBankName'?: string;
    /**
     * This field contains the remitter name.
     * @type {string}
     * @memberof InwardPaymentManualRequestDTO
     */
    'remitterName'?: string;
    /**
     * This field contains the remitter name local language.
     * @type {string}
     * @memberof InwardPaymentManualRequestDTO
     */
    'remitterNameLocalLanguage'?: string;
    /**
     * This field contains the transaction reference number/ID.
     * @type {string}
     * @memberof InwardPaymentManualRequestDTO
     */
    'transactionId'?: string;
    /**
     * This field contains the ICC transaction source.
     * @type {string}
     * @memberof InwardPaymentManualRequestDTO
     */
    'transactionSource'?: string;
    /**
     * This field contains the ICC entry type.
     * @type {string}
     * @memberof InwardPaymentManualRequestDTO
     */
    'type'?: string;
    /**
     * This field contains the virtual account number.
     * @type {string}
     * @memberof InwardPaymentManualRequestDTO
     */
    'virtualAccountNumber'?: string;
}

export const InwardPaymentManualRequestDTOBankSourceEnum = {
    DbsHk: 'DBS_HK',
    DbsSg: 'DBS_SG',
    JpmSg: 'JPM_SG',
    JpmAu: 'JPM_AU',
    JpmUk: 'JPM_UK',
    MonoovaAu: 'MONOOVA_AU',
    BolLt: 'BOL_LT',
    CbGb: 'CB_GB',
    CfsbUs: 'CFSB_US',
    Barclays: 'BARCLAYS',
    CitiSg: 'CITI_SG',
    CitiMx: 'CITI_MX',
    CfsbUsintl: 'CFSB_USINTL',
    GmoJp: 'GMO_JP',
    NetbankPh: 'NETBANK_PH',
    Gocardless: 'GOCARDLESS',
    DirectfastSg: 'DIRECTFAST_SG',
    BankingcirclePl: 'BANKINGCIRCLE_PL'
} as const;

export type InwardPaymentManualRequestDTOBankSourceEnum = typeof InwardPaymentManualRequestDTOBankSourceEnum[keyof typeof InwardPaymentManualRequestDTOBankSourceEnum];
export const InwardPaymentManualRequestDTOCurrencyEnum = {
    Sgd: 'SGD',
    Aud: 'AUD',
    Eur: 'EUR',
    Hkd: 'HKD',
    Usd: 'USD',
    Gbp: 'GBP',
    Aed: 'AED',
    Cad: 'CAD',
    Chf: 'CHF',
    Czk: 'CZK',
    Dkk: 'DKK',
    Huf: 'HUF',
    Ils: 'ILS',
    Mxn: 'MXN',
    Nok: 'NOK',
    Nzd: 'NZD',
    Pln: 'PLN',
    Ron: 'RON',
    Rub: 'RUB',
    Sek: 'SEK',
    Zar: 'ZAR',
    Cny: 'CNY',
    Jpy: 'JPY',
    Thb: 'THB',
    Try: 'TRY',
    Php: 'PHP'
} as const;

export type InwardPaymentManualRequestDTOCurrencyEnum = typeof InwardPaymentManualRequestDTOCurrencyEnum[keyof typeof InwardPaymentManualRequestDTOCurrencyEnum];
export const InwardPaymentManualRequestDTOInstructionTypeEnum = {
    Inquiry: 'INQUIRY',
    Process: 'PROCESS'
} as const;

export type InwardPaymentManualRequestDTOInstructionTypeEnum = typeof InwardPaymentManualRequestDTOInstructionTypeEnum[keyof typeof InwardPaymentManualRequestDTOInstructionTypeEnum];



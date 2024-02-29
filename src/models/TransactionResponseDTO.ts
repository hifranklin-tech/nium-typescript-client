/**
 * NIUM Platform
 * NIUM Platform
 *
 * OpenAPI spec version: 2023.12.12
 * Contact: experience@nium.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TransactionRfiDetailsResponse } from '../models/TransactionRfiDetailsResponse';
import { HttpFile } from '../http/http';

export class TransactionResponseDTO {
    /**
    * This object contains the user defined key-value pairs provided by the client.
    */
    'tags'?: { [key: string]: string; };
    /**
    * This field contains the country code of the acquirer.
    */
    'acquirerCountryCode'?: string;
    /**
    * This field contains the acquiring institution code that identifies the financial institution acting as the acquirer of the transaction.
    */
    'acquiringInstitutionCode'?: string;
    /**
    * This field contains an authorization amount of the transaction.
    */
    'authAmount'?: number;
    /**
    * This field contains the authorization code.
    */
    'authCode'?: string;
    /**
    * This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) of the auth currency, the currency in which amount is deducted from wallet.
    */
    'authCurrencyCode'?: string;
    /**
    * This field contains the equivalent transaction amount in base currency.
    */
    'billingAmount'?: number;
    /**
    * This field contains the conversion rate of transaction currency to billing currency which is present for all card transactions.
    */
    'billingConversionRate'?: string;
    /**
    * This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) for the billing currency or base currency
    */
    'billingCurrencyCode'?: string;
    /**
    * The corrected amount of a transaction in a partial reversal. This is defined by ISO-8583 as a fixed length field with four subfields, but only the first subfield is used. A 12 position field for the corrected, billing amount of a customer\'s transaction, in the billing currency. The field is right justified, with lead zero fill.
    */
    'billingReplacementAmount'?: number;
    /**
    * This flag is used to mark or unmark a transaction as a business transaction.
    */
    'businessTransaction'?: boolean;
    /**
    * This field contains the unique card identifier generated while new/add-on card issuance.
    */
    'cardHashID'?: string;
    /**
    * This field contains the amount of a card transaction.
    */
    'cardTransactionAmount'?: number;
    /**
    * This field refers to a unique identifier, known as customerHashId, assigned to an individual customer who is associated with a corporate customer at the parent level. This identifier serves the purpose of distinguishing and tracking the child-level customer within a given client\'s program. By utilizing this identifier, it becomes possible to establish and maintain the appropriate linkage between the child customer and their parent corporate customer, ensuring accurate association and management of customer data.
    */
    'childCustomerHashId'?: string;
    /**
    * Unique client identifier generated and shared before API handshake.
    */
    'clientHashId'?: string;
    /**
    * This field contains the auto-generated comments with details on the transactions such as reason for transaction decline.
    */
    'comments'?: string;
    /**
    * This field contains the compliance status of the transaction.The possible values are: NULL IN_PROGRESS ACTION_REQUIRED RFI_REQUESTED RFI_RESPONDED COMPLETED ERROR REJECT EXPIRED
    */
    'complianceStatus'?: TransactionResponseDTOComplianceStatusEnum;
    /**
    * This field contains the date and time of transaction when created in UTC.
    */
    'createdAt'?: Date;
    /**
    * This field will be deprecated in the future.
    */
    'currentWithHoldingBalance'?: number;
    /**
    * This field contains the unique customer identifier generated while new customer created.
    */
    'customerHashId'?: string;
    /**
    * This field contains the date on which the transaction occurred in yyyy-MM-dd format.
    */
    'dateOfTransaction'?: Date;
    /**
    * This field contains the flag signifies if the transaction is a debit transaction.
    */
    'debit'?: boolean;
    /**
    * This field contains an effective authorization amount which includes fees, markup, etc.
    */
    'effectiveAuthAmount'?: number;
    /**
    * This object will contain different key-value pairs depending upon the type of transaction. Essentially, this object will contain different labels based on the type of transaction. The list will change over time depending on different use-cases. Refer to the [Glossary of Labels](/apis/docs/transaction-response-labels).
    */
    'labels'?: { [key: string]: string; };
    /**
    * This field contains the local date of the transaction.
    */
    'localDate'?: string;
    /**
    * This field contains the local time of the transaction.
    */
    'localTime'?: string;
    /**
    * This field contains the 16-digit masked card number in format 1234-56xx-xxxx-3456.
    */
    'maskedCardNumber'?: string;
    /**
    * This field contains the four-digit Merchant Category Code.
    */
    'mcc'?: string;
    /**
    * This field contains the merchant category such as Airlines, Hotels, Shopping, etc.
    */
    'merchantCategory'?: string;
    /**
    * This field contains the city name of the merchant.
    */
    'merchantCity'?: string;
    /**
    * This field contains the country of the merchant.
    */
    'merchantCountry'?: string;
    /**
    * This field contains the unique merchant identifier.
    */
    'merchantID'?: string;
    /**
    * This field contains the latitude of the merchant captured during geo-tagging.
    */
    'merchantLatitude'?: string;
    /**
    * This field contains the longitude of the merchant captured during geo-tagging.
    */
    'merchantLongitude'?: string;
    /**
    * This field contains the name of the merchant.
    */
    'merchantName'?: string;
    /**
    * This field contains the full merchant name and location data as received from network.
    */
    'merchantNameLocation'?: string;
    /**
    * This field contains the tagged name of the merchant.
    */
    'merchantTaggedName'?: string;
    /**
    * This field contains the merchant map zoom index.
    */
    'merchantZoomIndex'?: string;
    /**
    * This field contains the authorization code of the original transaction in case of reversal.
    */
    'originalAuthorizationCode'?: string;
    /**
    * This field contains the provided by an RHA client in response to an authorization.
    */
    'partnerReferenceNumber'?: string;
    /**
    * This field contains the unique payment instrument identifier generated for the linked card.
    */
    'paymentInstrumentHashId'?: string;
    /**
    * This field contains the pos condition code that describes the condition under which the transaction takes place at the point of service. 00 - Normal transaction 01 - Cardholder not present 03 - Merchant suspicious 08 - Mail/telephone order 51 - Account Verification Message(AVM) 55 - ICC Capable Branch ATM 59 - Electronic Commerce 90 - Recurring Payment
    */
    'posConditionCode'?: string;
    /**
    * This field provides information about the terminal used at the point of service.Type of terminal field values include:0 - Unspecified 2 - Unattended terminal(customer-operated) 4 - Electronic cash register 7 - Telephone device 8 - MCAS device 9 - Mobile acceptance solution(mPOS) Capability of terminal field values include: 0 - Unspecified 1 - Terminal not used 2 - Magnetic stripe read capability 3 - Bar code read capability 4 - OCR read capability 5 - Integrated circuit card read capability 9 - Terminal does not read card data 
    */
    'posEntryCapabilityCode'?: string;
    /**
    * This field contains the pos entry code that identifies the actual method used to capture the account number and expiration date, and the PIN capture capability of the terminal.This is a fixed‑length field with three subfields, as follows: 1. Positions 1‑2 - PAN and Date Entry Mode: This is a two‑digit code that identifies the actual method used at the point of service to enter the cardholder account number and card expiry date. 00 - Unknown 01 - Keyed transaction 02 - Magnetic stripe read 05 - Chip was read at the terminal 07 - Contactless 90 - Magnetic stripe read and transmitted unaltered 91 - Contactless - Magnetic stripe data (MSD) transmitted 2. Position 3 - PIN Entry Capability: This is a one‑digit code that identifies the capability of the authorization terminal, if one was used, to capture PINs. This coding does not necessarily mean that a PIN was entered or is included in this message: 0 - Unknown 1 - Terminal can accept PINs 2 - Terminal cannot accept PINs 3 - mPOS terminal can accept software-based PINs (Mastercard only) 3. Position 4 - Unused(filler): This is one digit of filler, which must be zero. 
    */
    'posEntryMode'?: string;
    /**
    * This field contains the previous balance in the wallet.
    */
    'previousBalance'?: number;
    /**
    * This field contains the processing code is a 6 character Visa field. Refer to the [link](https://en.wikipedia.org/wiki/ISO_8583#Processing_code) for more details on the processing code.
    */
    'processingCode'?: string;
    /**
    * This field contains the name of the receipt file.
    */
    'receiptFileName'?: string;
    /**
    * This field contains the receipt type.Expected values are as follows:  image/png image/jpg image/jpeg application/pdf
    */
    'receiptType'?: string;
    /**
    * This field contains the 12 digit number that is used with other data elements as a key to identify and track all messages related to a given customer transaction.
    */
    'retrievalReferenceNumber'?: string;
    /**
    * This field is an array that holds RFI details.
    */
    'rfiDetails'?: Array<TransactionRfiDetailsResponse>;
    /**
    * This field contains the transaction Id for an RHA client.
    */
    'rhaTransactionId'?: string;
    /**
    * This field contains the settlement amount of a transaction. This amount is valid only for a settled transaction.
    */
    'settlementAmount'?: number;
    /**
    * This field contains the settlement auth amount of a transaction. This amount is valid only for a settled transaction.
    */
    'settlementAuthAmount'?: number;
    'settlementBillingAmount'?: number;
    'settlementCurrency'?: string;
    /**
    * This field contains the settlement date in case of a Settled transaction. Otherwise, it is null.
    */
    'settlementDate'?: string;
    /**
    * This field contains the settlement status.This field can take the following values: Unsettled Settled  Released Disputed DisputeClosed Waived
    */
    'settlementStatus'?: TransactionResponseDTOSettlementStatusEnum;
    'settlementTransactionAmount'?: number;
    /**
    * This field contains the status. This field can take the following values: Pending: Transaction authorization is awaiting success or failure. Approved: Transaction is successfully authorized. Rejected: Transaction is rejected due to NIUM risk and compliance policies. Declined: Transaction is declined. Reversal: Transaction is reversed. Blocked: Transaction is blocked
    */
    'status'?: TransactionResponseDTOStatusEnum;
    /**
    * This field contains the system trace audit number assigned to uniquely identify a transaction.
    */
    'systemTraceAuditNumber'?: string;
    /**
    * This field contains the unique terminal ID.
    */
    'terminalID'?: string;
    /**
    * This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) for the transaction currency.
    */
    'transactionCurrencyCode'?: string;
    /**
    * The corrected amount of a transaction in a partial reversal. This is defined by ISO-8583 as a fixed length field with four subfields, but only the first subfield is used. A 12 position field for the corrected, actual amount of a customer\'s transaction, in the transaction currency. The field is right justified, with lead zero fill.
    */
    'transactionReplacementAmount'?: number;
    /**
    * This field contains the transaction can be one of the complete list of transactions mentioned in [Transaction Types](doc:transactions#transaction-types).
    */
    'transactionType'?: TransactionResponseDTOTransactionTypeEnum;
    /**
    * This field contains the date and time when the transaction was last updated in UTC.
    */
    'updatedAt'?: Date;
    /**
    * This field contains the unique wallet identifier generated while new wallet created.
    */
    'walletHashId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "acquirerCountryCode",
            "baseName": "acquirerCountryCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "acquiringInstitutionCode",
            "baseName": "acquiringInstitutionCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "authAmount",
            "baseName": "authAmount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "authCode",
            "baseName": "authCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "authCurrencyCode",
            "baseName": "authCurrencyCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "billingAmount",
            "baseName": "billingAmount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "billingConversionRate",
            "baseName": "billingConversionRate",
            "type": "string",
            "format": ""
        },
        {
            "name": "billingCurrencyCode",
            "baseName": "billingCurrencyCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "billingReplacementAmount",
            "baseName": "billingReplacementAmount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "businessTransaction",
            "baseName": "businessTransaction",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "cardHashID",
            "baseName": "cardHashID",
            "type": "string",
            "format": ""
        },
        {
            "name": "cardTransactionAmount",
            "baseName": "cardTransactionAmount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "childCustomerHashId",
            "baseName": "childCustomerHashId",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientHashId",
            "baseName": "clientHashId",
            "type": "string",
            "format": ""
        },
        {
            "name": "comments",
            "baseName": "comments",
            "type": "string",
            "format": ""
        },
        {
            "name": "complianceStatus",
            "baseName": "complianceStatus",
            "type": "TransactionResponseDTOComplianceStatusEnum",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "currentWithHoldingBalance",
            "baseName": "currentWithHoldingBalance",
            "type": "number",
            "format": "double"
        },
        {
            "name": "customerHashId",
            "baseName": "customerHashId",
            "type": "string",
            "format": ""
        },
        {
            "name": "dateOfTransaction",
            "baseName": "dateOfTransaction",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "debit",
            "baseName": "debit",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "effectiveAuthAmount",
            "baseName": "effectiveAuthAmount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "localDate",
            "baseName": "localDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "localTime",
            "baseName": "localTime",
            "type": "string",
            "format": ""
        },
        {
            "name": "maskedCardNumber",
            "baseName": "maskedCardNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "mcc",
            "baseName": "mcc",
            "type": "string",
            "format": ""
        },
        {
            "name": "merchantCategory",
            "baseName": "merchantCategory",
            "type": "string",
            "format": ""
        },
        {
            "name": "merchantCity",
            "baseName": "merchantCity",
            "type": "string",
            "format": ""
        },
        {
            "name": "merchantCountry",
            "baseName": "merchantCountry",
            "type": "string",
            "format": ""
        },
        {
            "name": "merchantID",
            "baseName": "merchantID",
            "type": "string",
            "format": ""
        },
        {
            "name": "merchantLatitude",
            "baseName": "merchantLatitude",
            "type": "string",
            "format": ""
        },
        {
            "name": "merchantLongitude",
            "baseName": "merchantLongitude",
            "type": "string",
            "format": ""
        },
        {
            "name": "merchantName",
            "baseName": "merchantName",
            "type": "string",
            "format": ""
        },
        {
            "name": "merchantNameLocation",
            "baseName": "merchantNameLocation",
            "type": "string",
            "format": ""
        },
        {
            "name": "merchantTaggedName",
            "baseName": "merchantTaggedName",
            "type": "string",
            "format": ""
        },
        {
            "name": "merchantZoomIndex",
            "baseName": "merchantZoomIndex",
            "type": "string",
            "format": ""
        },
        {
            "name": "originalAuthorizationCode",
            "baseName": "originalAuthorizationCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "partnerReferenceNumber",
            "baseName": "partnerReferenceNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentInstrumentHashId",
            "baseName": "paymentInstrumentHashId",
            "type": "string",
            "format": ""
        },
        {
            "name": "posConditionCode",
            "baseName": "posConditionCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "posEntryCapabilityCode",
            "baseName": "posEntryCapabilityCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "posEntryMode",
            "baseName": "posEntryMode",
            "type": "string",
            "format": ""
        },
        {
            "name": "previousBalance",
            "baseName": "previousBalance",
            "type": "number",
            "format": "double"
        },
        {
            "name": "processingCode",
            "baseName": "processingCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "receiptFileName",
            "baseName": "receiptFileName",
            "type": "string",
            "format": ""
        },
        {
            "name": "receiptType",
            "baseName": "receiptType",
            "type": "string",
            "format": ""
        },
        {
            "name": "retrievalReferenceNumber",
            "baseName": "retrievalReferenceNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "rfiDetails",
            "baseName": "rfiDetails",
            "type": "Array<TransactionRfiDetailsResponse>",
            "format": ""
        },
        {
            "name": "rhaTransactionId",
            "baseName": "rhaTransactionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "settlementAmount",
            "baseName": "settlementAmount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "settlementAuthAmount",
            "baseName": "settlementAuthAmount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "settlementBillingAmount",
            "baseName": "settlementBillingAmount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "settlementCurrency",
            "baseName": "settlementCurrency",
            "type": "string",
            "format": ""
        },
        {
            "name": "settlementDate",
            "baseName": "settlementDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "settlementStatus",
            "baseName": "settlementStatus",
            "type": "TransactionResponseDTOSettlementStatusEnum",
            "format": ""
        },
        {
            "name": "settlementTransactionAmount",
            "baseName": "settlementTransactionAmount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TransactionResponseDTOStatusEnum",
            "format": ""
        },
        {
            "name": "systemTraceAuditNumber",
            "baseName": "systemTraceAuditNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "terminalID",
            "baseName": "terminalID",
            "type": "string",
            "format": ""
        },
        {
            "name": "transactionCurrencyCode",
            "baseName": "transactionCurrencyCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "transactionReplacementAmount",
            "baseName": "transactionReplacementAmount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "transactionType",
            "baseName": "transactionType",
            "type": "TransactionResponseDTOTransactionTypeEnum",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "walletHashId",
            "baseName": "walletHashId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TransactionResponseDTO.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum TransactionResponseDTOComplianceStatusEnum {
    None = 'NONE',
    InProgress = 'IN_PROGRESS',
    Completed = 'COMPLETED',
    ActionRequired = 'ACTION_REQUIRED',
    Error = 'ERROR',
    Reject = 'REJECT',
    Expired = 'EXPIRED',
    RfiRequested = 'RFI_REQUESTED',
    RfiResponded = 'RFI_RESPONDED',
    Unknown = 'UNKNOWN',
    Initiated = 'INITIATED',
    Pending = 'PENDING',
    Clear = 'CLEAR',
    Closed = 'CLOSED'
}
export enum TransactionResponseDTOSettlementStatusEnum {
    Approved = 'APPROVED',
    Declined = 'DECLINED',
    Blocked = 'BLOCKED',
    Settled = 'SETTLED',
    Unsettled = 'UNSETTLED',
    Reversal = 'REVERSAL',
    Released = 'RELEASED',
    Pending = 'PENDING',
    Waived = 'WAIVED',
    Disputed = 'DISPUTED',
    DisputeClosed = 'DISPUTE_CLOSED',
    InProgress = 'IN_PROGRESS',
    Rejected = 'REJECTED',
    Returned = 'RETURNED',
    AwaitingFunds = 'AWAITING_FUNDS',
    Expired = 'EXPIRED',
    Cancelled = 'CANCELLED',
    Scheduled = 'SCHEDULED',
    Na = 'NA'
}
export enum TransactionResponseDTOStatusEnum {
    Approved = 'APPROVED',
    Declined = 'DECLINED',
    Blocked = 'BLOCKED',
    Settled = 'SETTLED',
    Unsettled = 'UNSETTLED',
    Reversal = 'REVERSAL',
    Released = 'RELEASED',
    Pending = 'PENDING',
    Waived = 'WAIVED',
    Disputed = 'DISPUTED',
    DisputeClosed = 'DISPUTE_CLOSED',
    InProgress = 'IN_PROGRESS',
    Rejected = 'REJECTED',
    Returned = 'RETURNED',
    AwaitingFunds = 'AWAITING_FUNDS',
    Expired = 'EXPIRED',
    Cancelled = 'CANCELLED',
    Scheduled = 'SCHEDULED',
    Na = 'NA'
}
export enum TransactionResponseDTOTransactionTypeEnum {
    Debit = 'Debit',
    Reversal = 'Reversal',
    OriginalCredit = 'Original_Credit',
    OriginalCreditReversal = 'Original_Credit_Reversal',
    BalanceInquiry = 'Balance_Inquiry',
    PartialReversal = 'Partial_Reversal',
    ReversalAdvice = 'Reversal_Advice',
    DeclineAdvice = 'Decline_Advice',
    IncrementalAuthReversal = 'Incremental_Auth_Reversal',
    AutoSweep = 'Auto_Sweep',
    AutoSweepPayout = 'Auto_Sweep_Payout',
    AutoSweepPayoutReversal = 'Auto_Sweep_Payout_Reversal',
    SettlementDebit = 'Settlement_Debit',
    SettlementCredit = 'Settlement_Credit',
    SettlementReversal = 'Settlement_Reversal',
    SettlementDirectReversal = 'Settlement_Direct_Reversal',
    SettlementDirectDebit = 'Settlement_Direct_Debit',
    FeeDebit = 'Fee_Debit',
    FeeReversal = 'Fee_Reversal',
    FeeWaiver = 'Fee_Waiver',
    ClientPrefund = 'Client_Prefund',
    ClientRefund = 'Client_Refund',
    WalletRefund = 'Wallet_Refund',
    WalletCreditModeCard = 'Wallet_Credit_Mode_Card',
    WalletCreditModePrefund = 'Wallet_Credit_Mode_Prefund',
    WalletCreditModePrefundCrossCurrency = 'Wallet_Credit_Mode_Prefund_Cross_Currency',
    WalletCreditModeOffline = 'Wallet_Credit_Mode_Offline',
    WalletCreditModeOfflineCrossCurrency = 'Wallet_Credit_Mode_Offline_Cross_Currency',
    WalletCreditModeOfflineThirdParty = 'Wallet_Credit_Mode_Offline_ThirdParty',
    WalletCreditModeDirectDebit = 'Wallet_Credit_Mode_Direct_Debit',
    WalletCreditModeDirectDebitReversal = 'Wallet_Credit_Mode_Direct_Debit_Reversal',
    CustomerWalletCreditFundTransfer = 'Customer_Wallet_Credit_Fund_Transfer',
    CustomerWalletDebitFundTransfer = 'Customer_Wallet_Debit_Fund_Transfer',
    WalletFundTransfer = 'Wallet_Fund_Transfer',
    ClientFundTransfer = 'Client_Fund_Transfer',
    WalletHold = 'Wallet_Hold',
    WalletUnhold = 'Wallet_Unhold',
    RemittanceDebit = 'Remittance_Debit',
    RemittanceDebitExternal = 'Remittance_Debit_External',
    RemittanceReversal = 'Remittance_Reversal',
    RemittanceClientAutoSweep = 'Remittance_Client_Auto_Sweep',
    RemittanceClientAutoSweepReversal = 'Remittance_Client_Auto_Sweep_Reversal',
    RemittanceDebitPrescreening = 'Remittance_Debit_Prescreening',
    RemittanceDebitExternalPrescreening = 'Remittance_Debit_External_Prescreening',
    RemittanceBeneMicrodeposit = 'Remittance_Bene_Microdeposit',
    RemittanceBeneMicrodepositReversal = 'Remittance_Bene_Microdeposit_Reversal',
    RegulatoryAutoSweep = 'Regulatory_Auto_Sweep',
    RegulatoryBlock = 'Regulatory_Block',
    RegulatoryBlockRelease = 'Regulatory_Block_Release',
    RegulatoryDebit = 'Regulatory_Debit',
    RegulatoryDebitReversal = 'Regulatory_Debit_Reversal',
    TransferLocal = 'Transfer_Local',
    TransferLocalReversal = 'Transfer_Local_Reversal',
    CashbackCredit = 'Cashback_Credit',
    CashbackCreditClient = 'Cashback_Credit_Client',
    ChargebackCredit = 'Chargeback_Credit',
    CustomerWalletDebitIntraRegion = 'Customer_Wallet_Debit_Intra_Region',
    CustomerWalletCreditIntraRegion = 'Customer_Wallet_Credit_Intra_Region',
    CustomerWalletDebitCrossRegion = 'Customer_Wallet_Debit_Cross_Region',
    CustomerWalletCreditCrossRegion = 'Customer_Wallet_Credit_Cross_Region',
    DirectDebitPayout = 'Direct_Debit_Payout',
    DirectDebitPayoutReversal = 'Direct_Debit_Payout_Reversal',
    InvoicingDebit = 'Invoicing_Debit',
    Na = 'NA'
}


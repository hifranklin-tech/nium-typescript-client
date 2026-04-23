# TransactionResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionType** | **string** | The transaction can be one of the complete list of transactions mentioned in [Transaction Types](https://docs.nium.com/apis/docs/transaction-types). | [optional] [default to undefined]
**status** | **string** | This field contains the status. This field can take the following values: Pending: Transaction authorization is awaiting success or failure. Approved: Transaction is successfully authorized. Rejected: Transaction is rejected due to Nium risk and compliance policies. Declined: Transaction is declined. Reversal: Transaction is reversed. Blocked: Transaction is blocked | [optional] [default to undefined]
**settlementStatus** | **string** | This field contains the settlement status.This field can take the following values: Unsettled Settled  Released Disputed DisputeClosed Waived | [optional] [default to undefined]
**processingCode** | **string** | The processing code is a 6 character Visa field. Refer to the [link](https://en.wikipedia.org/wiki/ISO_8583#Processing_code) for more details on the processing code. | [optional] [default to undefined]
**transactionCurrencyCode** | **string** | The 3-letter [ISO-4217 currency code](/docs/currency-and-country-codes) for the transaction currency. | [optional] [default to undefined]
**cardTransactionAmount** | **number** | The amount of a card transaction. | [optional] [default to undefined]
**billingCurrencyCode** | **string** | The 3-letter [ISO-4217 currency code](/docs/currency-and-country-codes) for the billing currency or base currency | [optional] [default to undefined]
**billingAmount** | **number** | The equivalent transaction amount in base currency. | [optional] [default to undefined]
**billingConversionRate** | **string** | The conversion rate of transaction currency to billing currency which is present for all card transactions. | [optional] [default to undefined]
**authCurrencyCode** | **string** | The 3-letter [ISO-4217 currency code](/docs/currency-and-country-codes) of the auth currency, the currency in which amount is deducted from wallet. | [optional] [default to undefined]
**authAmount** | **number** | This field contains an authorization amount of the transaction. | [optional] [default to undefined]
**effectiveAuthAmount** | **number** | This field contains an effective authorization amount which includes fees, markup, etc. | [optional] [default to undefined]
**settlementDate** | **string** | The settlement date in case of a Settled transaction. Otherwise, it is null. | [optional] [default to undefined]
**settlementAmount** | **number** | The settlement amount of a transaction. This amount is valid only for a settled transaction. | [optional] [default to undefined]
**settlementCurrency** | **string** |  | [optional] [default to undefined]
**settlementAuthAmount** | **number** | The settlement auth amount of a transaction. This amount is valid only for a settled transaction. | [optional] [default to undefined]
**settlementTransactionAmount** | **number** |  | [optional] [default to undefined]
**settlementBillingAmount** | **number** |  | [optional] [default to undefined]
**previousBalance** | **number** | The previous balance in the wallet. | [optional] [default to undefined]
**currentWithHoldingBalance** | **number** | This field will be deprecated in the future. | [optional] [default to undefined]
**dateOfTransaction** | **string** | The date on which the transaction occurred in yyyy-MM-dd format. | [optional] [default to undefined]
**localDate** | **string** | The local date of the transaction. | [optional] [default to undefined]
**localTime** | **string** | The local time of the transaction. | [optional] [default to undefined]
**debit** | **boolean** | The flag signifies if the transaction is a debit transaction. | [optional] [default to undefined]
**clientHashId** | **string** | Unique client identifier generated and shared before the initial request. | [optional] [default to undefined]
**customerHashId** | **string** | The unique customer identifier generated while new customer created. | [optional] [default to undefined]
**childCustomerHashId** | **string** | Unique ID for an individual customer linked to a parent-level corporate customer. Used to associate and track the child customer within a corporate customer\&#39;s program. | [optional] [default to undefined]
**walletHashId** | **string** | The unique wallet identifier generated while new wallet created. | [optional] [default to undefined]
**cardHashID** | **string** | The unique card identifier generated while new/add-on card issuance. | [optional] [default to undefined]
**maskedCardNumber** | **string** | The 16-digit masked card number in format 1234-56xx-xxxx-3456. | [optional] [default to undefined]
**mcc** | **string** | The four-digit Merchant Category Code. | [optional] [default to undefined]
**merchantID** | **string** | The unique merchant identifier. | [optional] [default to undefined]
**merchantName** | **string** | The name of the merchant. | [optional] [default to undefined]
**merchantCity** | **string** | The city name of the merchant. | [optional] [default to undefined]
**merchantCountry** | **string** | The country of the merchant. | [optional] [default to undefined]
**merchantCategory** | **string** | The merchant category such as Airlines, Hotels, Shopping, etc. | [optional] [default to undefined]
**merchantNameLocation** | **string** | The full merchant name and location data as received from network. | [optional] [default to undefined]
**acquirerCountryCode** | **string** | The country code of the acquirer. | [optional] [default to undefined]
**acquiringInstitutionCode** | **string** | The acquiring institution code that identifies the financial institution acting as the acquirer of the transaction. | [optional] [default to undefined]
**posEntryMode** | **string** | This field contains the pos entry code that identifies the actual method used to capture the account number and expiration date, and the PIN capture capability of the terminal.This is a fixed‑length field with three subfields, as follows: 1. Positions 1‑2 - PAN and Date Entry Mode: This is a two‑digit code that identifies the actual method used at the point of service to enter the cardholder account number and card expiry date. 00 - Unknown 01 - Keyed transaction 02 - Magnetic stripe read 05 - Chip was read at the terminal 07 - Contactless 90 - Magnetic stripe read and transmitted unaltered 91 - Contactless - Magnetic stripe data (MSD) transmitted 2. Position 3 - PIN Entry Capability: This is a one‑digit code that identifies the capability of the authorization terminal, if one was used, to capture PINs. This coding does not necessarily mean that a PIN was entered or is included in this message: 0 - Unknown 1 - Terminal can accept PINs 2 - Terminal cannot accept PINs 3 - mPOS terminal can accept software-based PINs (Mastercard only) 3. Position 4 - Unused(filler): This is one digit of filler, which must be zero.  | [optional] [default to undefined]
**posConditionCode** | **string** | This field contains the pos condition code that describes the condition under which the transaction takes place at the point of service. 00 - Normal transaction 01 - Cardholder not present 03 - Merchant suspicious 08 - Mail/telephone order 51 - Account Verification Message(AVM) 55 - ICC Capable Branch ATM 59 - Electronic Commerce 90 - Recurring Payment | [optional] [default to undefined]
**posEntryCapabilityCode** | **string** | This field provides information about the terminal used at the point of service.Type of terminal field values include:0 - Unspecified 2 - Unattended terminal(customer-operated) 4 - Electronic cash register 7 - Telephone device 8 - MCAS device 9 - Mobile acceptance solution(mPOS) Capability of terminal field values include: 0 - Unspecified 1 - Terminal not used 2 - Magnetic stripe read capability 3 - Bar code read capability 4 - OCR read capability 5 - Integrated circuit card read capability 9 - Terminal does not read card data | [optional] [default to undefined]
**billingReplacementAmount** | **string** | The corrected amount of a transaction in a partial reversal. This is defined by ISO-8583 as a fixed length field with four subfields, but only the first subfield is used. A 12 position field for the corrected, billing amount of a customer\&#39;s transaction, in the billing currency. The field is right justified, with lead zero fill. | [optional] [default to undefined]
**transactionReplacementAmount** | **string** | The corrected amount of a transaction in a partial reversal. This is defined by ISO-8583 as a fixed length field with four subfields, but only the first subfield is used. A 12 position field for the corrected, actual amount of a customer\&#39;s transaction, in the transaction currency. The field is right justified, with lead zero fill. | [optional] [default to undefined]
**authCode** | **string** | The authorization code. | [optional] [default to undefined]
**originalAuthorizationCode** | **string** | The authorization code of the original transaction in case of reversal. | [optional] [default to undefined]
**systemTraceAuditNumber** | **string** | The system trace audit number assigned to uniquely identify a transaction. | [optional] [default to undefined]
**retrievalReferenceNumber** | **string** | The 12 digit number that is used with other data elements as a key to identify and track all messages related to a given customer transaction. | [optional] [default to undefined]
**terminalID** | **string** | The unique terminal ID. | [optional] [default to undefined]
**rhaTransactionId** | **string** | The transaction Id for an RHA client. | [optional] [default to undefined]
**partnerReferenceNumber** | **string** | The provided by an RHA client in response to an authorization. | [optional] [default to undefined]
**comments** | **string** | The auto-generated comments with details on the transactions such as reason for transaction decline. | [optional] [default to undefined]
**paymentInstrumentHashId** | **string** | The unique payment instrument identifier generated for the linked card. | [optional] [default to undefined]
**merchantLatitude** | **string** | The latitude of the merchant captured during geo-tagging. | [optional] [default to undefined]
**merchantLongitude** | **string** | The longitude of the merchant captured during geo-tagging. | [optional] [default to undefined]
**merchantTaggedName** | **string** | The tagged name of the merchant. | [optional] [default to undefined]
**merchantZoomIndex** | **string** | The merchant map zoom index. | [optional] [default to undefined]
**businessTransaction** | **boolean** | This flag is used to mark or unmark a transaction as a business transaction. | [optional] [default to undefined]
**receiptType** | **string** | This field contains the receipt type.Expected values are as follows:  image/png image/jpg image/jpeg application/pdf | [optional] [default to undefined]
**receiptFileName** | **string** | The name of the recieved file. | [optional] [default to undefined]
**externalId** | **string** | Optional user-defined ID for tracking requests or transactions.   - Must be 1-36 characters, using only letters, numbers, and hyphens.   - Cannot start or end with a hyphen or contain consecutive hyphens. | [optional] [default to undefined]
**labels** | **{ [key: string]: string; }** | This object will contain different key-value pairs depending upon the type of transaction. Essentially, this object will contain different labels based on the type of transaction. The list will change over time depending on different use-cases. Refer to the [Glossary of Labels](/apis/docs/transaction-response-labels). | [optional] [default to undefined]
**tags** | **{ [key: string]: string; }** | This object contains the user defined key-value pairs provided by the client. | [optional] [default to undefined]
**rfiDetails** | [**Array&lt;TransactionRfiDetailsResponse&gt;**](TransactionRfiDetailsResponse.md) | This field is an array that holds RFI details. | [optional] [default to undefined]
**complianceStatus** | **string** | The compliance status of the transactions. Available values include:   - **PENDING**: The transaction is under compliance review and may require additional checks before it can proceed.   - **RFI_REQUESTED**: Additional information has been requested to complete the compliance review of this transaction.   - **CLEAR**: The transaction has passed all compliance checks and can proceed to the next step in processing.   - **REJECTED**: The transaction did not meet compliance requirements and cannot proceed. | [optional] [default to undefined]
**createdAt** | **string** | The date and time of transaction when created in UTC. | [optional] [default to undefined]
**updatedAt** | **string** | The date and time when the transaction was last updated in UTC. | [optional] [default to undefined]

## Example

```typescript
import { TransactionResponseDTO } from 'nium-client';

const instance: TransactionResponseDTO = {
    transactionType,
    status,
    settlementStatus,
    processingCode,
    transactionCurrencyCode,
    cardTransactionAmount,
    billingCurrencyCode,
    billingAmount,
    billingConversionRate,
    authCurrencyCode,
    authAmount,
    effectiveAuthAmount,
    settlementDate,
    settlementAmount,
    settlementCurrency,
    settlementAuthAmount,
    settlementTransactionAmount,
    settlementBillingAmount,
    previousBalance,
    currentWithHoldingBalance,
    dateOfTransaction,
    localDate,
    localTime,
    debit,
    clientHashId,
    customerHashId,
    childCustomerHashId,
    walletHashId,
    cardHashID,
    maskedCardNumber,
    mcc,
    merchantID,
    merchantName,
    merchantCity,
    merchantCountry,
    merchantCategory,
    merchantNameLocation,
    acquirerCountryCode,
    acquiringInstitutionCode,
    posEntryMode,
    posConditionCode,
    posEntryCapabilityCode,
    billingReplacementAmount,
    transactionReplacementAmount,
    authCode,
    originalAuthorizationCode,
    systemTraceAuditNumber,
    retrievalReferenceNumber,
    terminalID,
    rhaTransactionId,
    partnerReferenceNumber,
    comments,
    paymentInstrumentHashId,
    merchantLatitude,
    merchantLongitude,
    merchantTaggedName,
    merchantZoomIndex,
    businessTransaction,
    receiptType,
    receiptFileName,
    externalId,
    labels,
    tags,
    rfiDetails,
    complianceStatus,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

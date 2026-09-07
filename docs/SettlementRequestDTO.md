# SettlementRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorizationCode** | **string** | The 6 digit authorization code | [optional] [default to undefined]
**billingAmount** | **number** | The billing amount | [optional] [default to undefined]
**billingCurrency** | **string** | The 3-letter ISO3 billing currency code | [optional] [default to undefined]
**cardHashId** | **string** | The unique card identifier | [optional] [default to undefined]
**cardNumber** | **string** | The complete 16 digit card number | [optional] [default to undefined]
**clientHashId** | **string** | The unique client identifier | [optional] [default to undefined]
**clientId** | **number** | The unique client ID | [optional] [default to undefined]
**customerHashId** | **string** | This field contains the unique customer identifier  | [optional] [default to undefined]
**exchangeRate** | **string** | The exchange rate from the source currency to the destination currency | [optional] [default to undefined]
**labels** | [**Labels**](Labels.md) |  | [optional] [default to undefined]
**logoId** | **string** | The pre-defined logo Id | [optional] [default to undefined]
**logoIdentifier** | **string** | The pre-defined logo Identifier | [optional] [default to undefined]
**maskCardNumber** | **string** | The 16-digit masked card number | [optional] [default to undefined]
**merchantCategoryCode** | **string** | The 4-digit mcc code | [optional] [default to undefined]
**merchantCountryCode** | **string** | The merchant country code | [optional] [default to undefined]
**merchantId** | **string** | The unique merchant identifier | [optional] [default to undefined]
**merchantNameLocation** | **string** | The full merchant name and location data | [optional] [default to undefined]
**originalAuthorizationCode** | **string** | The authorization code of the original transaction | [optional] [default to undefined]
**posEntryMode** | **string** | The pos entry code that identifies the actual method used to capture the account number, expiration date, and the PIN | [optional] [default to undefined]
**settlementDate** | **string** | The settlement date | [optional] [default to undefined]
**settlementId** | **number** | The settlement id | [optional] [default to undefined]
**subBin** | **string** | This field is optional &amp; accepts the sub-bin | [optional] [default to undefined]
**tokenNumber** | **string** | The token number | [optional] [default to undefined]
**tokenRequesterId** | **string** | The token requester id | [optional] [default to undefined]
**transactionAmount** | **number** | The transaction amount. | [optional] [default to undefined]
**transactionCurrency** | **string** | The 3-letter ISO3 transaction currency code. | [optional] [default to undefined]
**transactionType** | **string** | The type of transaction, it can be C or D | [optional] [default to undefined]
**visaTransactionId** | **string** | The Unique ID provided for transaction by VISA | [optional] [default to undefined]

## Example

```typescript
import { SettlementRequestDTO } from 'nium-client';

const instance: SettlementRequestDTO = {
    authorizationCode,
    billingAmount,
    billingCurrency,
    cardHashId,
    cardNumber,
    clientHashId,
    clientId,
    customerHashId,
    exchangeRate,
    labels,
    logoId,
    logoIdentifier,
    maskCardNumber,
    merchantCategoryCode,
    merchantCountryCode,
    merchantId,
    merchantNameLocation,
    originalAuthorizationCode,
    posEntryMode,
    settlementDate,
    settlementId,
    subBin,
    tokenNumber,
    tokenRequesterId,
    transactionAmount,
    transactionCurrency,
    transactionType,
    visaTransactionId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

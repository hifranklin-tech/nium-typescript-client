# PaymentIdsDTO

This is an array object which holds the client payment Id response details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencyCode** | **string** | The 3-letter [ISO-4217 currency code](/docs/currency-and-country-codes). | [optional] [default to undefined]
**uniquePayerId** | **string** | This is a unique email Id provided to the customer in addition to uniquePaymentId for supported regions and configuration, or else it will be null, for example, abc12_ca@nium.com. | [optional] [default to undefined]
**uniquePaymentId** | **string** | The virtual account number per currency provided to customers for supported regions and configuration, for example, IBAN in EU, virtual account number from Moonova in AU, or else, it will be null. | [optional] [default to undefined]
**bankName** | **string** | The name of the bank. | [optional] [default to undefined]
**bankNameFull** | **string** | The full name of the bank. | [optional] [default to undefined]
**routingCodeType1** | **string** | The routing code (type 1). | [optional] [default to undefined]
**routingCodeValue1** | **string** | The routing code type 1 value. | [optional] [default to undefined]
**routingCodeType2** | **string** | The routing code (type 2)\&#39;. | [optional] [default to undefined]
**routingCodeValue2** | **string** | The routing code type 2 value. | [optional] [default to undefined]
**accountType** | **string** | The type of an account. | [optional] [default to undefined]
**accountName** | **string** | The name of the account. | [optional] [default to undefined]
**bankAddress** | **string** | The full address of the bank. | [optional] [default to undefined]

## Example

```typescript
import { PaymentIdsDTO } from 'nium-client';

const instance: PaymentIdsDTO = {
    currencyCode,
    uniquePayerId,
    uniquePaymentId,
    bankName,
    bankNameFull,
    routingCodeType1,
    routingCodeValue1,
    routingCodeType2,
    routingCodeValue2,
    accountType,
    accountName,
    bankAddress,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

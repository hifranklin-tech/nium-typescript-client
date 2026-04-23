# PrefundRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount transferred to account | [default to undefined]
**bankReferenceNumber** | **string** | The reference number provided by the bank during fund transfer | [optional] [default to undefined]
**beneAccountNumber** | **string** | The virtual account number | [optional] [default to undefined]
**clientAccountNumber** | **string** | The client\&#39;s bank account number for reference from which the client has transferred money. | [optional] [default to undefined]
**comments** | **string** | The comments which need to be passed, if any. | [optional] [default to undefined]
**currencyCode** | **string** | The 3-letter [ISO-4217 currency code](/docs/currency-and-country-codes). | [default to undefined]
**dateOfTransfer** | **string** | The date of the client\&#39;s prefund transfer to the Nium bank account. This request can be raised for a transfer within 30 days. | [optional] [default to undefined]
**niumAccountNumber** | **string** | The Nium account number to which the client has transferred the money. | [optional] [default to undefined]
**requesterId** | **string** | The client\&#39;s unique requester ID. | [optional] [default to undefined]

## Example

```typescript
import { PrefundRequestDTO } from 'nium-client';

const instance: PrefundRequestDTO = {
    amount,
    bankReferenceNumber,
    beneAccountNumber,
    clientAccountNumber,
    comments,
    currencyCode,
    dateOfTransfer,
    niumAccountNumber,
    requesterId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

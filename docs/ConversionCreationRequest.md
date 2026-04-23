# ConversionCreationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerComment** | **string** | Free text comment for clients to record and track the conversion. | [optional] [default to undefined]
**quoteId** | **string** | Unique identifier of the quote. | [optional] [default to undefined]
**sourceAmount** | **number** | The source amount to be converted to the destination currency. | [optional] [default to undefined]
**destinationAmount** | **number** | The amount needed in the destination currency. | [optional] [default to undefined]
**sourceCurrencyCode** | **string** | 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount. | [optional] [default to undefined]
**destinationCurrencyCode** | **string** | 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount. | [optional] [default to undefined]

## Example

```typescript
import { ConversionCreationRequest } from 'nium-client';

const instance: ConversionCreationRequest = {
    customerComment,
    quoteId,
    sourceAmount,
    destinationAmount,
    sourceCurrencyCode,
    destinationCurrencyCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

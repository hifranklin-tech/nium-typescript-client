# QuoteCreationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceAmount** | **number** | The source amount to be converted to the destination currency. This value is for reference only and will not be used as the actual conversion amount. | [optional] [default to undefined]
**destinationAmount** | **number** | The amount needed in the destination currency. This value is for reference only and will not be used as the actual conversion amount. | [optional] [default to undefined]
**sourceCurrencyCode** | **string** | 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount. | [default to undefined]
**destinationCurrencyCode** | **string** | 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount. | [default to undefined]
**quoteType** | [**QuoteType**](QuoteType.md) |  | [default to undefined]
**conversionSchedule** | [**ConversionSchedule**](ConversionSchedule.md) |  | [optional] [default to undefined]
**lockPeriod** | [**LockPeriod**](LockPeriod.md) |  | [optional] [default to undefined]
**executionType** | [**ExecutionType**](ExecutionType.md) |  | [optional] [default to undefined]
**customerHashId** | **string** | Unique identifier of the customer. | [optional] [default to undefined]

## Example

```typescript
import { QuoteCreationRequest } from 'nium-client';

const instance: QuoteCreationRequest = {
    sourceAmount,
    destinationAmount,
    sourceCurrencyCode,
    destinationCurrencyCode,
    quoteType,
    conversionSchedule,
    lockPeriod,
    executionType,
    customerHashId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

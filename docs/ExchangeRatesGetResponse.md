# ExchangeRatesGetResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinationCurrencyCode** | **string** | 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount. | [optional] [default to undefined]
**end** | **string** |  | [optional] [default to undefined]
**exchangeRates** | [**Array&lt;ExchangeRateGetResponse&gt;**](ExchangeRateGetResponse.md) |  | [optional] [default to undefined]
**sourceCurrencyCode** | **string** | 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount. | [optional] [default to undefined]
**start** | **string** |  | [optional] [default to undefined]
**window** | [**Window**](Window.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ExchangeRatesGetResponse } from 'nium-client';

const instance: ExchangeRatesGetResponse = {
    destinationCurrencyCode,
    end,
    exchangeRates,
    sourceCurrencyCode,
    start,
    window,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

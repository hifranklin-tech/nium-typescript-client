# ExchangeRateV2ResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinationAmount** | **number** | The credited amount. | [optional] [default to undefined]
**destinationCurrencyCode** | **string** | The 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount. | [optional] [default to undefined]
**ecbFxRate** | **number** | The ecb exchange rate fetched for the conversion. This field is only applicable for EU and UK. | [optional] [default to undefined]
**exchangeRate** | **number** | The exchange rate fetched for the conversion. | [optional] [default to undefined]
**expiryDate** | **string** | Timestamp till which the quoted rate is valid. The timezone is UTC +00. | [optional] [default to undefined]
**markupAmount** | **number** | In case source or destination amount is provided the markup amount will be calculated using markupRate. | [optional] [default to undefined]
**markupRate** | **number** | The markup rate charged by Nium. | [optional] [default to undefined]
**netExchangeRate** | **number** | This is exchangeRate subtracted by the markupRate. | [optional] [default to undefined]
**quoteId** | **string** | Unique quote Id for the exchange rate. | [optional] [default to undefined]
**scalingFactor** | **number** | The netExchangeRate should be divided by the scaling factor to fetch the actual exchange rate. | [optional] [default to undefined]
**sourceAmount** | **number** | An amount to be converted. | [optional] [default to undefined]
**sourceCurrencyCode** | **string** | The 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount. | [optional] [default to undefined]

## Example

```typescript
import { ExchangeRateV2ResponseDto } from 'nium-client';

const instance: ExchangeRateV2ResponseDto = {
    destinationAmount,
    destinationCurrencyCode,
    ecbFxRate,
    exchangeRate,
    expiryDate,
    markupAmount,
    markupRate,
    netExchangeRate,
    quoteId,
    scalingFactor,
    sourceAmount,
    sourceCurrencyCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# ReferenceRateResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asOfDate** | **string** | The date on which fx rate has to be calculated. The timezone is UTC +00. | [optional] [default to undefined]
**cardScheme** | **string** | The card scheme provider name. | [optional] [default to undefined]
**cardSchemeFxRate** | **number** | This is the fx rate from cards scheme. | [optional] [default to undefined]
**cardSchemeFxRateLastUpdatedAt** | **string** | Last updated timestamp of card scheme fx rate. The timezone is UTC +00. | [optional] [default to undefined]
**cardSchemeFxRateWithFxMarkup** | **number** | This is the cards scheme fx rate with fx markup. | [optional] [default to undefined]
**cardSchemeMarkupOverEcb** | **number** | The markup rate over ecb rate. Available for currencies listed in [Euro foreign exchange reference rates](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html) | [optional] [default to undefined]
**ecbRate** | **number** | The ecb exchange rate fetched for the conversion. Available for currencies listed in [Euro foreign exchange reference rates](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html) | [optional] [default to undefined]
**ecbRateLastUpdatedAt** | **string** | Last updated timestamp of ecb rate. The timezone is UTC +00. Available for currencies listed in [Euro foreign exchange reference rates](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html) | [optional] [default to undefined]
**fromAmount** | **number** | An amount to be converted. | [optional] [default to undefined]
**fromCurrency** | **string** | The 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount. | [optional] [default to undefined]
**fxMarkup** | **number** | This is the fx markup rate. | [optional] [default to 0]
**toAmountWithEcbRate** | **number** | The ecb exchange rate with to amount. | [optional] [default to undefined]
**toAmountWithTransactionFeeAndFxMarkup** | **number** | The amount with transaction fee and fx markup rate. | [optional] [default to undefined]
**toCurrency** | **string** | The 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount. | [optional] [default to undefined]
**transactionFee** | **number** | This is the transaction fee. | [optional] [default to undefined]

## Example

```typescript
import { ReferenceRateResponseDto } from 'nium-client';

const instance: ReferenceRateResponseDto = {
    asOfDate,
    cardScheme,
    cardSchemeFxRate,
    cardSchemeFxRateLastUpdatedAt,
    cardSchemeFxRateWithFxMarkup,
    cardSchemeMarkupOverEcb,
    ecbRate,
    ecbRateLastUpdatedAt,
    fromAmount,
    fromCurrency,
    fxMarkup,
    toAmountWithEcbRate,
    toAmountWithTransactionFeeAndFxMarkup,
    toCurrency,
    transactionFee,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# QuoteCreationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier of the quote. | [optional] [default to undefined]
**netExchangeRate** | **number** | Exchange rate with markup to be used for the conversion. | [optional] [default to undefined]
**expiryTime** | **string** | Expiry time of the quote in UTC. | [optional] [default to undefined]
**sourceCurrencyCode** | **string** | 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount. | [optional] [default to undefined]
**destinationCurrencyCode** | **string** | 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount. | [optional] [default to undefined]
**quoteType** | [**QuoteType**](QuoteType.md) |  | [optional] [default to undefined]
**conversionSchedule** | [**ConversionSchedule**](ConversionSchedule.md) |  | [optional] [default to undefined]
**lockPeriod** | [**LockPeriod**](LockPeriod.md) |  | [optional] [default to undefined]
**executionType** | [**ExecutionType**](ExecutionType.md) |  | [optional] [default to undefined]
**exchangeRate** | **number** | Foreign exchange market rate for the currency pair, used as the benchmark for quote calculation. | [optional] [default to undefined]
**markupRate** | **number** | Markup rate applied to the exchange rate for the conversion by Nium. | [optional] [default to undefined]
**clientMarkupRate** | **number** | Markup rate configured at the client level during the initial setup. If a customer level markup is not configured, then the MarkupRate defaults to this ClientMarkupRate. | [optional] [default to undefined]
**customerHashId** | **string** | Unique identifier of the customer. | [optional] [default to undefined]
**ecbExchangeRate** | **number** | Europe Central Bank\&#39;s exchange rate for this currency pair, provided only for EU and UK. | [optional] [default to undefined]
**rateCaptureTime** | **string** | Time in UTC at which exchange rate was obtained from the rate provider | [optional] [default to undefined]
**sourceAmount** | **number** | The source amount to be converted to the destination currency. This value is for reference only and will not be used as the actual conversion amount. | [optional] [default to undefined]
**destinationAmount** | **number** | The amount needed in the destination currency. This value is for reference only and will not be used as the actual conversion amount. | [optional] [default to undefined]
**destinationMarkupAmount** | **number** | The amount charged in the destination currency as the markup for the conversion. | [optional] [default to undefined]
**isOffMarket** | **boolean** | Returns &lt;code&gt;true&lt;/code&gt; if an FX_MARKUP_OFFMARKET fee has been applied. This field is only returned if off-market requests have been enabled by Nium. For more information, see &lt;a href&#x3D;\&quot;https://docs.nium.com/apis/docs/fx-overview#off-market-rates\&quot;&gt;FX - Overview&lt;/a&gt;. | [optional] [default to undefined]
**createdTime** | **string** | Time of creation in UTC. | [optional] [default to undefined]

## Example

```typescript
import { QuoteCreationResponse } from 'nium-client';

const instance: QuoteCreationResponse = {
    id,
    netExchangeRate,
    expiryTime,
    sourceCurrencyCode,
    destinationCurrencyCode,
    quoteType,
    conversionSchedule,
    lockPeriod,
    executionType,
    exchangeRate,
    markupRate,
    clientMarkupRate,
    customerHashId,
    ecbExchangeRate,
    rateCaptureTime,
    sourceAmount,
    destinationAmount,
    destinationMarkupAmount,
    isOffMarket,
    createdTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

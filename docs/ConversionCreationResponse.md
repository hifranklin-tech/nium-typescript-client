# ConversionCreationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier of the conversion. | [optional] [default to undefined]
**status** | [**ConversionStatus**](ConversionStatus.md) |  | [optional] [default to undefined]
**conversionTime** | **string** | Scheduled settlement time in UTC. This is significant for future-dated conversions (e.g., nextDay, 2days). Ensure sufficient funds in the customer\&#39;s wallet before this time to avoid cancellation and related charges. | [optional] [default to undefined]
**expiryTime** | **string** | Expiry time of the conversion in UTC. | [optional] [default to undefined]
**sourceCurrencyCode** | **string** | 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount. | [optional] [default to undefined]
**destinationCurrencyCode** | **string** | 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount. | [optional] [default to undefined]
**executionType** | [**ExecutionType**](ExecutionType.md) |  | [optional] [default to undefined]
**sourceAmount** | **number** | The source amount to be converted to the destination currency. | [optional] [default to undefined]
**destinationAmount** | **number** | The amount needed in the destination currency. | [optional] [default to undefined]
**quoteId** | **string** | Unique identifier of the quote. | [optional] [default to undefined]
**netExchangeRate** | **number** | Exchange rate with markup to be used for the conversion. | [optional] [default to undefined]
**exchangeRate** | **number** | Foreign exchange market rate for the currency pair, used as the benchmark for quote calculation. | [optional] [default to undefined]
**markupRate** | **number** | Markup rate applied to the exchange rate for the conversion by Nium. | [optional] [default to undefined]
**clientMarkupRate** | **number** | Markup rate configured at the client level during the initial setup. If a customer level markup is not configured, then the MarkupRate defaults to this ClientMarkupRate. | [optional] [default to undefined]
**destinationMarkupAmount** | **number** | The amount charged in the destination currency as the markup for the conversion. | [optional] [default to undefined]
**systemReferenceNumber** | **string** | Unique identifier for wallet financial activities used in all Nium reports and dashboards. Refer to [doc](https://docs.nium.com/apis/reference/clienttransactions) for details. | [optional] [default to undefined]
**customerComment** | **string** | Free text comment for clients to record and track the conversion. | [optional] [default to undefined]
**isOffMarket** | **boolean** | Returns &lt;code&gt;true&lt;/code&gt; if an FX_MARKUP_OFFMARKET fee has been applied. This field is only returned if off-market requests have been enabled by Nium. For more information, see &lt;a href&#x3D;\&quot;https://docs.nium.com/apis/docs/fx-overview#off-market-rates\&quot;&gt;FX - Overview&lt;/a&gt;. | [optional] [default to undefined]
**cancellationFee** | **number** | The fee charged when executing the cancellation. | [optional] [default to undefined]
**cancellationFeeCurrencyCode** | **string** | 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the cancellation fee. | [optional] [default to undefined]
**cancellationReason** | [**CancellationReason**](CancellationReason.md) |  | [optional] [default to undefined]
**cancellationComment** | **string** | Free text comment for clients to record and track cancellation of the conversion. | [optional] [default to undefined]
**cancellationFeeSystemReferenceNumber** | **string** | Unique identifier for wallet financial activities used in all Nium reports and dashboards. Refer to [doc](https://docs.nium.com/apis/reference/clienttransactions) for details. | [optional] [default to undefined]
**createdTime** | **string** | Time of creation in UTC. | [optional] [default to undefined]
**updatedTime** | **string** | Time of update in UTC. | [optional] [default to undefined]

## Example

```typescript
import { ConversionCreationResponse } from 'nium-client';

const instance: ConversionCreationResponse = {
    id,
    status,
    conversionTime,
    expiryTime,
    sourceCurrencyCode,
    destinationCurrencyCode,
    executionType,
    sourceAmount,
    destinationAmount,
    quoteId,
    netExchangeRate,
    exchangeRate,
    markupRate,
    clientMarkupRate,
    destinationMarkupAmount,
    systemReferenceNumber,
    customerComment,
    isOffMarket,
    cancellationFee,
    cancellationFeeCurrencyCode,
    cancellationReason,
    cancellationComment,
    cancellationFeeSystemReferenceNumber,
    createdTime,
    updatedTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# WalletTransferResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinationAmount** | **number** | Destination amount is the actual amount credited after deducting Fx and markup. | [optional] [default to undefined]
**destinationCurrencyCode** | **string** | The 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount. | [optional] [default to undefined]
**exchangeRate** | **number** | Exchange rate between source and destination currencies. | [optional] [default to undefined]
**markupAmount** | **number** | Markup amount calculated on the transaction. | [optional] [default to undefined]
**markupRate** | **number** | Cross-currency markup percentage levied by Nium. | [optional] [default to undefined]
**netExchangeRate** | **number** | Exchange rate between source and destination currencies derived after accounting for markup. The netExchangeRate should be divided by the scaling factor to fetch the actual exchange rate. | [optional] [default to undefined]
**scalingFactor** | **number** | The netExchangeRate should be divided by the scaling factor to fetch the actual exchange rate. | [optional] [default to undefined]
**sourceAmount** | **number** | Source amount is the amount transferred by the customer. | [optional] [default to undefined]
**sourceCurrencyCode** | **string** | The 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount. | [optional] [default to undefined]
**systemReferenceNumber** | **string** | Unique auth code generated for the transaction by the card issuance platform. | [optional] [default to undefined]

## Example

```typescript
import { WalletTransferResponseDto } from 'nium-client';

const instance: WalletTransferResponseDto = {
    destinationAmount,
    destinationCurrencyCode,
    exchangeRate,
    markupAmount,
    markupRate,
    netExchangeRate,
    scalingFactor,
    sourceAmount,
    sourceCurrencyCode,
    systemReferenceNumber,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# WalletTransferDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount in source currency which is to be transferred. If destinationAmount is provided, it will take preference over this field. | [optional] [default to undefined]
**customerComments** | **string** | This field accepts customer comments for the balance transfer within wallet. Maximum character limit is 512. | [optional] [default to undefined]
**destinationAmount** | **number** | The amount in destination currency which is to be transferred. If provided, amount field is not considered. If this field is skipped, amount is considered in source currency. | [optional] [default to undefined]
**destinationCurrency** | **string** | The 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount. | [default to undefined]
**quoteId** | **string** |  | [optional] [default to undefined]
**sourceCurrency** | **string** | The 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount. | [default to undefined]

## Example

```typescript
import { WalletTransferDto } from 'nium-client';

const instance: WalletTransferDto = {
    amount,
    customerComments,
    destinationAmount,
    destinationCurrency,
    quoteId,
    sourceCurrency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

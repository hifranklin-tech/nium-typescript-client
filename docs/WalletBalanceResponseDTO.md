# WalletBalanceResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**curSymbol** | **string** | The 3-letter [ISO-4217 currency code](/docs/currency-and-country-codes) for the pocket currency. | [optional] [default to undefined]
**isoCode** | **string** | The [3-digit ISO numeric code](https://www.currency-iso.org/en/home/tables/table-a1.html) for the currency. | [optional] [default to undefined]
**balance** | **number** | The available amount in the pocket. | [optional] [default to undefined]
**withHoldingBalance** | **number** | The amount blocked by Nium. | [optional] [default to undefined]
**pocketName** | **string** | The name of the pocket as defined under base currency. | [optional] [default to undefined]
**mccData** | [**Array&lt;MerchantCategoryResponseDTO2&gt;**](MerchantCategoryResponseDTO2.md) | An array that contains multiple objects; each object is a mccCode for which the pocket has restrictions. | [optional] [default to undefined]
**_default** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { WalletBalanceResponseDTO } from 'nium-client';

const instance: WalletBalanceResponseDTO = {
    curSymbol,
    isoCode,
    balance,
    withHoldingBalance,
    pocketName,
    mccData,
    _default,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

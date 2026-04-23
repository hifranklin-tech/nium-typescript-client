# CurrencyDetail

The **currencies** array lists objects that include balance details for each currency in the wallet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance** | **number** | The current available balance for the specified currency. | [optional] [default to undefined]
**code** | **string** | The 3-letter [ISO-4217 currency code](/docs/currency-and-country-codes) for the currency. | [optional] [default to undefined]
**_default** | **boolean** | Details if the specified currency is the base currency. | [optional] [default to undefined]

## Example

```typescript
import { CurrencyDetail } from 'nium-client';

const instance: CurrencyDetail = {
    balance,
    code,
    _default,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

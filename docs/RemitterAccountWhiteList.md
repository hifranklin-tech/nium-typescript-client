# RemitterAccountWhiteList

An array which holds the remitter accounts which are whitelisted for the client.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** | Return **TRUE** if the remittance account is active. | [optional] [default to undefined]
**remitterAccountNumber** | **string** | The account number of the remitter. | [optional] [default to undefined]
**remitterAllowedCurrency** | **string** | The 3-letter [ISO-4217 currency code](/docs/getting-started/currency-and-country-codes) for the allowed remittance currencies. | [optional] [default to undefined]

## Example

```typescript
import { RemitterAccountWhiteList } from 'nium-client';

const instance: RemitterAccountWhiteList = {
    active,
    remitterAccountNumber,
    remitterAllowedCurrency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

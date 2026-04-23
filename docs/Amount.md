# Amount

This object contains the amount and currency of the transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount of the transaction | [optional] [default to undefined]
**currency** | **string** | The [3-letterISO-4217 currency code](/docs/currency-and-country-codes) of the transaction | [optional] [default to undefined]

## Example

```typescript
import { Amount } from 'nium-client';

const instance: Amount = {
    amount,
    currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# AccountResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountType** | **string** | The name of the currency pool, for example, \&quot;currency pool\&quot;. | [optional] [default to undefined]
**currency** | **string** | The 3-letter [ISO-4217 currency code](/docs/currency-and-country-codes) in which the balance is specified. | [optional] [default to undefined]
**balance** | **number** | The available balance in the pool mentioned in accountType field. | [optional] [default to undefined]
**isDefault** | **string** | This flag will be true only for base currency and false for other currencies. | [optional] [default to undefined]
**createdAt** | **string** | The date and time of create for an account type. | [optional] [default to undefined]
**updatedAt** | **string** | The date and time of last update for an account type. | [optional] [default to undefined]

## Example

```typescript
import { AccountResponseDTO } from 'nium-client';

const instance: AccountResponseDTO = {
    accountType,
    currency,
    balance,
    isDefault,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

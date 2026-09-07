# PaymentIdRequestDTO2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountCategory** | **string** | The category the virtual account was assigned to. | [optional] [default to undefined]
**bankName** | **string** | The name of the bank which has issued the account linked to this account. | [default to undefined]
**currencyCode** | **string** | The 3-letter [ISO-4217 currency code](/docs/getting-started/currency-and-country-codes) of the payment. | [default to undefined]
**network** | **string** | This field accepts the network type. | [optional] [default to undefined]
**tags** | [**Array&lt;WalletPaymentIdsTagRequestDTO&gt;**](WalletPaymentIdsTagRequestDTO.md) | Use this field to create and include tags for your future reference. Accepts client defined key-value pairs. The maximum number of tags allowed is 15. | [optional] [default to undefined]
**uniquePayerId** | **string** | This field accepts the uniquePayerId corresponding to the uniquePayerType - EMAIL must be a valid email address; MOBILE must start with \&#39;+\&#39; followed by up to 10 digits (e.g., +6598765432); UEN must contain 9–13 alphanumeric characters (e.g., 123456789A). | [optional] [default to undefined]
**uniquePayerType** | **string** | This field accepts the unique payer type. | [optional] [default to undefined]

## Example

```typescript
import { PaymentIdRequestDTO2 } from 'nium-client';

const instance: PaymentIdRequestDTO2 = {
    accountCategory,
    bankName,
    currencyCode,
    network,
    tags,
    uniquePayerId,
    uniquePayerType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

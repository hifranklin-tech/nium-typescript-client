# PaymentIdTagRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencyCode** | **string** | The 3-letter [ISO-4217 currency code](/docs/getting-started/currency-and-country-codes). | [default to undefined]
**tags** | [**Array&lt;WalletPaymentIdsTagRequestDTO2&gt;**](WalletPaymentIdsTagRequestDTO2.md) | Use this field to create and include tags for your future reference. Accepts client defined key-value pairs. The maximum number of tags allowed is 15. | [default to undefined]
**uniquePaymentId** | **string** | The unique virtual account assigned to the customer. | [default to undefined]

## Example

```typescript
import { PaymentIdTagRequestDTO } from 'nium-client';

const instance: PaymentIdTagRequestDTO = {
    currencyCode,
    tags,
    uniquePaymentId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

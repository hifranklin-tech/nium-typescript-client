# PaymentIdRequestDTOV2

paymentIdRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountCategory** | **string** | This field accepts the account category while assigning a virtual account | [default to undefined]
**accountType** | **string** | This field accepts the account type while assigning a virtual account | [default to undefined]
**bankName** | **string** | Optional bank name override. If provided, payment routing will use this bank instead of preferred bank selection logic. | [optional] [default to undefined]
**currency** | **string** | This field accepts the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes). | [default to undefined]
**network** | **string** | This field accepts the network type. | [optional] [default to undefined]
**tags** | [**Array&lt;WalletPaymentIdsTagRequestDTOV2&gt;**](WalletPaymentIdsTagRequestDTOV2.md) | This object accepts the user defined key-value pairs provided by the client The maximum number of tags allowed is 15. | [optional] [default to undefined]
**uniquePayerId** | **string** | This field accepts the uniquePayerId corresponding to the uniquePayerType - EMAIL must be a valid email address; MOBILE must start with \&#39;+\&#39; followed by up to 10 digits (e.g., +6598765432); UEN must contain 9–13 alphanumeric characters (e.g., 123456789A). | [optional] [default to undefined]
**uniquePayerType** | **string** | This field accepts the unique payer type. | [optional] [default to undefined]

## Example

```typescript
import { PaymentIdRequestDTOV2 } from 'nium-client';

const instance: PaymentIdRequestDTOV2 = {
    accountCategory,
    accountType,
    bankName,
    currency,
    network,
    tags,
    uniquePayerId,
    uniquePayerType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

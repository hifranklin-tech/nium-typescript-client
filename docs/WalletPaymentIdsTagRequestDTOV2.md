# WalletPaymentIdsTagRequestDTOV2

This object accepts the user defined key-value pairs provided by the client The maximum number of tags allowed is 15.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | This field accepts the name of the tag. The maximum key length limit is 128 characters. | [default to undefined]
**value** | **string** | This field accepts the value of the tag. The maximum value length limit is 256 characters. | [optional] [default to undefined]

## Example

```typescript
import { WalletPaymentIdsTagRequestDTOV2 } from 'nium-client';

const instance: WalletPaymentIdsTagRequestDTOV2 = {
    key,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# WalletPaymentIdsTagRequestDTO2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** | This field accepts the action which determines the type of operation that needs to be performed. The possible values are:  DELETE: When tag needs to be deleted. MAINTAIN: When tags need to be added or updated.  | [default to undefined]
**key** | **string** | This field accepts the name of the tag. The maximum key length limit is 128 characters.  | [default to undefined]
**value** | **string** | This field accepts the value of the tag. The maximum value length limit is 256 characters. Note: In case the tags.action is MAINTAIN and the value is not present for a tag, system will not allow the request. | [optional] [default to undefined]

## Example

```typescript
import { WalletPaymentIdsTagRequestDTO2 } from 'nium-client';

const instance: WalletPaymentIdsTagRequestDTO2 = {
    action,
    key,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

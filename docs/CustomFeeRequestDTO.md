# CustomFeeRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | The 3-letter ISO-4217 currency code for the currency of the fee to be charged (supported for any currencies enabled in the Customer\&#39;s wallet) | [default to undefined]
**amount** | **number** | The amount to be debited from the Customer\&#39;s wallet. | [default to undefined]
**feeName** | **string** | This field accepts the name of the fee. Number of characters supported: 3 to 50. Note: This field only accepts alphanumeric characters with -_.(hyphen, underscore, dot, and space) | [default to undefined]
**comments** | **string** | This field accepts any comments for the custom fee to be levied. The maximum character limit is 255. | [optional] [default to undefined]
**tags** | [**Array&lt;ClientCustomTagDTO&gt;**](ClientCustomTagDTO.md) | This is an array which accepts Client\&#39;s custom tags &amp; values. Maximum 15 key-value pairs can be sent in tags. | [optional] [default to undefined]

## Example

```typescript
import { CustomFeeRequestDTO } from 'nium-client';

const instance: CustomFeeRequestDTO = {
    currency,
    amount,
    feeName,
    comments,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

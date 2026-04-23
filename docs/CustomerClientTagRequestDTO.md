# CustomerClientTagRequestDTO

This object accepts the user defined key-value pairs. The maximum number of tags allowed is 15.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** | This field accepts the action which determines the type of operation that needs to be performed. The possible values are: • DELETE: When tag needs to be deleted. • MAINTAIN: When tags need to be added or updated. | [default to undefined]
**key** | **string** | This field accepts the name of the tag. The maximum key length limit is 128 characters. | [default to undefined]
**value** | **string** | This field accepts the value of the tag. The maximum value length limit is 256 characters. Note: If the tags.action is MAINTAIN and the value is not present for a tag, then the system will not perform any operation on it. | [default to undefined]

## Example

```typescript
import { CustomerClientTagRequestDTO } from 'nium-client';

const instance: CustomerClientTagRequestDTO = {
    action,
    key,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

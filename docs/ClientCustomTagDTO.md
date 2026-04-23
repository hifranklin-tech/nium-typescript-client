# ClientCustomTagDto

This is an array which accepts custom tags & values. Maximum 15 key-value pairs can be sent in tags.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | This field accepts the client\&#39;s custom key of the tag. The maximum key length limit is 128 characters. | [default to undefined]
**value** | **string** | This field accepts the client\&#39;s custom value of the tag. The maximum value length limit is 256 characters. | [default to undefined]

## Example

```typescript
import { ClientCustomTagDto } from 'nium-client';

const instance: ClientCustomTagDto = {
    key,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

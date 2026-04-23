# WalletTag

This object contains the user defined key-value pairs provided by the client. The maximum number of tags allowed is 15.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | The name of the tag. The maximum character length for &#x60;keys&#x60; is 128 characters. | [default to undefined]
**value** | **string** | The value of the tag. The maximum character length for values is 256 characters. | [default to undefined]

## Example

```typescript
import { WalletTag } from 'nium-client';

const instance: WalletTag = {
    key,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

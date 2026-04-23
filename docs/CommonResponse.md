# CommonResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [optional] [default to undefined]
**message** | **string** |  | [optional] [default to undefined]
**errorDetails** | [**Array&lt;ErrorCodeMapping&gt;**](ErrorCodeMapping.md) |  | [optional] [default to undefined]
**errors** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { CommonResponse } from 'nium-client';

const instance: CommonResponse = {
    status,
    message,
    errorDetails,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

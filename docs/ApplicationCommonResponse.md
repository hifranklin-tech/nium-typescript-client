# ApplicationCommonResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationStatus** | **string** | application status of application | [optional] [default to undefined]
**message** | **string** |  | [optional] [default to undefined]
**errorDetails** | [**Array&lt;ErrorCodeMapping&gt;**](ErrorCodeMapping.md) |  | [optional] [default to undefined]
**errors** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { ApplicationCommonResponse } from 'nium-client';

const instance: ApplicationCommonResponse = {
    applicationStatus,
    message,
    errorDetails,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

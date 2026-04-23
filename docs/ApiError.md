# ApiError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | HTTP status code of the response. | [optional] [default to undefined]
**message** | **string** | Response message. | [optional] [default to undefined]
**errors** | **Array&lt;string&gt;** | Error description if any. | [optional] [default to undefined]

## Example

```typescript
import { ApiError } from 'nium-client';

const instance: ApiError = {
    status,
    message,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

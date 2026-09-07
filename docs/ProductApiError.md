# ProductApiError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | **Array&lt;string&gt;** | List of errors that occurred with the submitted request. | [optional] [default to undefined]
**message** | **string** | Description of the returned error(s). | [optional] [default to undefined]
**status** | **string** | HTTP status of the request | [optional] [default to undefined]

## Example

```typescript
import { ProductApiError } from 'nium-client';

const instance: ProductApiError = {
    errors,
    message,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

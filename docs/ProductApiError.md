# ProductApiError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | HTTP status of the request | [optional] [default to undefined]
**message** | **string** | Description of the returned error(s). | [optional] [default to undefined]
**errors** | **string** | List of errors that occurred with the submitted request. | [optional] [default to undefined]

## Example

```typescript
import { ProductApiError } from 'nium-client';

const instance: ProductApiError = {
    status,
    message,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

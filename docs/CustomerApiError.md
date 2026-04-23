# CustomerApiError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | Returns an HTTP status code according to the success and failure of the request. | [optional] [default to undefined]
**message** | **string** | Returns a message if the request is a success or blank in case of an error. | [optional] [default to undefined]
**errors** | **string** | This field will return an error message if any error occurs or blank if request is successfully executed. | [optional] [default to undefined]

## Example

```typescript
import { CustomerApiError } from 'nium-client';

const instance: CustomerApiError = {
    status,
    message,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

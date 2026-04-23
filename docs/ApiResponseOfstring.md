# ApiResponseOfstring


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **string** | The response message from our server. | [optional] [default to undefined]
**code** | **string** | The &#x60;HTTP&#x60; status code and additional details about what the code means. | [optional] [default to undefined]
**errors** | **Array&lt;string&gt;** | Returns a description of the error if any ocurred. | [optional] [default to undefined]
**message** | **string** | Returns the response message. | [optional] [default to undefined]
**status** | **string** | Details if the request was successful or if an error has ocurred. | [optional] [default to undefined]

## Example

```typescript
import { ApiResponseOfstring } from 'nium-client';

const instance: ApiResponseOfstring = {
    body,
    code,
    errors,
    message,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

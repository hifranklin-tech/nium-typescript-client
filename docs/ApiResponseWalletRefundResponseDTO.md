# ApiResponseWalletRefundResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | This field signifies if the request was successful or has an error. | [optional] [default to undefined]
**message** | **string** | This field will return the response message. | [optional] [default to undefined]
**code** | **string** | This field will return the HTTP status code with its interpretation. | [optional] [default to undefined]
**body** | **string** | This field will return the response message from the server. | [optional] [default to undefined]

## Example

```typescript
import { ApiResponseWalletRefundResponseDTO } from 'nium-client';

const instance: ApiResponseWalletRefundResponseDTO = {
    status,
    message,
    code,
    body,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

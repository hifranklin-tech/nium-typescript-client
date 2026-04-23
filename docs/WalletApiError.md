# WalletApiError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | HttpStatus of the request : BAD_REQUEST, INTERNAL_SERVER_ERROR. | [optional] [default to undefined]
**message** | **string** | Error message descriptor. | [optional] [default to undefined]
**errors** | **string** | List of errors occurred. | [optional] [default to undefined]
**issues** | **string** | List of issues. | [optional] [default to undefined]

## Example

```typescript
import { WalletApiError } from 'nium-client';

const instance: WalletApiError = {
    status,
    message,
    errors,
    issues,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

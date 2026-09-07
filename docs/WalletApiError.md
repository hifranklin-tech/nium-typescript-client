# WalletApiError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | **Array&lt;string&gt;** | List of errors occurred. | [optional] [default to undefined]
**issues** | [**Array&lt;ValidationError&gt;**](ValidationError.md) | List of issues. | [optional] [default to undefined]
**message** | **string** | Error message descriptor. | [optional] [default to undefined]
**status** | **string** | HttpStatus of the request : BAD_REQUEST, INTERNAL_SERVER_ERROR. | [optional] [default to undefined]

## Example

```typescript
import { WalletApiError } from 'nium-client';

const instance: WalletApiError = {
    errors,
    issues,
    message,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

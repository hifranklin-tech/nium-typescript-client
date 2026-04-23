# AccountVerificationError

Detailed information about the returned error(s).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Error code indicating the type of error. | [default to undefined]
**field** | **string** | Field associated with the error (if applicable). | [optional] [default to undefined]
**description** | **string** | Detailed error description. | [default to undefined]

## Example

```typescript
import { AccountVerificationError } from 'nium-client';

const instance: AccountVerificationError = {
    code,
    field,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

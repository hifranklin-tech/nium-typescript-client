# FetchLinkedBankAccountsError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | The detailed error code associated with HTTP status 400. * &#x60;validation_error&#x60;: The input violates the model constraints. * &#x60;invalid_input&#x60;: The given request contains a field which is invalid.  | [default to undefined]
**description** | **string** |  | [default to undefined]
**field** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { FetchLinkedBankAccountsError } from 'nium-client';

const instance: FetchLinkedBankAccountsError = {
    code,
    description,
    field,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

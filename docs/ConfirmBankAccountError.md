# ConfirmBankAccountError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | The detailed error code associated with HTTP status 400. * &#x60;validation_error&#x60;: The input violates the model constraints. * &#x60;invalid_authentication_type&#x60;: The request did not contain the correct authentication field for the given bank account\&#39;s authentication type. * &#x60;incorrect_authentication_value&#x60;: The request\&#39;s authentication value was incorrect. * &#x60;authentication_failed&#x60;: The maximum number of authentication attempts has been reached. Authentication has failed. * &#x60;invalid_bank_account_action&#x60;: The bank account action is invalid.  | [default to undefined]
**description** | **string** |  | [default to undefined]
**field** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ConfirmBankAccountError } from 'nium-client';

const instance: ConfirmBankAccountError = {
    code,
    description,
    field,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# ValidateRemittanceError

error details description 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | The detailed error code associated with HTTP status 400.  * &#x60;invalid_client_hash_id&#x60;: Invalid client hash id. * &#x60;invalid_customer_hash_id&#x60;: Invalid customer hash id. * &#x60;invalid_wallet_hash_id&#x60;: Invalid wallet hash id. * &#x60;malformed_request&#x60;: The request body is improperly formatted or invalid data structures.  | [default to undefined]
**description** | **string** |  | [default to undefined]
**field** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ValidateRemittanceError } from 'nium-client';

const instance: ValidateRemittanceError = {
    code,
    description,
    field,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

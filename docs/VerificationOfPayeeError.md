# VerificationOfPayeeError

Describes the error in detail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | The detailed error code associated with HTTP status 400. Values include:   - &#x60;invalid_client_hash_id&#x60;   - &#x60;invalid_client_hash_id&#x60;   - &#x60;invalid_customer_hash_id&#x60;   - &#x60;invalid_customer_hash_id&#x60;   - &#x60;invalid_wallet_hash_id&#x60;   - &#x60;invalid_wallet_hash&#x60;   - &#x60;invalid_request&#x60;   - &#x60;invalid_uniquePaymentId&#x60; | [default to undefined]
**description** | **string** |  | [default to undefined]
**field** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { VerificationOfPayeeError } from 'nium-client';

const instance: VerificationOfPayeeError = {
    code,
    description,
    field,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

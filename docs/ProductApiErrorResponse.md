# ProductApiErrorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | The detailed error code associated with HTTP status 400. Avilable values include:   - &#x60;invalid_client_hash_id&#x60;: The &#x60;clientHashId&#x60; provided is invalid.   - &#x60;invalid_customer_hash_id&#x60;: The &#x60;customerHashId&#x60; provided is invalid.   - &#x60;invalid_wallet_hash_id&#x60;: The &#x60;walletHashId&#x60; provided is invalid.   - &#x60;customer_exists&#x60;: Customer already exists with the field returned in the errors.   - &#x60;duplicate_externalId&#x60;: &#x60;externalId&#x60; should be unique for stakeholders and applicant.   -v&#x60;duplicate_request&#x60;: An active session already exists with this externalId.   - &#x60;invalid_input&#x60;: Some of the field values are accepted or a combination of field values are not accepted.   - &#x60;incomplete_client_setup&#x60;: Setup required for this action is incomplete.   - &#x60;missing_required_fields&#x60;: Some of the mandatory fields are missing in the request.   - &#x60;missing_required_documents&#x60;: Some of the required documents are missing in request.   - &#x60;resource_not_found&#x60;: Resource does not exist.   - &#x60;validation_error&#x60;: Request validation failed.   - &#x60;forbidden&#x60;: Accessing resource is forbidden. | [default to undefined]
**description** | **string** | Human-readable error message | [default to undefined]
**field** | **string** | Field name that caused the error (if applicable) | [optional] [default to undefined]

## Example

```typescript
import { ProductApiErrorResponse } from 'nium-client';

const instance: ProductApiErrorResponse = {
    code,
    description,
    field,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

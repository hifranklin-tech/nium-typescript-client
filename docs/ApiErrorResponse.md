# ApiErrorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | The detailed error code associated with HTTP status 400. * &#x60;invalid_client_hash_id&#x60;: The clientHashId provided is invalid * &#x60;customer_exists&#x60;: customer already exists with the field returned in the errors * &#x60;duplicate_externalId&#x60;: externalId should be unique for stakeholders and applicant * &#x60;invalid_input&#x60;: Some of the field values are accepted or combination of field values are not accepted * &#x60;incomplete_client_setup&#x60;: Client setup required for this action is incomplete * &#x60;missing_required_fields&#x60;: Some of the mandatory fields are missing in request * &#x60;missing_required_documents&#x60;: Some of the required documents are missing in request | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**field** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ApiErrorResponse } from 'nium-client';

const instance: ApiErrorResponse = {
    code,
    description,
    field,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

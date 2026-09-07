# RespondToRfiErrorDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Error codes returned by Respond to RFI API for HTTP 400 (request structure errors only).  * &#x60;invalid_client_hash_id&#x60;: The clientHashId path parameter is invalid. * &#x60;invalid_request_body&#x60;: The request body is malformed JSON or not a JSON array. * &#x60;invalid_input&#x60;: A field in the request body has an invalid value or format. | [default to undefined]
**description** | **string** | Human-readable error message. | [default to undefined]
**field** | **any** | Request field name without array index prefix. | [optional] [default to undefined]

## Example

```typescript
import { RespondToRfiErrorDetail } from 'nium-client';

const instance: RespondToRfiErrorDetail = {
    code,
    description,
    field,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

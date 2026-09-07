# FetchRfiDetailsErrorDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Error codes returned by Fetch RFI Details API for HTTP 400.  * &#x60;invalid_client_hash_id&#x60;: The clientHashId path parameter is invalid. * &#x60;invalid_customer_hash_id&#x60;: The customerHashId path parameter is invalid. * &#x60;missing_required_fields&#x60;: A required query parameter is missing. * &#x60;invalid_input&#x60;: A query parameter value is invalid (e.g. page, size, rfiEntity, status). | [default to undefined]
**description** | **string** | Human-readable error message. | [default to undefined]
**field** | **any** | Request field name without array index prefix. | [optional] [default to undefined]

## Example

```typescript
import { FetchRfiDetailsErrorDetail } from 'nium-client';

const instance: FetchRfiDetailsErrorDetail = {
    code,
    description,
    field,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

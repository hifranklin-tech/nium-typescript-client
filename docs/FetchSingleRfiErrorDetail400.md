# FetchSingleRfiErrorDetail400


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Error codes returned by Fetch Single RFI API for HTTP 400.  * &#x60;invalid_client_hash_id&#x60;: The clientHashId path parameter is invalid. * &#x60;invalid_input&#x60;: The rfiId path parameter value is invalid (e.g. not a valid UUID). * &#x60;rfi_client_mismatch&#x60;: The RFI does not belong to the client in the request path. | [default to undefined]
**description** | **string** | Human-readable error message. | [default to undefined]
**field** | **any** | Request field name without array index prefix. | [optional] [default to undefined]

## Example

```typescript
import { FetchSingleRfiErrorDetail400 } from 'nium-client';

const instance: FetchSingleRfiErrorDetail400 = {
    code,
    description,
    field,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

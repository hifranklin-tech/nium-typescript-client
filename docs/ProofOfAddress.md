# ProofOfAddress

Address verification document. Provide this if the identity document does not contain the address. If not provided, Nium will raise a Request for Information (RFI).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of address document. Fixed value — proof_of_address. | [default to undefined]
**fileIds** | **Array&lt;string&gt;** | Provide the fileIds received in the response of Upload File API (https://docs.nium.com/api#tag/files/POST/api/v1/client/%7BclientHashId%7D/files) | [default to undefined]

## Example

```typescript
import { ProofOfAddress } from 'nium-client';

const instance: ProofOfAddress = {
    type,
    fileIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# EuSourceOfWealthProofOfIdentity

Source of wealth proof of identity document. Required when the entity is a PEP (isPEP is true). Applicable to EU APPLICANT and INDIVIDUAL_STAKEHOLDER (positions Representative/Signatory, UBO/TRUSTEE/PARTNER/SETTLOR). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileIds** | **Array&lt;string&gt;** | Provide the fileIds received in the response of Upload File API (https://docs.nium.com/api#tag/files/POST/api/v1/client/%7BclientHashId%7D/files) | [default to undefined]
**type** | **string** | source_of_wealth. | [default to undefined]

## Example

```typescript
import { EuSourceOfWealthProofOfIdentity } from 'nium-client';

const instance: EuSourceOfWealthProofOfIdentity = {
    fileIds,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

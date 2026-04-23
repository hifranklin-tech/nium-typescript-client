# ProofOfIdentityResidentManualNationalId



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Fixed value — national_id. | [default to undefined]
**identificationNumber** | **string** | Provide 9 digit SSN. | [default to undefined]
**issuanceCountry** | **string** | Fixed value — US only. | [default to undefined]
**fileIds** | **Array&lt;string&gt;** | Mandatory only if national_id is provided. Optional if either passport/driver_licence is provided. Provide the fileIds received in the response of Upload File API (https://docs.nium.com/api#tag/files/POST/api/v1/client/%7BclientHashId%7D/files) | [optional] [default to undefined]

## Example

```typescript
import { ProofOfIdentityResidentManualNationalId } from 'nium-client';

const instance: ProofOfIdentityResidentManualNationalId = {
    type,
    identificationNumber,
    issuanceCountry,
    fileIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

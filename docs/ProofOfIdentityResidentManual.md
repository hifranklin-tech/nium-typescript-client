# ProofOfIdentityResidentManual



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | One of passport or driver_licence. | [default to undefined]
**identificationNumber** | **string** | Alphanumeric, maximum 30 characters. | [default to undefined]
**issuanceCountry** | **string** | Fixed value — US only. | [default to undefined]
**fileIds** | **Array&lt;string&gt;** | Provide the fileIds received in the response of Upload File API (https://docs.nium.com/api#tag/files/POST/api/v1/client/%7BclientHashId%7D/files) | [default to undefined]
**expiryDate** | **string** | Expiry date of the identity document. Required if type is passport or driver_licence. | [default to undefined]

## Example

```typescript
import { ProofOfIdentityResidentManual } from 'nium-client';

const instance: ProofOfIdentityResidentManual = {
    type,
    identificationNumber,
    issuanceCountry,
    fileIds,
    expiryDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

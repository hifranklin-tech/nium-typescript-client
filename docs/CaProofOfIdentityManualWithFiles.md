# CaProofOfIdentityManualWithFiles



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiryDate** | **string** | Expiry date of the identity document. Required if type is passport or driver_licence. | [default to undefined]
**fileIds** | **Array&lt;string&gt;** | Provide the fileIds received in the response of Upload File API. | [default to undefined]
**identificationNumber** | **string** | Alphanumeric, maximum 30 characters. | [default to undefined]
**issuanceCountry** | **string** | Two-letter ISO country code representing the country where the identity document was issued. | [default to undefined]
**type** | **string** | One of passport or driver_licence. | [default to undefined]

## Example

```typescript
import { CaProofOfIdentityManualWithFiles } from 'nium-client';

const instance: CaProofOfIdentityManualWithFiles = {
    expiryDate,
    fileIds,
    identificationNumber,
    issuanceCountry,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

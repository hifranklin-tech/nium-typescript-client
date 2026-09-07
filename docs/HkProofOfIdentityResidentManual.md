# HkProofOfIdentityResidentManual



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileIds** | **Array&lt;string&gt;** | Provide the fileIds received in the response of Upload File API (/api#tag/files/POST/api/v1/client/%7BclientHashId%7D/files) | [default to undefined]
**identificationNumber** | **string** | Alphanumeric, maximum 30 characters. | [default to undefined]
**issuanceCountry** | **string** | Two-letter ISO country code representing the country where the passport was issued. | [default to undefined]
**type** | **string** | Fixed value — passport. | [default to undefined]
**expiryDate** | **string** | Expiry date of the passport. Must be a future date. Format: yyyy-mm-dd. | [default to undefined]

## Example

```typescript
import { HkProofOfIdentityResidentManual } from 'nium-client';

const instance: HkProofOfIdentityResidentManual = {
    fileIds,
    identificationNumber,
    issuanceCountry,
    type,
    expiryDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

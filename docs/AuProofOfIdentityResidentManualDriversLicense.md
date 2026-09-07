# AuProofOfIdentityResidentManualDriversLicense



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiryDate** | **string** | Expiry date of the driver\&#39;s licence. Must be a future date. Format: yyyy-mm-dd. | [default to undefined]
**fileIds** | **Array&lt;string&gt;** | Provide the fileIds received in the response of Upload File API (/api#tag/files/POST/api/v1/client/%7BclientHashId%7D/files) | [default to undefined]
**identificationNumber** | **string** | Alphanumeric, maximum 30 characters. | [default to undefined]
**issuanceCountry** | **string** | Two-letter ISO country code representing the country where the driver\&#39;s licence was issued. | [default to undefined]
**type** | **string** | Fixed value — driver_licence. | [default to undefined]

## Example

```typescript
import { AuProofOfIdentityResidentManualDriversLicense } from 'nium-client';

const instance: AuProofOfIdentityResidentManualDriversLicense = {
    expiryDate,
    fileIds,
    identificationNumber,
    issuanceCountry,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

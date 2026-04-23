# ProofOfIdentityNonResidentManual

Provide identity verification details for the entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | One of passport, driver_licence or national_id. | [default to undefined]
**identificationNumber** | **string** | Alphanumeric, maximum 30 characters. | [default to undefined]
**issuanceCountry** | **string** | Two-letter ISO country code representing the country where the identity document was issued. | [default to undefined]
**expiryDate** | **string** | Expiry date of the identity document. Required if type is passport or driver_licence. Format: yyyy-mm-dd | [optional] [default to undefined]
**fileIds** | **Array&lt;string&gt;** | Provide the fileIds received in the response of Upload File API (https://docs.nium.com/api#tag/files/POST/api/v1/client/%7BclientHashId%7D/files) | [default to undefined]

## Example

```typescript
import { ProofOfIdentityNonResidentManual } from 'nium-client';

const instance: ProofOfIdentityNonResidentManual = {
    type,
    identificationNumber,
    issuanceCountry,
    expiryDate,
    fileIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# SgProofOfIdentityNonResidentManual

One of PASSPORT or NATIONAL_ID. PROOF_OF_ADDRESS is mandatory if PASSPORT is provided and optional if NATIONAL_ID is provided.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiryDate** | **string** | Expiry date of the passport. Must be a future date. Format: yyyy-mm-dd. | [default to undefined]
**fileIds** | **Array&lt;string&gt;** | Mandatory only if national_id is provided. Optional if either passport is provided. Provide the fileIds received in the response of Upload File API. | [default to undefined]
**identificationNumber** | **string** | Alphanumeric, maximum 30 characters. | [default to undefined]
**issuanceCountry** | **string** | Two-letter ISO country code representing the country where the identity document was issued. | [default to undefined]
**type** | **string** |  | [default to undefined]

## Example

```typescript
import { SgProofOfIdentityNonResidentManual } from 'nium-client';

const instance: SgProofOfIdentityNonResidentManual = {
    expiryDate,
    fileIds,
    identificationNumber,
    issuanceCountry,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

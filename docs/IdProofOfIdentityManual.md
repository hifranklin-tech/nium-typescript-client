# IdProofOfIdentityManual

Provide identity verification details for ID entity via manual KYC. One of PASSPORT, NATIONAL_ID or DRIVER_LICENCE (driver_licence) is mandatory. PASSPORT and DRIVER_LICENCE require identificationNumber, issuanceCountry, expiryDate (future date) and fileIds. NATIONAL_ID requires identificationNumber, issuanceCountry and fileIds (no expiryDate). PROOF_OF_ADDRESS is optional and may be supplied separately via proofOfAddressDocument on the parent request. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiryDate** | **string** | Expiry date of the driver\&#39;s licence. Must be a future date. Format: yyyy-mm-dd. | [default to undefined]
**fileIds** | **Array&lt;string&gt;** | Mandatory only if national_id is provided. Optional if either passport is provided. Provide the fileIds received in the response of Upload File API. | [default to undefined]
**identificationNumber** | **string** | Alphanumeric, maximum 30 characters. | [default to undefined]
**issuanceCountry** | **string** | Two-letter ISO country code representing the country where the identity document was issued. | [default to undefined]
**type** | **string** |  | [default to undefined]

## Example

```typescript
import { IdProofOfIdentityManual } from 'nium-client';

const instance: IdProofOfIdentityManual = {
    expiryDate,
    fileIds,
    identificationNumber,
    issuanceCountry,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

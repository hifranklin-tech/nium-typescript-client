# NlProofOfIdentityManual

One of PASSPORT, NATIONAL_ID or DRIVER_LICENCE. PASSPORT / DRIVER_LICENCE require expiryDate; NATIONAL_ID does not. 

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
import { NlProofOfIdentityManual } from 'nium-client';

const instance: NlProofOfIdentityManual = {
    expiryDate,
    fileIds,
    identificationNumber,
    issuanceCountry,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

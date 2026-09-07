# AuProofOfIdentityEKycDriversLicense

Driver\'s licence document for AU E_KYC. identificationNumber and referenceNumber regex depend on issuanceState. Validation patterns are returned in response metadata. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiryDate** | **string** | Expiry date of the driver\&#39;s licence. Must be a future date. Format: yyyy-mm-dd. | [default to undefined]
**identificationNumber** | **string** | Driver\&#39;s licence number. Regex varies by issuanceState. | [default to undefined]
**issuanceCountry** | **string** | Fixed value — AU. | [default to undefined]
**issuanceState** | **string** | Australian state/territory that issued the driver\&#39;s licence. | [default to undefined]
**referenceNumber** | **string** | Driver\&#39;s licence reference/card number. Regex varies by issuanceState. | [default to undefined]
**type** | **string** | Fixed value — driver_licence. | [default to undefined]

## Example

```typescript
import { AuProofOfIdentityEKycDriversLicense } from 'nium-client';

const instance: AuProofOfIdentityEKycDriversLicense = {
    expiryDate,
    identificationNumber,
    issuanceCountry,
    issuanceState,
    referenceNumber,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

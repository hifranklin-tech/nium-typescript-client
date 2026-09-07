# NzProofOfIdentityEKycDriversLicense

Driver\'s licence document for NZ E_KYC. identificationNumber is the licence document number and referenceNumber is the licence reference/card number. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiryDate** | **string** | Expiry date of the driver\&#39;s licence. Must be a future date. Format: yyyy-mm-dd. | [default to undefined]
**identificationNumber** | **string** | Driver\&#39;s licence document number. Alphanumeric, maximum 30 characters. | [default to undefined]
**issuanceCountry** | **string** | Two-letter ISO country code representing the country where the driver\&#39;s licence was issued. | [default to undefined]
**referenceNumber** | **string** | Driver\&#39;s licence reference/card number. Alphanumeric, maximum 30 characters. | [default to undefined]
**type** | **string** |  | [default to undefined]

## Example

```typescript
import { NzProofOfIdentityEKycDriversLicense } from 'nium-client';

const instance: NzProofOfIdentityEKycDriversLicense = {
    expiryDate,
    identificationNumber,
    issuanceCountry,
    referenceNumber,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

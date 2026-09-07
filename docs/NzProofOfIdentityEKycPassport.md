# NzProofOfIdentityEKycPassport

Passport document for NZ E_KYC. identificationNumber is the passport document number. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiryDate** | **string** | Expiry date of the passport. Must be a future date. Format: yyyy-mm-dd. | [default to undefined]
**identificationNumber** | **string** | Passport document number. For NZ passports use 1-2 letters followed by 6 digits. | [default to undefined]
**issuanceCountry** | **string** | Two-letter ISO country code representing the country where the passport was issued. | [default to undefined]
**type** | **string** |  | [default to undefined]

## Example

```typescript
import { NzProofOfIdentityEKycPassport } from 'nium-client';

const instance: NzProofOfIdentityEKycPassport = {
    expiryDate,
    identificationNumber,
    issuanceCountry,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

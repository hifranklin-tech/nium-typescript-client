# AuProofOfIdentityEKycPassport

Passport document for AU E_KYC. identificationNumber regex varies by issuanceCountry: AU → ^[A-Za-z]{1,2}\\d{7}$, NZ → ^[A-Za-z]{1,2}\\d{6}$, other → ^[a-zA-Z0-9]{1,14}$. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiryDate** | **string** | Expiry date of the passport. Must be a future date. Format: yyyy-mm-dd. | [default to undefined]
**identificationNumber** | **string** | 1–14 alphanumeric characters. Country-specific regex: AU → ^[A-Za-z]{1,2}\\d{7}$, NZ → ^[A-Za-z]{1,2}\\d{6}$, other → ^[a-zA-Z0-9]{1,14}$. | [default to undefined]
**issuanceCountry** | **string** | Two-letter ISO country code representing the country where the passport was issued. | [default to undefined]
**type** | **string** | Fixed value — passport. | [default to undefined]

## Example

```typescript
import { AuProofOfIdentityEKycPassport } from 'nium-client';

const instance: AuProofOfIdentityEKycPassport = {
    expiryDate,
    identificationNumber,
    issuanceCountry,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

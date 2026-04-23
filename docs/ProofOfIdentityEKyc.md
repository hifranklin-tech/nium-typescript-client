# ProofOfIdentityEKyc

Provide identity verification details for the entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Fixed value — NATIONAL_ID only. | [default to undefined]
**identificationNumber** | **string** | Provide last 4 digit or 9 digit of the SSN | [default to undefined]
**issuanceCountry** | **string** | Fixed value — US only. | [default to undefined]
**expiryDate** | **string** | Expiry date of the identity document. Required if type is passport or driver_licence. | [optional] [default to undefined]

## Example

```typescript
import { ProofOfIdentityEKyc } from 'nium-client';

const instance: ProofOfIdentityEKyc = {
    type,
    identificationNumber,
    issuanceCountry,
    expiryDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

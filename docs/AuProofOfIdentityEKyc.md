# AuProofOfIdentityEKyc

One of PASSPORT or DRIVER_LICENCE is mandatory. Validation regexes for identificationNumber and referenceNumber are returned in the response metadata and depend on issuanceCountry (for passport) or issuanceState (for driver_licence). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiryDate** | **string** | Expiry date of the driver\&#39;s licence. Must be a future date. Format: yyyy-mm-dd. | [default to undefined]
**identificationNumber** | **string** | Driver\&#39;s licence number. Regex varies by issuanceState. | [default to undefined]
**issuanceCountry** | **string** | Fixed value — AU. | [default to undefined]
**type** | **string** | Fixed value — driver_licence. | [default to undefined]
**issuanceState** | **string** | Australian state/territory that issued the driver\&#39;s licence. | [default to undefined]
**referenceNumber** | **string** | Driver\&#39;s licence reference/card number. Regex varies by issuanceState. | [default to undefined]

## Example

```typescript
import { AuProofOfIdentityEKyc } from 'nium-client';

const instance: AuProofOfIdentityEKyc = {
    expiryDate,
    identificationNumber,
    issuanceCountry,
    type,
    issuanceState,
    referenceNumber,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

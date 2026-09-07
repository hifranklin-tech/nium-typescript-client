# NzProofOfIdentityEKyc

One of PASSPORT or DRIVER_LICENCE is mandatory for NZ resident E_KYC. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiryDate** | **string** | Expiry date of the driver\&#39;s licence. Must be a future date. Format: yyyy-mm-dd. | [default to undefined]
**identificationNumber** | **string** | Driver\&#39;s licence document number. Alphanumeric, maximum 30 characters. | [default to undefined]
**issuanceCountry** | **string** | Two-letter ISO country code representing the country where the driver\&#39;s licence was issued. | [default to undefined]
**type** | **string** |  | [default to undefined]
**referenceNumber** | **string** | Driver\&#39;s licence reference/card number. Alphanumeric, maximum 30 characters. | [default to undefined]

## Example

```typescript
import { NzProofOfIdentityEKyc } from 'nium-client';

const instance: NzProofOfIdentityEKyc = {
    expiryDate,
    identificationNumber,
    issuanceCountry,
    type,
    referenceNumber,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

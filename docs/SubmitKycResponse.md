# SubmitKycResponse

Response returned after a successful KYC submission.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**biometricUrl** | **string** | biometric KYC URL. | [optional] [default to undefined]
**customerHashId** | **string** | Hash ID of the customer for whom KYC was submitted. | [default to undefined]
**entityType** | **string** | Customer entity type | [optional] [default to undefined]
**externalId** | **string** | External system identifier for this KYC submission. | [default to undefined]
**kycMode** | **string** | Customer entity Kyc Mode | [optional] [default to undefined]
**kycStatus** | **string** |  | [default to undefined]
**referenceId** | **string** | Unique reference ID for tracking this KYC submission. | [default to undefined]

## Example

```typescript
import { SubmitKycResponse } from 'nium-client';

const instance: SubmitKycResponse = {
    biometricUrl,
    customerHashId,
    entityType,
    externalId,
    kycMode,
    kycStatus,
    referenceId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

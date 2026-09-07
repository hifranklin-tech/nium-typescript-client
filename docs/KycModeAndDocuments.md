# KycModeAndDocuments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**biometricUrl** | **string** | eDocVerify biometric KYC URL. Returned only when kycMode is biometric_kyc and url exists in the database. Absent for other kycModes. | [optional] [default to undefined]
**documents** | [**Array&lt;DocumentDetailsResponse&gt;**](DocumentDetailsResponse.md) |  | [optional] [default to undefined]
**kycMode** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { KycModeAndDocuments } from 'nium-client';

const instance: KycModeAndDocuments = {
    biometricUrl,
    documents,
    kycMode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

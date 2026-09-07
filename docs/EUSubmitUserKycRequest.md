# EUSubmitUserKycRequest

EU submit-KYC payload. EU Phase 1 supports biometric_kyc only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | [**Array&lt;UserRequestDocument&gt;**](UserRequestDocument.md) | Optional documents to persist with the KYC submission. | [optional] [default to undefined]
**entityReferenceId** | **string** | userHashId or externalId of the user to submit KYC for. | [default to undefined]
**kycMode** | **string** | Only biometric_kyc is supported for users in EU Phase 1. | [default to undefined]
**region** | **string** | Region discriminator value (EU). | [default to undefined]

## Example

```typescript
import { EUSubmitUserKycRequest } from 'nium-client';

const instance: EUSubmitUserKycRequest = {
    documents,
    entityReferenceId,
    kycMode,
    region,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

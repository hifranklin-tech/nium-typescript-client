# BrKycRequest

Submit KYC Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityReferenceId** | **string** | referenceId of the entity returned in the response of the (https://docs.nium.com/api#tag/customer-onboarding-v5/POST/api/v5/client/{clientHashId}/customers) API. Alternatively, you may pass the externalId provided during customer creation. | [default to undefined]
**entityType** | **string** | Type of entity for which KYC is being submitted | [default to undefined]
**kycMode** | **string** | KYC verification mode. | [default to undefined]
**region** | **string** | Regulatory region where the customer is being onboarded. | [default to undefined]
**proofOfAddressDocument** | [**ProofOfAddress**](ProofOfAddress.md) |  | [optional] [default to undefined]
**proofOfIdentityDocument** | [**Array&lt;BrProofOfIdentityResidentManual&gt;**](BrProofOfIdentityResidentManual.md) | Provide identity verification details for the entity. One of PASSPORT or NATIONAL_ID is mandatory. | [default to undefined]

## Example

```typescript
import { BrKycRequest } from 'nium-client';

const instance: BrKycRequest = {
    entityReferenceId,
    entityType,
    kycMode,
    region,
    proofOfAddressDocument,
    proofOfIdentityDocument,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

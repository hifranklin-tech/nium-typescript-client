# NzIndividualStakeholderResidentKycRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityReferenceId** | **string** | referenceId of the entity returned in the response of the (https://docs.nium.com/api#tag/customer-onboarding-v5/POST/api/v5/client/{clientHashId}/customers) API. Alternatively, you may pass the externalId provided during customer creation. | [default to undefined]
**entityType** | **string** | Type of entity for which KYC is being submitted | [default to undefined]
**isResident** | **boolean** | Indicates whether the entity is a resident of NZ. | [default to undefined]
**kycMode** | **string** | KYC verification mode. | [default to undefined]
**proofOfIdentityDocument** | [**Array&lt;NzProofOfIdentityManual&gt;**](NzProofOfIdentityManual.md) | Provide identity verification details for the entity. PROOF_OF_ADDRESS is optional. | [default to undefined]
**region** | **string** | Regulatory region where the customer is being onboarded. | [default to undefined]
**proofOfAddressDocument** | [**ProofOfAddress**](ProofOfAddress.md) |  | [optional] [default to undefined]

## Example

```typescript
import { NzIndividualStakeholderResidentKycRequest } from 'nium-client';

const instance: NzIndividualStakeholderResidentKycRequest = {
    entityReferenceId,
    entityType,
    isResident,
    kycMode,
    proofOfIdentityDocument,
    region,
    proofOfAddressDocument,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

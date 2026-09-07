# CaIndividualStakeholderKycRequest

Step 3 — Select Resident status for INDIVIDUAL_STAKEHOLDER. isResident: true  → E_KYC (P0) or E_DOC_VERIFY (P1) or MANUAL_KYC (P2). isResident: false → E_DOC_VERIFY (P1) or MANUAL_KYC (P2). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityReferenceId** | **string** | referenceId of the entity returned in the response of the (/api#tag/customer-onboarding-v5/POST/api/v5/client/{clientHashId}/customers) API. Alternatively, you may pass the externalId provided during customer creation. | [default to undefined]
**entityType** | **string** | Type of entity for which KYC is being submitted | [default to undefined]
**isResident** | **boolean** | Indicates whether the entity is a resident of CA. | [default to undefined]
**kycMode** | **string** | KYC verification mode. Fixed value — manual_kyc. | [default to undefined]
**region** | **string** | Regulatory region where the customer is being onboarded. Fixed value - CA | [default to undefined]
**proofOfAddressDocument** | [**ProofOfAddress**](ProofOfAddress.md) |  | [optional] [default to undefined]
**proofOfIdentityDocument** | [**Array&lt;CaProofOfIdentityManual&gt;**](CaProofOfIdentityManual.md) |  | [optional] [default to undefined]
**stakeholderDetails** | [**CaStakeholderKycDetails**](CaStakeholderKycDetails.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CaIndividualStakeholderKycRequest } from 'nium-client';

const instance: CaIndividualStakeholderKycRequest = {
    entityReferenceId,
    entityType,
    isResident,
    kycMode,
    region,
    proofOfAddressDocument,
    proofOfIdentityDocument,
    stakeholderDetails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

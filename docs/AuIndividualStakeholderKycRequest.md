# AuIndividualStakeholderKycRequest

Step 3 — Select Resident status for INDIVIDUAL_STAKEHOLDER (AU). isResident: true  → E_KYC (P0) or E_DOC_VERIFY (P1) or MANUAL_KYC (P2). isResident: false → E_DOC_VERIFY (P0) or MANUAL_KYC (P1). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityReferenceId** | **string** | referenceId of the entity returned in the response of the (/api#tag/customer-onboarding-v5/POST/api/v5/client/{clientHashId}/customers) API. Alternatively, you may pass the externalId provided during customer creation. | [default to undefined]
**entityType** | **string** | Type of entity for which KYC is being submitted | [default to undefined]
**isResident** | **boolean** | Indicates whether the entity is a resident of AU. | [default to undefined]
**kycMode** | **string** | KYC verification mode. Fixed value — manual_kyc. | [default to undefined]
**proofOfIdentityDocument** | [**Array&lt;AuProofOfIdentityNonResidentManual&gt;**](AuProofOfIdentityNonResidentManual.md) | PASSPORT is mandatory. PROOF_OF_ADDRESS is optional. | [default to undefined]
**region** | **string** | Regulatory region where the customer is being onboarded. Fixed value - AU | [default to undefined]
**stakeholderDetails** | [**AuStakeholderKycDetails**](AuStakeholderKycDetails.md) |  | [optional] [default to undefined]
**proofOfAddressDocument** | [**ProofOfAddress**](ProofOfAddress.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AuIndividualStakeholderKycRequest } from 'nium-client';

const instance: AuIndividualStakeholderKycRequest = {
    entityReferenceId,
    entityType,
    isResident,
    kycMode,
    proofOfIdentityDocument,
    region,
    stakeholderDetails,
    proofOfAddressDocument,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

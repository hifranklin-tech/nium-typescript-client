# SgApplicantResidentManualKycRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityReferenceId** | **string** | referenceId of the entity returned in the response of the (/api#tag/customer-onboarding-v5/POST/api/v5/client/{clientHashId}/customers) API. Alternatively, you may pass the externalId provided during customer creation. | [default to undefined]
**entityType** | **string** | Type of entity for which KYC is being submitted | [default to undefined]
**isResident** | **boolean** | Indicates whether the entity is a resident of SG. | [default to undefined]
**kycMode** | **string** | KYC verification mode. Fixed value — manual_kyc. | [default to undefined]
**proofOfAddressDocument** | [**ProofOfAddress**](ProofOfAddress.md) |  | [optional] [default to undefined]
**proofOfIdentityDocument** | [**Array&lt;SgProofOfIdentityResidentManual&gt;**](SgProofOfIdentityResidentManual.md) | Provide identity verification details. One of PASSPORT or NATIONAL_ID is mandatory. PROOF_OF_ADDRESS is mandatory if PASSPORT is provided and optional if NATIONAL_ID is provided. | [default to undefined]
**region** | **string** | Regulatory region where the customer is being onboarded. Fixed value - SG | [default to undefined]

## Example

```typescript
import { SgApplicantResidentManualKycRequest } from 'nium-client';

const instance: SgApplicantResidentManualKycRequest = {
    entityReferenceId,
    entityType,
    isResident,
    kycMode,
    proofOfAddressDocument,
    proofOfIdentityDocument,
    region,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

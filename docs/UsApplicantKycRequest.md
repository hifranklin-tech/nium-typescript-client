# UsApplicantKycRequest

Step 3 — Select Resident status for APPLICANT. isResident: true  → E_KYC (P0) or MANUAL_KYC (P1). isResident: false → MANUAL_KYC only. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region** | **string** | Regulatory region where the customer is being onboarded. Fixed value - US | [default to undefined]
**entityType** | **string** | Type of entity for which KYC is being submitted | [default to undefined]
**isResident** | **boolean** | Indicates whether the entity is a resident of US. | [default to undefined]
**kycMode** | **string** | KYC verification mode. Fixed value — manual_kyc. | [default to undefined]
**entityReferenceId** | **string** | referenceId of the entity returned in the response of the (https://docs.nium.com/api#tag/customer-onboarding-v5/POST/api/v5/client/{clientHashId}/customers) API. Alternatively, you may pass the externalId provided during customer creation. | [default to undefined]
**proofOfAddressDocument** | [**ProofOfAddress**](ProofOfAddress.md) |  | [optional] [default to undefined]
**proofOfIdentityDocument** | [**Array&lt;ProofOfIdentityNonResidentManual&gt;**](ProofOfIdentityNonResidentManual.md) |  | [default to undefined]

## Example

```typescript
import { UsApplicantKycRequest } from 'nium-client';

const instance: UsApplicantKycRequest = {
    region,
    entityType,
    isResident,
    kycMode,
    entityReferenceId,
    proofOfAddressDocument,
    proofOfIdentityDocument,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

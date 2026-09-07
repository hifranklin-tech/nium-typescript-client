# AuApplicantResidentEKycRequest

Defines the KYC verification method for AU resident applicant. • e_kyc – Electronic identity verification that is automatically verified. • e_doc_verify – Electronic document verification. • manual_kyc – Identity verification that requires manual review by the Nium compliance team. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityReferenceId** | **string** | referenceId of the entity returned in the response of the (/api#tag/customer-onboarding-v5/POST/api/v5/client/{clientHashId}/customers) API. Alternatively, you may pass the externalId provided during customer creation. | [default to undefined]
**entityType** | **string** | Type of entity for which KYC is being submitted | [default to undefined]
**isResident** | **boolean** | Indicates whether the entity is a resident of AU. | [default to undefined]
**kycMode** | **string** | KYC verification mode. Fixed value — e_kyc. | [default to undefined]
**proofOfIdentityDocument** | [**Array&lt;AuProofOfIdentityEKyc&gt;**](AuProofOfIdentityEKyc.md) | One of PASSPORT or DRIVER_LICENCE is mandatory. | [default to undefined]
**region** | **string** | Regulatory region where the customer is being onboarded. Fixed value - AU | [default to undefined]

## Example

```typescript
import { AuApplicantResidentEKycRequest } from 'nium-client';

const instance: AuApplicantResidentEKycRequest = {
    entityReferenceId,
    entityType,
    isResident,
    kycMode,
    proofOfIdentityDocument,
    region,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# UsApplicantResidentEKycRequest

Defines the KYC verification method • e_kyc – Electronic identity verification that is automatically verified. • manual_kyc – Identity verification that requires manual review by the Nium compliance team. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region** | **string** | Regulatory region where the customer is being onboarded. Fixed value - US | [default to undefined]
**entityType** | **string** | Type of entity for which KYC is being submitted | [default to undefined]
**isResident** | **boolean** | Indicates whether the entity is a resident of US. | [default to undefined]
**kycMode** | **string** | KYC verification mode. Fixed value — e_kyc. | [default to undefined]
**entityReferenceId** | **string** | referenceId of the entity returned in the response of the (https://docs.nium.com/api#tag/customer-onboarding-v5/POST/api/v5/client/{clientHashId}/customers) API. Alternatively, you may pass the externalId provided during customer creation. | [default to undefined]
**proofOfIdentityDocument** | [**Array&lt;ProofOfIdentityEKyc&gt;**](ProofOfIdentityEKyc.md) |  | [default to undefined]

## Example

```typescript
import { UsApplicantResidentEKycRequest } from 'nium-client';

const instance: UsApplicantResidentEKycRequest = {
    region,
    entityType,
    isResident,
    kycMode,
    entityReferenceId,
    proofOfIdentityDocument,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

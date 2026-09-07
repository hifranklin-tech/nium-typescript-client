# EuIndividualStakeholderResidentManualKycRequest

Applies to UBO/TRUSTEE/PARTNER/SETTLOR (P1) for EU resident individual stakeholder. • manual_kyc – Identity verification that requires manual review by the Nium compliance team. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityReferenceId** | **string** | referenceId of the entity returned in the response of the (/api#tag/customer-onboarding-v5/POST/api/v5/client/{clientHashId}/customers) API. Alternatively, you may pass the externalId provided during customer creation. | [default to undefined]
**entityType** | **string** | Type of entity for which KYC is being submitted | [default to undefined]
**isResident** | **boolean** | Indicates whether the entity is a resident of EU. | [default to undefined]
**kycMode** | **string** | KYC verification mode. Fixed value — manual_kyc. | [default to undefined]
**personalCode** | **string** | Personal Code | [optional] [default to undefined]
**proofOfIdentityDocument** | [**Array&lt;EuProofOfIdentityManual&gt;**](EuProofOfIdentityManual.md) | One of PASSPORT or NATIONAL_ID is mandatory. | [default to undefined]
**region** | **string** | Regulatory region where the customer is being onboarded. Fixed value - EU | [default to undefined]

## Example

```typescript
import { EuIndividualStakeholderResidentManualKycRequest } from 'nium-client';

const instance: EuIndividualStakeholderResidentManualKycRequest = {
    entityReferenceId,
    entityType,
    isResident,
    kycMode,
    personalCode,
    proofOfIdentityDocument,
    region,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

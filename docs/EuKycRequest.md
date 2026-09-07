# EuKycRequest

Submit KYC Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityReferenceId** | **string** | referenceId of the entity returned in the response of the (/api#tag/customer-onboarding-v5/POST/api/v5/client/{clientHashId}/customers) API. Alternatively, you may pass the externalId provided during customer creation. | [default to undefined]
**entityType** | **string** | Type of entity for which KYC is being submitted | [default to undefined]
**isResident** | **boolean** | Indicates whether the entity is a resident of EU. | [default to undefined]
**kycMode** | **string** | KYC verification mode. Fixed value — manual_kyc. | [default to undefined]
**proofOfIdentityDocument** | [**Array&lt;EuProofOfIdentityManual&gt;**](EuProofOfIdentityManual.md) | One of PASSPORT or NATIONAL_ID is mandatory. | [default to undefined]
**region** | **string** | Regulatory region where the customer is being onboarded. Fixed value - EU | [default to undefined]
**personalCode** | **string** | Personal Code | [optional] [default to undefined]

## Example

```typescript
import { EuKycRequest } from 'nium-client';

const instance: EuKycRequest = {
    entityReferenceId,
    entityType,
    isResident,
    kycMode,
    proofOfIdentityDocument,
    region,
    personalCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

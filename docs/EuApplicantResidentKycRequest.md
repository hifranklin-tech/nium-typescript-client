# EuApplicantResidentKycRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityReferenceId** | **string** | referenceId of the entity returned in the response of the (https://docs.nium.com/api#tag/customer-onboarding-v5/POST/api/v5/client/{clientHashId}/customers) API. Alternatively, you may pass the externalId provided during customer creation. | [default to undefined]
**entityType** | **string** | Type of entity for which KYC is being submitted | [default to undefined]
**isResident** | **boolean** | Indicates whether the entity is a resident of EU. | [default to undefined]
**kycMode** | **string** | KYC verification mode. | [default to undefined]
**proofOfIdentityDocument** | [**Array&lt;EuSourceOfWealthProofOfIdentity&gt;**](EuSourceOfWealthProofOfIdentity.md) | Provide a source_of_wealth document. Mandatory when the entity is a PEP. | [optional] [default to undefined]
**region** | **string** | Regulatory region where the customer is being onboarded. | [default to undefined]

## Example

```typescript
import { EuApplicantResidentKycRequest } from 'nium-client';

const instance: EuApplicantResidentKycRequest = {
    entityReferenceId,
    entityType,
    isResident,
    kycMode,
    proofOfIdentityDocument,
    region,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

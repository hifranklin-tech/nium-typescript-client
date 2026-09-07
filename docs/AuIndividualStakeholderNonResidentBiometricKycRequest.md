# AuIndividualStakeholderNonResidentBiometricKycRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityReferenceId** | **string** | referenceId of the entity returned in the response of the (https://docs.nium.com/api#tag/customer-onboarding-v5/POST/api/v5/client/{clientHashId}/customers) API. Alternatively, you may pass the externalId provided during customer creation. | [default to undefined]
**entityType** | **string** | Type of entity for which KYC is being submitted | [default to undefined]
**isResident** | **boolean** | Indicates whether the entity is a resident of AU. | [default to undefined]
**kycMode** | **string** | KYC verification mode. | [default to undefined]
**region** | **string** | Regulatory region where the customer is being onboarded. | [default to undefined]
**stakeholderDetails** | [**AuStakeholderKycDetails**](AuStakeholderKycDetails.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AuIndividualStakeholderNonResidentBiometricKycRequest } from 'nium-client';

const instance: AuIndividualStakeholderNonResidentBiometricKycRequest = {
    entityReferenceId,
    entityType,
    isResident,
    kycMode,
    region,
    stakeholderDetails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

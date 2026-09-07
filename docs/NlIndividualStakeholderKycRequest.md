# NlIndividualStakeholderKycRequest

Step 3 — Select kycMode for INDIVIDUAL_STAKEHOLDER (NL). Representative/SIGNATORY → E_DOC_VERIFY. UBO/TRUSTEE/PARTNER → E_DOC_VERIFY (P0) or MANUAL_KYC (P1). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityReferenceId** | **string** | referenceId of the entity returned in the response of the (https://docs.nium.com/api#tag/customer-onboarding-v5/POST/api/v5/client/{clientHashId}/customers) API. Alternatively, you may pass the externalId provided during customer creation. | [default to undefined]
**entityType** | **string** | Type of entity for which KYC is being submitted | [default to undefined]
**kycMode** | **string** | KYC verification mode. | [default to undefined]
**region** | **string** | Regulatory region where the customer is being onboarded. | [default to undefined]
**proofOfAddressDocument** | [**ProofOfAddress**](ProofOfAddress.md) |  | [optional] [default to undefined]
**proofOfIdentityDocument** | [**Array&lt;NlProofOfIdentityManual&gt;**](NlProofOfIdentityManual.md) | One of PASSPORT, NATIONAL_ID or DRIVER_LICENCE is mandatory. | [default to undefined]

## Example

```typescript
import { NlIndividualStakeholderKycRequest } from 'nium-client';

const instance: NlIndividualStakeholderKycRequest = {
    entityReferenceId,
    entityType,
    kycMode,
    region,
    proofOfAddressDocument,
    proofOfIdentityDocument,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

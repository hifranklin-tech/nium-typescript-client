# UkIndividualStakeholderKycRequest

Step 3 — Select resident status for INDIVIDUAL_STAKEHOLDER (UK). Representative/SIGNATORY → E_DOC_VERIFY. UBO/TRUSTEE/PARTNER — Resident (address.country=UK): E_KYC (P0), E_DOC_VERIFY (P1), MANUAL_KYC (P2). UBO/TRUSTEE/PARTNER — Non-resident: E_DOC_VERIFY (P0), MANUAL_KYC (P1). DIRECTOR and other positions: KYC not required (screening only). When more than one position is provided, the position of highest priority listed here is used. SOURCE_OF_WEALTH (sourceOfWealthDocument) is required when isPEP is true (all modes). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityReferenceId** | **string** | referenceId of the entity returned in the response of the (/api#tag/customer-onboarding-v5/POST/api/v5/client/{clientHashId}/customers) API. Alternatively, you may pass the externalId provided during customer creation. | [default to undefined]
**entityType** | **string** | Type of entity for which KYC is being submitted | [default to undefined]
**isResident** | **boolean** | false when address.country is not UK. | [default to undefined]
**kycMode** | **string** | KYC verification mode. Fixed value — manual_kyc. | [default to undefined]
**proofOfIdentityDocument** | [**Array&lt;UkIndividualStakeholderProofOfIdentityManual&gt;**](UkIndividualStakeholderProofOfIdentityManual.md) | One of PASSPORT, NATIONAL_ID or DRIVER_LICENCE is mandatory. | [default to undefined]
**region** | **string** | Regulatory region where the customer is being onboarded. Fixed value - UK | [default to undefined]
**proofOfAddressDocument** | [**ProofOfAddress**](ProofOfAddress.md) |  | [default to undefined]

## Example

```typescript
import { UkIndividualStakeholderKycRequest } from 'nium-client';

const instance: UkIndividualStakeholderKycRequest = {
    entityReferenceId,
    entityType,
    isResident,
    kycMode,
    proofOfIdentityDocument,
    region,
    proofOfAddressDocument,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

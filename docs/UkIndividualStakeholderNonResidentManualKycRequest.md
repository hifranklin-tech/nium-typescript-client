# UkIndividualStakeholderNonResidentManualKycRequest

Applies to UBO/TRUSTEE/PARTNER (P1) when non-resident. One of PASSPORT, NATIONAL_ID or DRIVER_LICENCE is mandatory; PROOF_OF_ADDRESS is mandatory. PASSPORT/DRIVER_LICENCE: documentNumber, expiryDate (future date, yyyy-mm-dd), issuanceCountry, file. NATIONAL_ID: documentNumber, issuanceCountry, file. SOURCE_OF_WEALTH (sourceOfWealthDocument) is required when isPEP is true. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityReferenceId** | **string** | referenceId of the entity returned in the response of the (/api#tag/customer-onboarding-v5/POST/api/v5/client/{clientHashId}/customers) API. Alternatively, you may pass the externalId provided during customer creation. | [default to undefined]
**entityType** | **string** | Type of entity for which KYC is being submitted | [default to undefined]
**isResident** | **boolean** | false when address.country is not UK. | [default to undefined]
**kycMode** | **string** | KYC verification mode. Fixed value — manual_kyc. | [default to undefined]
**proofOfAddressDocument** | [**ProofOfAddress**](ProofOfAddress.md) |  | [default to undefined]
**proofOfIdentityDocument** | [**Array&lt;UkIndividualStakeholderProofOfIdentityManual&gt;**](UkIndividualStakeholderProofOfIdentityManual.md) | One of PASSPORT, NATIONAL_ID or DRIVER_LICENCE is mandatory. | [default to undefined]
**region** | **string** | Regulatory region where the customer is being onboarded. Fixed value - UK | [default to undefined]

## Example

```typescript
import { UkIndividualStakeholderNonResidentManualKycRequest } from 'nium-client';

const instance: UkIndividualStakeholderNonResidentManualKycRequest = {
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

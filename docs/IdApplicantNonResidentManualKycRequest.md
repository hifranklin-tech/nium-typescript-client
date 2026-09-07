# IdApplicantNonResidentManualKycRequest

Manual KYC (P1) for ID non-resident corporate applicant. One of PASSPORT, NATIONAL_ID or DRIVER_LICENCE (driver_licence) is mandatory; PROOF_OF_ADDRESS is optional (proofOfAddressDocument). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityReferenceId** | **string** | referenceId of the entity returned in the response of the (/api#tag/customer-onboarding-v5/POST/api/v5/client/{clientHashId}/customers) API. Alternatively, you may pass the externalId provided during customer creation. | [default to undefined]
**entityType** | **string** | Type of entity for which KYC is being submitted | [default to undefined]
**isResident** | **boolean** | Indicates whether the entity is a resident of Indonesia (ID). | [default to undefined]
**kycMode** | **string** | KYC verification mode. Fixed value — manual_kyc. | [default to undefined]
**proofOfAddressDocument** | [**ProofOfAddress**](ProofOfAddress.md) |  | [optional] [default to undefined]
**proofOfIdentityDocument** | [**Array&lt;IdProofOfIdentityManual&gt;**](IdProofOfIdentityManual.md) | PASSPORT and DRIVER_LICENCE require identificationNumber, issuanceCountry, expiryDate (future date) and fileIds. NATIONAL_ID requires identificationNumber, issuanceCountry and fileIds. identificationNumber is alphanumeric, max 30 characters. | [default to undefined]
**region** | **string** | Regulatory region where the customer is being onboarded. Fixed value - ID | [default to undefined]

## Example

```typescript
import { IdApplicantNonResidentManualKycRequest } from 'nium-client';

const instance: IdApplicantNonResidentManualKycRequest = {
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

# UkIndividualCustomerKycRequest

Customer and childCustomer-Payroll → E_DOC_VERIFY. childCustomer-spendManagement (employee) → MANUAL_KYC. When more than one position is provided, the position of highest priority listed here is used. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityReferenceId** | **string** | referenceId of the entity returned in the response of the (/api#tag/customer-onboarding-v5/POST/api/v5/client/{clientHashId}/customers) API. Alternatively, you may pass the externalId provided during customer creation. | [default to undefined]
**entityType** | **string** | Type of entity for which KYC is being submitted | [default to undefined]
**kycMode** | **string** | KYC verification mode. Fixed value — manual_kyc. | [default to undefined]
**region** | **string** | Regulatory region where the customer is being onboarded. Fixed value - UK | [default to undefined]
**proofOfAddressDocument** | [**ProofOfAddress**](ProofOfAddress.md) |  | [default to undefined]
**proofOfIdentityDocument** | [**Array&lt;UkProofOfIdentityManual&gt;**](UkProofOfIdentityManual.md) | One of PASSPORT, NATIONAL_ID or DRIVER_LICENCE is mandatory. | [default to undefined]

## Example

```typescript
import { UkIndividualCustomerKycRequest } from 'nium-client';

const instance: UkIndividualCustomerKycRequest = {
    entityReferenceId,
    entityType,
    kycMode,
    region,
    proofOfAddressDocument,
    proofOfIdentityDocument,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

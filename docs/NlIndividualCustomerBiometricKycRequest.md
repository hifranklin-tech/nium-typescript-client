# NlIndividualCustomerBiometricKycRequest

Defines the KYC verification method for NL individual customer (including childCustomer-Payroll). • biometric_kyc – Electronic document verification, automatically verified. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityReferenceId** | **string** | referenceId of the entity returned in the response of the (https://docs.nium.com/api#tag/customer-onboarding-v5/POST/api/v5/client/{clientHashId}/customers) API. Alternatively, you may pass the externalId provided during customer creation. | [optional] [default to undefined]
**entityType** | **string** | Type of entity for which KYC is being submitted | [optional] [default to undefined]
**kycMode** | **string** | KYC verification mode. | [optional] [default to undefined]
**region** | **string** | Regulatory region where the customer is being onboarded. | [optional] [default to undefined]

## Example

```typescript
import { NlIndividualCustomerBiometricKycRequest } from 'nium-client';

const instance: NlIndividualCustomerBiometricKycRequest = {
    entityReferenceId,
    entityType,
    kycMode,
    region,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

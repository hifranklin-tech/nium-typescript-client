# ProductApplicantKycUrl

Object to contain the KYC redirect URL of the applicant. Returned only if applicant redirectURL is available based on the applicant kycMode.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**redirectUrl** | **string** | Returned only if stakeholder redirectURL is available based on the stakeholder kycMode. | [optional] [default to undefined]
**referenceId** | **string** | ReferenceId of the stakeholder, sent in the request of Onboard Corp Customer API. | [optional] [default to undefined]

## Example

```typescript
import { ProductApplicantKycUrl } from 'nium-client';

const instance: ProductApplicantKycUrl = {
    redirectUrl,
    referenceId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# OnboardingApplicationProgressResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | Status of the application filled using Onboarding Forms | [optional] [default to undefined]
**completedSections** | [**CompletedSections**](CompletedSections.md) |  | [optional] [default to undefined]
**redirectUrl** | **string** | Applicant KYC URL, if the applicant is required to complete KYC in a third party vendor | [optional] [default to undefined]
**expiry** | **string** | Expiry in epoch for the applicant KYC URL. | [optional] [default to undefined]
**submissionErrors** | [**Array&lt;ApiErrorDTO&gt;**](ApiErrorDTO.md) |  | [optional] [default to undefined]
**customerHashId** | **string** | customerHashId generated when customer is created in Nium | [optional] [default to undefined]
**walletHashId** | **string** | walletHashId,  generated when customer is created in Nium | [optional] [default to undefined]

## Example

```typescript
import { OnboardingApplicationProgressResponse } from 'nium-client';

const instance: OnboardingApplicationProgressResponse = {
    status,
    completedSections,
    redirectUrl,
    expiry,
    submissionErrors,
    customerHashId,
    walletHashId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

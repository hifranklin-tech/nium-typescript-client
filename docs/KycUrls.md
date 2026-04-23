# KycUrls

This object contains the KYC redirectURLs of applicant and individual stakeholders. Alternately you can call Customer Details API to get the referenceId or redirectURL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicantKycUrl** | [**ProductApplicantKycUrl**](ProductApplicantKycUrl.md) |  | [optional] [default to undefined]
**stakeholderKycUrls** | [**Array&lt;ProductStakeholderKycUrls&gt;**](ProductStakeholderKycUrls.md) | Returned only if any of the applicant redirectURL is available based on the kycMode. This object contains redirectURL and referenceId of the stakeholder for whom the  redirectURL is issued. In case referenceId not provided in the request of Onboard Corporate Customer, firstName, middleName, lastName provided in this response can be used for identifying the stakeholder.  | [optional] [default to undefined]

## Example

```typescript
import { KycUrls } from 'nium-client';

const instance: KycUrls = {
    applicantKycUrl,
    stakeholderKycUrls,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

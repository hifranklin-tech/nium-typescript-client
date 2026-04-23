# ProductStakeholderKycUrls

Returned only if any of the applicant redirectURL is available based on the kycMode. This object contains redirectURL and referenceId of the stakeholder for whom the  redirectURL is issued. In case referenceId not provided in the request of Onboard Corporate Customer, firstName, middleName, lastName provided in this response can be used for identifying the stakeholder. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**redirectUrl** | **string** | Returned only if stakeholder redirectURL is available based on the stakeholder kycMode. | [optional] [default to undefined]
**referenceId** | **string** | ReferenceId of the stakeholder, sent in the request of Onboard Corp Customer API. | [optional] [default to undefined]
**firstName** | **string** | First name of the stakeholder as provided in the request of the Onboard Corporate Customer API. | [optional] [default to undefined]
**middleName** | **string** | Middle name of the stakeholder as provided in the request of the Onboard Corporate Customer API. | [optional] [default to undefined]
**lastName** | **string** | Last name of the stakeholder as provided in the request of the Onboard Corporate Customer API. | [optional] [default to undefined]
**dateOfBirth** | **string** | Date of birth of the stakeholder as provided in the request of the Onboard Corporate Customer API. | [optional] [default to undefined]
**nationality** | **string** | Nationality of the stakeholder as provided in the request of the Onboard Corporate Customer API. | [optional] [default to undefined]

## Example

```typescript
import { ProductStakeholderKycUrls } from 'nium-client';

const instance: ProductStakeholderKycUrls = {
    redirectUrl,
    referenceId,
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    nationality,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

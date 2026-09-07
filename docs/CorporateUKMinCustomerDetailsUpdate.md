# CorporateUKMinCustomerDetailsUpdate

Contains update customer details for corporate, UK region, minimum kycType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalScaReferenceId** | **string** | The SCA Reference ID generated as part of SCA (Strong Customer Authentication). | [default to undefined]
**externalId** | **string** | externalId client can provide for the customer, that can be used as an identifier later | [default to undefined]
**kycType** | **string** | The type of KYC that will be performed on this customer | [default to 'full']
**region** | **string** | Regulatory region under which the client is onboarded | [default to undefined]
**segment** | **string** | Defines the customer classification that drives applicable pricing | [optional] [default to undefined]
**tags** | [**Array&lt;TagsInner&gt;**](TagsInner.md) |  | [optional] [default to undefined]
**type** | **string** | Type of the customer individual / corporate | [default to undefined]
**addresses** | [**CorporateBRMinCustomerDetailsAllOfAddresses**](CorporateBRMinCustomerDetailsAllOfAddresses.md) |  | [default to undefined]
**businessName** | **string** | Registered name of the business | [default to undefined]
**businessRegistrationNumber** | **string** | Official registration number | [default to undefined]
**businessType** | **string** | Legal entity type of the corporate customer | [default to undefined]
**externalRiskSeverity** | **string** | External risk severity rating | [default to undefined]
**fiOnboardingDate** | **string** | Date when the customer was onboarded at the FI | [default to undefined]
**natureOfBusiness** | [**NatureOfBusiness**](NatureOfBusiness.md) |  | [default to undefined]
**registeredDate** | **string** | date of registration of the business | [default to undefined]
**taxDetails** | [**Array&lt;UkSgMinCorporateTaxDetails&gt;**](UkSgMinCorporateTaxDetails.md) | List of tax details | [optional] [default to undefined]
**website** | **string** | website of the corporate customer | [optional] [default to undefined]
**applicant** | [**UkSgMinApplicantDetailsUpdate**](UkSgMinApplicantDetailsUpdate.md) |  | [optional] [default to undefined]
**stakeholders** | [**UkSgMinApplicantAndStakeholderDetailsUpdateStakeholders**](UkSgMinApplicantAndStakeholderDetailsUpdateStakeholders.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CorporateUKMinCustomerDetailsUpdate } from 'nium-client';

const instance: CorporateUKMinCustomerDetailsUpdate = {
    externalScaReferenceId,
    externalId,
    kycType,
    region,
    segment,
    tags,
    type,
    addresses,
    businessName,
    businessRegistrationNumber,
    businessType,
    externalRiskSeverity,
    fiOnboardingDate,
    natureOfBusiness,
    registeredDate,
    taxDetails,
    website,
    applicant,
    stakeholders,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

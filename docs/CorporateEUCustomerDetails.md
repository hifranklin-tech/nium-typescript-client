# CorporateEUCustomerDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of the customer individual / corporate | [default to undefined]
**kycType** | **string** | The type of KYC that will be performed on this customer | [default to undefined]
**region** | **string** | Regulatory region under which the client is onboarded | [default to undefined]
**externalId** | **string** | externalId client can provide for the customer, that can be used as an identifier later | [optional] [default to undefined]
**tags** | [**Array&lt;TagsInner&gt;**](TagsInner.md) |  | [optional] [default to undefined]
**segment** | **string** | Defines the customer classification that drives applicable pricing | [optional] [default to undefined]
**businessName** | **string** | Registered name of the business | [default to undefined]
**businessRegistrationNumber** | **string** | Official registration number | [default to undefined]
**registeredDate** | **string** | date of registration of the business | [default to undefined]
**registeredCountry** | **string** | country of registration of the business. | [default to undefined]
**website** | **string** | website of the corporate customer | [optional] [default to undefined]
**sizeOfBusiness** | [**CorporateAUMinCustomerDetailsAllOfSizeOfBusiness**](CorporateAUMinCustomerDetailsAllOfSizeOfBusiness.md) |  | [default to undefined]
**sourceOfFunds** | **string** | Describes where the money used in transactions or account funding comes from. Required for USD funding. | [optional] [default to undefined]
**taxDetails** | [**Array&lt;TaxDetails2&gt;**](TaxDetails2.md) | List of tax details | [optional] [default to undefined]
**businessType** | **string** | Legal entity type of the corporate stakeholder of the company | [default to undefined]
**natureOfBusiness** | [**NatureOfBusiness**](NatureOfBusiness.md) |  | [default to undefined]
**expectedAccountUsage** | [**ExpectedAccountUsageDTO**](ExpectedAccountUsageDTO.md) |  | [default to undefined]
**addresses** | [**CorporateBZMinCustomerDetailsAllOfAddresses**](CorporateBZMinCustomerDetailsAllOfAddresses.md) |  | [default to undefined]
**applicant** | [**UKMinApplicantDetails**](UKMinApplicantDetails.md) |  | [default to undefined]
**stakeholders** | [**CorporateAUMinCustomerDetailsCreateAllOfStakeholders**](CorporateAUMinCustomerDetailsCreateAllOfStakeholders.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CorporateEUCustomerDetails } from 'nium-client';

const instance: CorporateEUCustomerDetails = {
    type,
    kycType,
    region,
    externalId,
    tags,
    segment,
    businessName,
    businessRegistrationNumber,
    registeredDate,
    registeredCountry,
    website,
    sizeOfBusiness,
    sourceOfFunds,
    taxDetails,
    businessType,
    natureOfBusiness,
    expectedAccountUsage,
    addresses,
    applicant,
    stakeholders,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

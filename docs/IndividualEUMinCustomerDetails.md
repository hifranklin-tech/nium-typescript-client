# IndividualEUMinCustomerDetails

Contains customer details for EU, Individual and minimum kycType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of the customer individual / corporate | [default to undefined]
**kycType** | **string** | The type of KYC that will be performed on this customer | [default to undefined]
**region** | **string** | Regulatory region under which the client is onboarded | [default to undefined]
**externalId** | **string** | externalId client can provide for the customer, that can be used as an identifier later | [optional] [default to undefined]
**tags** | [**Array&lt;TagsInner&gt;**](TagsInner.md) |  | [optional] [default to undefined]
**segment** | **string** | Defines the customer classification that drives applicable pricing | [optional] [default to undefined]
**firstName** | **string** | First name of the customer | [default to undefined]
**middleName** | **string** | First name of the customer | [optional] [default to undefined]
**lastName** | **string** | Last name of the customer | [default to undefined]
**email** | **string** | Email of the customer | [default to undefined]
**nationality** | **string** | Nationality of the customer | [default to undefined]
**dateOfBirth** | **string** | DOB of the customer | [default to undefined]
**mobile** | **string** | Numeric mobile number without the country code | [optional] [default to undefined]
**mobileCountryCode** | **string** | Numeric country code for mobile numbers | [optional] [default to undefined]
**incomeSourceType** | **string** | Nature of the customers primary work or business category, such as gig_worker, contractor, freelancer, salaried employee, small business owner etc. | [default to undefined]
**annualIncome** | **string** | The customers total estimated income for a year | [default to undefined]
**sourceOfFunds** | **string** | Describes where the money used in transactions or account funding comes from. Required for USD funding. | [optional] [default to undefined]
**taxDetails** | [**Array&lt;TaxDetails2&gt;**](TaxDetails2.md) | List of tax details | [optional] [default to undefined]
**website** | **string** | Provide links to your company website, online stores, apps, social media profiles etc. | [optional] [default to undefined]
**natureOfBusiness** | [**NatureOfBusiness**](NatureOfBusiness.md) |  | [default to undefined]
**expectedAccountUsage** | [**ExpectedAccountUsageDTO**](ExpectedAccountUsageDTO.md) |  | [default to undefined]
**billingAddress** | [**AddressDTO**](AddressDTO.md) |  | [default to undefined]
**documents** | [**Array&lt;IndividualEUMinCustomerDetailsAllOfDocuments&gt;**](IndividualEUMinCustomerDetailsAllOfDocuments.md) | This field accepts list of document details for the customer | [default to undefined]

## Example

```typescript
import { IndividualEUMinCustomerDetails } from 'nium-client';

const instance: IndividualEUMinCustomerDetails = {
    type,
    kycType,
    region,
    externalId,
    tags,
    segment,
    firstName,
    middleName,
    lastName,
    email,
    nationality,
    dateOfBirth,
    mobile,
    mobileCountryCode,
    incomeSourceType,
    annualIncome,
    sourceOfFunds,
    taxDetails,
    website,
    natureOfBusiness,
    expectedAccountUsage,
    billingAddress,
    documents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

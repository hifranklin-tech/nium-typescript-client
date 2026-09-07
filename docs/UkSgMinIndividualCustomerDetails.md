# UkSgMinIndividualCustomerDetails

Contains customer details for UK/SG, Individual and minimum kycType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalId** | **string** | externalId client can provide for the customer, that can be used as an identifier later | [default to undefined]
**kycType** | **string** | The type of KYC that will be performed on this customer | [default to 'full']
**region** | **string** | Regulatory region under which the client is onboarded | [default to undefined]
**segment** | **string** | Defines the customer classification that drives applicable pricing | [optional] [default to undefined]
**tags** | [**Array&lt;TagsInner&gt;**](TagsInner.md) |  | [optional] [default to undefined]
**type** | **string** | Type of the customer individual / corporate | [default to undefined]
**billingAddress** | [**AddressDTO**](AddressDTO.md) |  | [default to undefined]
**dateOfBirth** | **string** | DOB of the customer | [default to undefined]
**documents** | [**Array&lt;Documents&gt;**](Documents.md) | This field accepts list of document details for the customer | [optional] [default to undefined]
**email** | **string** | Email of the customer | [default to undefined]
**externalRiskSeverity** | **string** | External risk severity rating | [optional] [default to undefined]
**fiOnboardingDate** | **string** | Date when the customer was onboarded at the FI | [optional] [default to undefined]
**firstName** | **string** | First name of the customer | [default to undefined]
**gender** | **string** | Gender of the customer | [optional] [default to undefined]
**lastName** | **string** | Last name of the customer | [default to undefined]
**middleName** | **string** | Middle name of the customer | [optional] [default to undefined]
**mobile** | **string** | Numeric mobile number without the country code | [optional] [default to undefined]
**mobileCountryCode** | **string** | Numeric country code for mobile numbers | [optional] [default to undefined]
**nationality** | **string** | Nationality of the customer | [optional] [default to undefined]
**natureOfBusiness** | [**NatureOfBusiness**](NatureOfBusiness.md) |  | [default to undefined]
**taxDetails** | [**Array&lt;UkSgMinTaxDetails&gt;**](UkSgMinTaxDetails.md) | List of tax details | [optional] [default to undefined]
**website** | **string** | Website of the customer | [optional] [default to undefined]

## Example

```typescript
import { UkSgMinIndividualCustomerDetails } from 'nium-client';

const instance: UkSgMinIndividualCustomerDetails = {
    externalId,
    kycType,
    region,
    segment,
    tags,
    type,
    billingAddress,
    dateOfBirth,
    documents,
    email,
    externalRiskSeverity,
    fiOnboardingDate,
    firstName,
    gender,
    lastName,
    middleName,
    mobile,
    mobileCountryCode,
    nationality,
    natureOfBusiness,
    taxDetails,
    website,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

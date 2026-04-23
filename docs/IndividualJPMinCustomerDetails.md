# IndividualJPMinCustomerDetails

Contains customer details for JP, Individual and minimum kycType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of the customer individual / corporate | [default to undefined]
**kycType** | **string** | The type of KYC that will be performed on this customer | [default to undefined]
**region** | **string** | Regulatory region under which the client is onboarded | [default to undefined]
**externalId** | **string** | externalId client can provide for the customer, that can be used as an identifier later | [optional] [default to undefined]
**firstName** | **string** | First name of the customer | [default to undefined]
**middleName** | **string** | First name of the customer | [optional] [default to undefined]
**lastName** | **string** | Last name of the customer | [default to undefined]
**firstName_local** | **string** | The first name in the local language or native script of the country of residence or nationality (for example, non-Latin characters). | [default to undefined]
**lastName_local** | **string** | The last name (surname) in the local language or native script of the country of residence or nationality. | [default to undefined]
**email** | **string** | Email of the customer | [default to undefined]
**nationality** | **string** | Nationality of the customer | [default to undefined]
**dateOfBirth** | **string** | DOB of the customer | [default to undefined]
**mobile** | **string** | Numeric mobile number without the country code | [optional] [default to undefined]
**mobileCountryCode** | **string** | Numeric country code for mobile numbers | [optional] [default to undefined]
**website** | **string** | Provide links to your company website, online stores, apps, social media profiles etc. | [optional] [default to undefined]
**natureOfBusiness** | [**NatureOfBusiness**](NatureOfBusiness.md) |  | [default to undefined]
**expectedAccountUsage** | [**ExpectedAccountUsageDTO**](ExpectedAccountUsageDTO.md) |  | [default to undefined]
**billingAddress** | [**AddressDTO**](AddressDTO.md) |  | [default to undefined]
**documents** | [**Array&lt;IndividualJPMinCustomerDetailsAllOfDocuments&gt;**](IndividualJPMinCustomerDetailsAllOfDocuments.md) | This field accepts list of document details for the customer | [default to undefined]

## Example

```typescript
import { IndividualJPMinCustomerDetails } from 'nium-client';

const instance: IndividualJPMinCustomerDetails = {
    type,
    kycType,
    region,
    externalId,
    firstName,
    middleName,
    lastName,
    firstName_local,
    lastName_local,
    email,
    nationality,
    dateOfBirth,
    mobile,
    mobileCountryCode,
    website,
    natureOfBusiness,
    expectedAccountUsage,
    billingAddress,
    documents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

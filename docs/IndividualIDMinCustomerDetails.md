# IndividualIDMinCustomerDetails

Contains customer details for ID, Individual and minimum kycType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalId** | **string** | externalId client can provide for the customer, that can be used as an identifier later | [optional] [default to undefined]
**kycType** | **string** | The type of KYC that will be performed on this customer | [default to 'full']
**region** | **string** | Regulatory region under which the client is onboarded | [default to undefined]
**tags** | [**Array&lt;TagsInner&gt;**](TagsInner.md) |  | [optional] [default to undefined]
**type** | **string** | Type of the customer individual / corporate | [default to undefined]
**dateOfBirth** | **string** | DOB of the customer | [default to undefined]
**email** | **string** | Email of the customer | [default to undefined]
**firstName** | **string** | First name of the customer | [default to undefined]
**lastName** | **string** | Last name of the customer | [default to undefined]
**middleName** | **string** | First name of the customer | [optional] [default to undefined]
**mobile** | **string** | Numeric mobile number without the country code | [optional] [default to undefined]
**mobileCountryCode** | **string** | Numeric country code for mobile numbers | [optional] [default to undefined]
**nationality** | **string** | Nationality of the customer | [default to undefined]
**billingAddress** | [**AddressDTO**](AddressDTO.md) |  | [default to undefined]
**documents** | [**Array&lt;IndividualIDMinCustomerDetailsAllOfDocuments&gt;**](IndividualIDMinCustomerDetailsAllOfDocuments.md) | This field accepts list of document details for the customer | [default to undefined]
**expectedAccountUsage** | [**ExpectedAccountUsageDTO**](ExpectedAccountUsageDTO.md) |  | [default to undefined]
**natureOfBusiness** | [**NatureOfBusiness**](NatureOfBusiness.md) |  | [default to undefined]
**website** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { IndividualIDMinCustomerDetails } from 'nium-client';

const instance: IndividualIDMinCustomerDetails = {
    externalId,
    kycType,
    region,
    tags,
    type,
    dateOfBirth,
    email,
    firstName,
    lastName,
    middleName,
    mobile,
    mobileCountryCode,
    nationality,
    billingAddress,
    documents,
    expectedAccountUsage,
    natureOfBusiness,
    website,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

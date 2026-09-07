# BaseIndividualIDFullCustomerDetailsWithBankDetails

Contains customer details for ID, Individual and full kycType

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
**mobile** | **string** | Numeric mobile number without the country code | [default to undefined]
**mobileCountryCode** | **string** | Numeric country code for mobile numbers | [default to undefined]
**nationality** | **string** | Nationality of the customer | [default to undefined]
**applicantDeclaration** | **boolean** |  | [default to undefined]
**applicantDeclarationTimeStamp** | **string** |  | [default to undefined]
**bankAccountDetails** | [**BankAccountDetails2**](BankAccountDetails2.md) |  | [default to undefined]
**deviceDetails** | [**DeviceDetails**](DeviceDetails.md) |  | [default to undefined]
**expectedAccountUsage** | [**BaseIndividualIDFullCustomerDetailsWithBankDetailsAllOfExpectedAccountUsage**](BaseIndividualIDFullCustomerDetailsWithBankDetailsAllOfExpectedAccountUsage.md) |  | [default to undefined]
**kycStatus** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { BaseIndividualIDFullCustomerDetailsWithBankDetails } from 'nium-client';

const instance: BaseIndividualIDFullCustomerDetailsWithBankDetails = {
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
    applicantDeclaration,
    applicantDeclarationTimeStamp,
    bankAccountDetails,
    deviceDetails,
    expectedAccountUsage,
    kycStatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

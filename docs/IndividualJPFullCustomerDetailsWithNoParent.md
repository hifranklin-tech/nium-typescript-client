# IndividualJPFullCustomerDetailsWithNoParent


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
**firstName_local** | **string** | The first name in the local language or native script of the country of residence or nationality (for example, non-Latin characters). | [default to undefined]
**lastName** | **string** | Last name of the customer | [default to undefined]
**lastName_local** | **string** | The last name (surname) in the local language or native script of the country of residence or nationality. | [default to undefined]
**middleName** | **string** | First name of the customer | [optional] [default to undefined]
**mobile** | **string** | Numeric mobile number without the country code | [default to undefined]
**mobileCountryCode** | **string** | Numeric country code for mobile numbers | [default to undefined]
**nationality** | **string** | Nationality of the customer | [default to undefined]
**applicantDeclaration** | **boolean** |  | [default to undefined]
**applicantDeclarationTimeStamp** | **string** |  | [default to undefined]
**bankAccountDetails** | [**BankAccountDetails2**](BankAccountDetails2.md) |  | [default to undefined]
**deviceDetails** | [**DeviceDetails**](DeviceDetails.md) |  | [default to undefined]
**expectedAccountUsage** | [**BaseIndividualBRFullCustomerDetailsAllOfExpectedAccountUsage**](BaseIndividualBRFullCustomerDetailsAllOfExpectedAccountUsage.md) |  | [default to undefined]
**kycStatus** | **string** |  | [optional] [default to undefined]
**occupation** | **string** | Occupation of the individual customer | [default to undefined]
**billingAddress** | [**AddressDTO**](AddressDTO.md) |  | [default to undefined]

## Example

```typescript
import { IndividualJPFullCustomerDetailsWithNoParent } from 'nium-client';

const instance: IndividualJPFullCustomerDetailsWithNoParent = {
    externalId,
    kycType,
    region,
    tags,
    type,
    dateOfBirth,
    email,
    firstName,
    firstName_local,
    lastName,
    lastName_local,
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
    occupation,
    billingAddress,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# BaseHKIndividualCustomerDetails


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
**email** | **string** | Email of the customer | [default to undefined]
**nationality** | **string** | Nationality of the customer | [default to undefined]
**dateOfBirth** | **string** | DOB of the customer | [default to undefined]
**mobile** | **string** | Numeric mobile number without the country code | [optional] [default to undefined]
**mobileCountryCode** | **string** | Numeric country code for mobile numbers | [optional] [default to undefined]

## Example

```typescript
import { BaseHKIndividualCustomerDetails } from 'nium-client';

const instance: BaseHKIndividualCustomerDetails = {
    type,
    kycType,
    region,
    externalId,
    firstName,
    middleName,
    lastName,
    email,
    nationality,
    dateOfBirth,
    mobile,
    mobileCountryCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

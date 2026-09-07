# UKFullApplicantDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**AddressDTO**](AddressDTO.md) |  | [default to undefined]
**dateOfBirth** | **string** | DOB of the applicant. | [default to undefined]
**email** | **string** | Email of the customer | [default to undefined]
**externalId** | **string** | referenceId to identify the applicant | [optional] [default to undefined]
**firstName** | **string** | Ffirst name of the applicant | [default to undefined]
**lastName** | **string** | Last name of the applicant | [default to undefined]
**middleName** | **string** | Middle name of the applicant | [optional] [default to undefined]
**mobile** | **string** | numeric mobile number without the country code | [default to undefined]
**mobileCountryCode** | **string** | 2 digit country code for mobile numbers | [default to undefined]
**nationality** | **string** | nationality of the applicant | [default to undefined]
**sharePercentage** | **string** |  | [optional] [default to undefined]
**isPep** | **boolean** | This field accepts the applicant Politically Exposed Person or Not. | [default to undefined]
**positions** | [**Array&lt;PositionDetailsDTO&gt;**](PositionDetailsDTO.md) | Positions held by the applicant in the company. More than one position title can be selected | [default to undefined]

## Example

```typescript
import { UKFullApplicantDetails } from 'nium-client';

const instance: UKFullApplicantDetails = {
    address,
    dateOfBirth,
    email,
    externalId,
    firstName,
    lastName,
    middleName,
    mobile,
    mobileCountryCode,
    nationality,
    sharePercentage,
    isPep,
    positions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

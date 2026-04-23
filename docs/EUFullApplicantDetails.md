# EUFullApplicantDetails

Applicant Details for EU region, Full KYC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalId** | **string** | referenceId to identify the applicant | [optional] [default to undefined]
**firstName** | **string** | Ffirst name of the applicant | [default to undefined]
**middleName** | **string** | Middle name of the applicant | [optional] [default to undefined]
**lastName** | **string** | Last name of the applicant | [default to undefined]
**dateOfBirth** | **string** | DOB of the applicant. | [default to undefined]
**nationality** | **string** | nationality of the applicant | [default to undefined]
**email** | **string** | Email of the customer | [default to undefined]
**mobile** | **string** | numeric mobile number without the country code | [default to undefined]
**mobileCountryCode** | **string** | 2 digit country code for mobile numbers | [default to undefined]
**sharePercentage** | **string** |  | [optional] [default to undefined]
**address** | [**AddressDTO**](AddressDTO.md) |  | [default to undefined]
**isPep** | **boolean** | This field accepts the applicant Politically Exposed Person or Not. | [default to undefined]
**birthCountry** | **string** | A 2-letter ISO country code. | [default to undefined]
**taxDetails** | [**Array&lt;TaxDetails2&gt;**](TaxDetails2.md) | Tax details of the individual customer. At least one tax detail is required. | [optional] [default to undefined]
**positions** | [**Array&lt;EUPositionDetails&gt;**](EUPositionDetails.md) | Positions held by the applicant in the company. More than one position title can be selected | [default to undefined]

## Example

```typescript
import { EUFullApplicantDetails } from 'nium-client';

const instance: EUFullApplicantDetails = {
    externalId,
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    nationality,
    email,
    mobile,
    mobileCountryCode,
    sharePercentage,
    address,
    isPep,
    birthCountry,
    taxDetails,
    positions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

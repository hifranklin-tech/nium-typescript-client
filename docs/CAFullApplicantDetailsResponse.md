# CAFullApplicantDetailsResponse

Applicant Response Details for CA, full KYC

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
**occupation** | **string** | Occupation of the applicant | [default to undefined]
**positions** | [**Array&lt;CAPositionDetails&gt;**](CAPositionDetails.md) | Positions held by the applicant in the company. More than one position title can be selected | [default to undefined]
**kycMode** | **string** |  | [optional] [default to undefined]
**documents** | [**Array&lt;DocumentDetailsResponse&gt;**](DocumentDetailsResponse.md) |  | [optional] [default to undefined]
**referenceId** | **string** | The unique identifier of the applicant generated on customer creation. | [optional] [default to undefined]
**kycStatus** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CAFullApplicantDetailsResponse } from 'nium-client';

const instance: CAFullApplicantDetailsResponse = {
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
    occupation,
    positions,
    kycMode,
    documents,
    referenceId,
    kycStatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

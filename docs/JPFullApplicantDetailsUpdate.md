# JPFullApplicantDetailsUpdate

Applicant Update Details for JP, full KYC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalId** | **string** | referenceId to identify the applicant | [optional] [default to undefined]
**firstName** | **string** | First name of the applicant | [default to undefined]
**middleName** | **string** | Middle name of the applicant | [optional] [default to undefined]
**lastName** | **string** | Last name of the applicant | [default to undefined]
**firstName_local** | **string** | The first name in the local language or native script of the country of residence or nationality (for example, non-Latin characters). | [optional] [default to undefined]
**lastName_local** | **string** | The last name (surname) in the local language or native script of the country of residence or nationality. | [optional] [default to undefined]
**dateOfBirth** | **string** | DOB of the applicant. | [default to undefined]
**nationality** | **string** | nationality of the applicant | [default to undefined]
**email** | **string** | Email of the customer | [default to undefined]
**mobile** | **string** | numeric mobile number without the country code | [default to undefined]
**mobileCountryCode** | **string** | 2 digit country code for mobile numbers | [default to undefined]
**occupation** | **string** | Occupation of the applicant | [optional] [default to undefined]
**sharePercentage** | **string** |  | [optional] [default to undefined]
**address** | [**AddressDTO**](AddressDTO.md) |  | [default to undefined]
**positions** | [**Array&lt;JPPositionDetails&gt;**](JPPositionDetails.md) | Positions held by the applicant in the company. More than one position title can be selected | [default to undefined]
**documents** | [**Array&lt;DocumentDetailsResponse&gt;**](DocumentDetailsResponse.md) |  | [optional] [default to undefined]
**referenceId** | **string** | The unique identifier of the applicant generated on customer creation. | [optional] [default to undefined]

## Example

```typescript
import { JPFullApplicantDetailsUpdate } from 'nium-client';

const instance: JPFullApplicantDetailsUpdate = {
    externalId,
    firstName,
    middleName,
    lastName,
    firstName_local,
    lastName_local,
    dateOfBirth,
    nationality,
    email,
    mobile,
    mobileCountryCode,
    occupation,
    sharePercentage,
    address,
    positions,
    documents,
    referenceId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

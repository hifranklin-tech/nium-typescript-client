# UkSgMinApplicantDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**AddressDTO**](AddressDTO.md) |  | [optional] [default to undefined]
**dateOfBirth** | **string** | DOB of the applicant. | [optional] [default to undefined]
**documents** | [**Array&lt;Documents&gt;**](Documents.md) | This field accepts list of document details for the applicant | [optional] [default to undefined]
**email** | **string** | Email of the customer | [optional] [default to undefined]
**externalId** | **string** | referenceId to identify the applicant | [optional] [default to undefined]
**firstName** | **string** | First name of the applicant | [optional] [default to undefined]
**lastName** | **string** | Last name of the applicant | [optional] [default to undefined]
**middleName** | **string** | Middle name of the applicant | [optional] [default to undefined]
**mobile** | **string** | numeric mobile number without the country code | [optional] [default to undefined]
**mobileCountryCode** | **string** | 2 digit country code for mobile numbers | [optional] [default to undefined]
**nationality** | **string** | nationality of the applicant | [optional] [default to undefined]
**positions** | [**Array&lt;UkSgMinApplicantPositionDetails&gt;**](UkSgMinApplicantPositionDetails.md) | Positions held by the applicant in the company. More than one position title can be selected | [optional] [default to undefined]
**sharePercentage** | **string** | The share percentage of the applicant in the company. | [optional] [default to undefined]
**taxDetails** | [**Array&lt;UkSgMinTaxDetails&gt;**](UkSgMinTaxDetails.md) | List of tax details | [optional] [default to undefined]

## Example

```typescript
import { UkSgMinApplicantDetails } from 'nium-client';

const instance: UkSgMinApplicantDetails = {
    address,
    dateOfBirth,
    documents,
    email,
    externalId,
    firstName,
    lastName,
    middleName,
    mobile,
    mobileCountryCode,
    nationality,
    positions,
    sharePercentage,
    taxDetails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

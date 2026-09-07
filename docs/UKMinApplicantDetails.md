# UKMinApplicantDetails


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
**mobile** | **string** | numeric mobile number without the country code | [optional] [default to undefined]
**mobileCountryCode** | **string** | 2 digit country code for mobile numbers | [optional] [default to undefined]
**nationality** | **string** | nationality of the applicant | [default to undefined]
**sharePercentage** | **string** | The share percentage of the applicant in the company. | [optional] [default to undefined]
**documents** | [**Array&lt;UKMinApplicantDetailsAllOfDocuments&gt;**](UKMinApplicantDetailsAllOfDocuments.md) | This field accepts list of document details for the customer | [optional] [default to undefined]
**positions** | [**Array&lt;PositionDetailsDTO&gt;**](PositionDetailsDTO.md) | Positions held by the applicant in the company. More than one position title can be selected | [default to undefined]
**taxDetails** | [**Array&lt;TaxDetails2&gt;**](TaxDetails2.md) | List of tax details | [optional] [default to undefined]

## Example

```typescript
import { UKMinApplicantDetails } from 'nium-client';

const instance: UKMinApplicantDetails = {
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
    documents,
    positions,
    taxDetails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

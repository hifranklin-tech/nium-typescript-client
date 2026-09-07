# AUApplicantDetailsDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**AUAddressDTO**](AUAddressDTO.md) |  | [default to undefined]
**birthCountry** | **string** | Birth Country code of applicant | [optional] [default to undefined]
**dateOfBirth** | **string** | DOB of the applicant. | [default to undefined]
**email** | **string** | Email of the customer | [default to undefined]
**externalId** | **string** | referenceId to identify the applicant | [optional] [default to undefined]
**firstName** | **string** | Ffirst name of the applicant | [default to undefined]
**kycMode** | **string** | KYC mode to verify the applicant | [optional] [default to undefined]
**lastName** | **string** | Last name of the applicant | [default to undefined]
**middleName** | **string** | Middle name of the applicant | [optional] [default to undefined]
**mobile** | **string** | numeric mobile number without the country code | [default to undefined]
**mobileCountryCode** | **string** | 2 digit country code for mobile numbers | [default to undefined]
**nationality** | **string** | nationality of the applicant | [default to undefined]
**sharePercentage** | **string** |  | [optional] [default to undefined]
**taxDetails** | [**Array&lt;TaxDetails2&gt;**](TaxDetails2.md) | List of tax details | [optional] [default to undefined]

## Example

```typescript
import { AUApplicantDetailsDTO } from 'nium-client';

const instance: AUApplicantDetailsDTO = {
    address,
    birthCountry,
    dateOfBirth,
    email,
    externalId,
    firstName,
    kycMode,
    lastName,
    middleName,
    mobile,
    mobileCountryCode,
    nationality,
    sharePercentage,
    taxDetails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

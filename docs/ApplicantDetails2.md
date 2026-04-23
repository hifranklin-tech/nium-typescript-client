# ApplicantDetails2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kycMode** | **string** | The registered business name of the business partner. | [optional] [default to undefined]
**firstName** | **string** | The first name of the individual. | [optional] [default to undefined]
**middleName** | **string** | The middle name of the individual. | [optional] [default to undefined]
**lastName** | **string** | The individual\&#39;s last name. | [optional] [default to undefined]
**gender** | **string** | The gender of the individual. | [optional] [default to undefined]
**nationality** | **string** | The [2-letter ISO Alpha-2 country code](/docs/currency-and-country-codes) for the nationality of the individual. | [optional] [default to undefined]
**dateOfBirth** | **string** |  | [optional] [default to undefined]
**birthCountry** | **string** |  | [optional] [default to undefined]
**isResident** | **string** |  | [optional] [default to undefined]
**taxDetails** | [**Array&lt;TaxDetails&gt;**](TaxDetails.md) |  | [optional] [default to undefined]
**professionalDetails** | [**Array&lt;ProductProfessionalDetails&gt;**](ProductProfessionalDetails.md) | Accepts the positions. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request to get a list of valid enum values. | [optional] [default to undefined]
**contactDetails** | [**ContactDetails**](ContactDetails.md) |  | [optional] [default to undefined]
**address** | [**ProductAddress**](ProductAddress.md) |  | [optional] [default to undefined]
**documentDetails** | [**ProductDocumentDetail**](ProductDocumentDetail.md) |  | [optional] [default to undefined]
**referenceId** | **string** | The reference ID of the applicant for which the RFI is raised. | [optional] [default to undefined]
**additionalInfo** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**occupation** | **string** | The occupation of the individual. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/get/api/v2/client/{clientHashId}/onboarding/constants) request to retrieve valid values. | [optional] [default to undefined]
**firstName_local** | **string** | The first name of the individual in local language. | [optional] [default to undefined]
**lastName_local** | **string** | The last name of the individual in local language. | [optional] [default to undefined]

## Example

```typescript
import { ApplicantDetails2 } from 'nium-client';

const instance: ApplicantDetails2 = {
    kycMode,
    firstName,
    middleName,
    lastName,
    gender,
    nationality,
    dateOfBirth,
    birthCountry,
    isResident,
    taxDetails,
    professionalDetails,
    contactDetails,
    address,
    documentDetails,
    referenceId,
    additionalInfo,
    occupation,
    firstName_local,
    lastName_local,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

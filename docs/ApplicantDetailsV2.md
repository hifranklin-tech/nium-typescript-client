# ApplicantDetailsV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**AddressV2**](AddressV2.md) |  | [optional] [default to undefined]
**birthCountry** | **string** |  | [optional] [default to undefined]
**contactDetails** | [**ContactDetailsResponseDTO**](ContactDetailsResponseDTO.md) |  | [optional] [default to undefined]
**dateOfBirth** | **string** |  | [optional] [default to undefined]
**documentDetails** | [**Array&lt;CorporateDocumentDetails2DTO&gt;**](CorporateDocumentDetails2DTO.md) |  | [optional] [default to undefined]
**firstName** | **string** |  | [optional] [default to undefined]
**firstName_local** | **string** |  | [optional] [default to undefined]
**gender** | **string** |  | [optional] [default to undefined]
**isPep** | **boolean** |  | [optional] [default to undefined]
**isResident** | **string** |  | [optional] [default to undefined]
**lastName** | **string** |  | [optional] [default to undefined]
**lastName_local** | **string** |  | [optional] [default to undefined]
**middleName** | **string** |  | [optional] [default to undefined]
**nationality** | **string** |  | [optional] [default to undefined]
**occupation** | **string** | The occupation of the individual. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/get/api/v2/client/{clientHashId}/onboarding/constants) request to retrieve valid values. | [optional] [default to undefined]
**professionalDetails** | [**Array&lt;ProfessionalDetailsResponseDTO&gt;**](ProfessionalDetailsResponseDTO.md) |  | [optional] [default to undefined]
**redirectURL** | **string** |  | [optional] [default to undefined]
**referenceId** | **string** |  | [optional] [default to undefined]
**taxDetails** | [**Array&lt;TaxDetailsResponseDTO&gt;**](TaxDetailsResponseDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ApplicantDetailsV2 } from 'nium-client';

const instance: ApplicantDetailsV2 = {
    address,
    birthCountry,
    contactDetails,
    dateOfBirth,
    documentDetails,
    firstName,
    firstName_local,
    gender,
    isPep,
    isResident,
    lastName,
    lastName_local,
    middleName,
    nationality,
    occupation,
    professionalDetails,
    redirectURL,
    referenceId,
    taxDetails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

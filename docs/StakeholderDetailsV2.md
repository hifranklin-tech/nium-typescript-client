# StakeholderDetailsV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **string** |  | [optional] [default to undefined]
**middleName** | **string** |  | [optional] [default to undefined]
**lastName** | **string** |  | [optional] [default to undefined]
**gender** | **string** |  | [optional] [default to undefined]
**nationality** | **string** |  | [optional] [default to undefined]
**dateOfBirth** | **string** |  | [optional] [default to undefined]
**birthCountry** | **string** |  | [optional] [default to undefined]
**taxDetails** | [**Array&lt;TaxDetailsResponseDTO&gt;**](TaxDetailsResponseDTO.md) |  | [optional] [default to undefined]
**professionalDetails** | [**Array&lt;ProfessionalDetailsResponseDTO&gt;**](ProfessionalDetailsResponseDTO.md) |  | [optional] [default to undefined]
**address** | [**AddressV2**](AddressV2.md) |  | [optional] [default to undefined]
**documentDetails** | [**Array&lt;CorporateDocumentDetails2DTO&gt;**](CorporateDocumentDetails2DTO.md) |  | [optional] [default to undefined]
**contactDetails** | [**StakeholderContactDetailsResponseDTO**](StakeholderContactDetailsResponseDTO.md) |  | [optional] [default to undefined]
**occupation** | **string** |  | [optional] [default to undefined]
**firstName_local** | **string** |  | [optional] [default to undefined]
**lastName_local** | **string** |  | [optional] [default to undefined]
**isPep** | **boolean** |  | [optional] [default to undefined]
**isLiveAuthorizer** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { StakeholderDetailsV2 } from 'nium-client';

const instance: StakeholderDetailsV2 = {
    firstName,
    middleName,
    lastName,
    gender,
    nationality,
    dateOfBirth,
    birthCountry,
    taxDetails,
    professionalDetails,
    address,
    documentDetails,
    contactDetails,
    occupation,
    firstName_local,
    lastName_local,
    isPep,
    isLiveAuthorizer,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

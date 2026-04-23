# StakeholderDetails2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** |  | [optional] [default to undefined]
**firstName** | **string** | The first name of the stakeholder. | [optional] [default to undefined]
**middleName** | **string** | The the middle name of the stakeholder. | [optional] [default to undefined]
**lastName** | **string** | The last name of the stakeholder. | [optional] [default to undefined]
**gender** | **string** | The gender of the stakeholder. Available values include:   - Male   - Female | [optional] [default to undefined]
**dateOfBirth** | **string** | The date of birth of the individual in &#x60;YYYY-MM-DD&#x60; format. | [optional] [default to undefined]
**nationality** | **string** | The [2-letter ISO Alpha-2 country code](/docs/currency-and-country-codes) for the nationality of the stakeholder. | [optional] [default to undefined]
**birthCountry** | **string** |  | [optional] [default to undefined]
**isPrimaryApplicant** | **string** |  | [optional] [default to undefined]
**sourceOfFunds** | **string** |  | [optional] [default to undefined]
**contactDetails** | [**ContactDetails**](ContactDetails.md) |  | [optional] [default to undefined]
**address** | [**ProductAddress**](ProductAddress.md) |  | [optional] [default to undefined]
**professionalDetails** | [**Array&lt;ProductProfessionalDetails&gt;**](ProductProfessionalDetails.md) | Accepts the positions. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request to get a list of valid enum values. | [optional] [default to undefined]
**documentDetails** | [**ProductDocumentDetail**](ProductDocumentDetail.md) |  | [optional] [default to undefined]
**taxDetails** | [**Array&lt;TaxDetails&gt;**](TaxDetails.md) | This an array which accepts the individual\&#39;s tax details. | [optional] [default to undefined]
**additionalInfo** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**occupation** | **string** | The occupation of the individual. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/get/api/v2/client/{clientHashId}/onboarding/constants) request to retrieve valid values. | [optional] [default to undefined]
**firstName_local** | **string** | The first name of the stakeholder in local language. | [optional] [default to undefined]
**lastName_local** | **string** | The last name of the stakeholder in local language. | [optional] [default to undefined]

## Example

```typescript
import { StakeholderDetails2 } from 'nium-client';

const instance: StakeholderDetails2 = {
    title,
    firstName,
    middleName,
    lastName,
    gender,
    dateOfBirth,
    nationality,
    birthCountry,
    isPrimaryApplicant,
    sourceOfFunds,
    contactDetails,
    address,
    professionalDetails,
    documentDetails,
    taxDetails,
    additionalInfo,
    occupation,
    firstName_local,
    lastName_local,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

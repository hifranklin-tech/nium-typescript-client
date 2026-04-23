# ProductStakeholderDetails

Details of the individual stakeholders (natural persons)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kycMode** | **string** | Specifies the KYC verification method for the individual (e.g., &#x60;E_KYC&#x60;, &#x60;MANUAL_KYC&#x60;). | [optional] [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**firstName** | **string** | The first name of the individual. | [optional] [default to undefined]
**firstName_local** | **string** | The first name of the individual in the local language e.g. Kanji, Mandarin. | [optional] [default to undefined]
**middleName** | **string** | The middle name of the individual. | [optional] [default to undefined]
**lastName** | **string** | The last name of the individual. | [optional] [default to undefined]
**lastName_local** | **string** | The individual\&#39;s last name in the local language e.g. Kanji, Mandarin. | [optional] [default to undefined]
**gender** | **string** | This field accepts the gender of the stakeholder. Available values include:   - Male   - Female | [optional] [default to undefined]
**nationality** | **string** | The country of the individual\&#39;s address. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/get/api/v2/client/{clientHashId}/onboarding/constants) request to retrieve valid country values. | [optional] [default to undefined]
**dateOfBirth** | **string** | The date of birth of the individual in &#x60;yyyy-MM-dd&#x60; format. | [optional] [default to undefined]
**isResident** | **string** |  | [optional] [default to undefined]
**birthCountry** | **string** | The country where the individual was born. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/get/api/v2/client/{clientHashId}/onboarding/constants) request to retrieve valid values. | [optional] [default to undefined]
**taxDetails** | [**Array&lt;TaxDetails&gt;**](TaxDetails.md) | An array of objects containing the individual\&#39;s tax-related information. | [optional] [default to undefined]
**professionalDetails** | [**Array&lt;ProductProfessionalDetails&gt;**](ProductProfessionalDetails.md) | Accepts the positions held by the individual. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request to get a list of valid values. | [optional] [default to undefined]
**address** | [**ProductAddress**](ProductAddress.md) |  | [optional] [default to undefined]
**contactDetails** | [**ContactDetails**](ContactDetails.md) |  | [optional] [default to undefined]
**documentDetails** | [**Array&lt;ProductDocumentDetail&gt;**](ProductDocumentDetail.md) | An array that accepts the document details for the stakeholder. This field is required only if documents are being uploaded. | [optional] [default to undefined]
**occupation** | **string** | The occupation of the individual. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/get/api/v2/client/{clientHashId}/onboarding/constants) request to retrieve valid values. | [optional] [default to undefined]
**isPrimaryApplicant** | **string** |  | [optional] [default to undefined]
**sourceOfFunds** | **string** |  | [optional] [default to undefined]
**additionalInfo** | **{ [key: string]: string; }** | An object that contains additional information about the stakeholder. Details such as isPEP can be sent as Key value pair. Refer to region wise guides for more details. | [optional] [default to undefined]
**isLiveAuthorizer** | **boolean** | Send &#x60;true&#x60; to choose this stakeholder to digitally authorize the applicant without the need of Letter of Authorization or Power of Attorney. The stakeholder should be a Director and should undergo &#x60;E_DOC_VERIFY&#x60; KYC verification. The &#x60;true&#x60; value is only valid if the position contains &#x60;DIRECTOR&#x60; and **kycMode** is &#x60;E_DOC_VERIFY&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { ProductStakeholderDetails } from 'nium-client';

const instance: ProductStakeholderDetails = {
    kycMode,
    title,
    firstName,
    firstName_local,
    middleName,
    lastName,
    lastName_local,
    gender,
    nationality,
    dateOfBirth,
    isResident,
    birthCountry,
    taxDetails,
    professionalDetails,
    address,
    contactDetails,
    documentDetails,
    occupation,
    isPrimaryApplicant,
    sourceOfFunds,
    additionalInfo,
    isLiveAuthorizer,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

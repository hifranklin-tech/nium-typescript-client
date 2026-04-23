# ProductApplicantDetails

Details of the person filling out the application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**referenceId** | **string** | A unique ID for the individual. If not provided, a system-generated &#x60;referenceId&#x60; is returned. | [optional] [default to undefined]
**kycMode** | **string** | The verification method used to confirm the individual\&#39;s identity (e.g., &#x60;E_KYC&#x60;, &#x60;MANUAL_KYC&#x60;). | [optional] [default to undefined]
**firstName** | **string** | The individual\&#39;s first name. | [optional] [default to undefined]
**firstName_local** | **string** | The individual\&#39;s first name in the local language. (e.g. Kanji, Mandarin etc.) | [optional] [default to undefined]
**middleName** | **string** | The individual\&#39;s middle name. | [optional] [default to undefined]
**lastName** | **string** | The individual\&#39;s last name or surname. | [optional] [default to undefined]
**lastName_local** | **string** | The individual\&#39;s last name in their local language or script. | [optional] [default to undefined]
**gender** | **string** | The individual\&#39;s gender (e.g., &#x60;Male&#x60;, &#x60;Female&#x60;). | [optional] [default to undefined]
**nationality** | **string** | The country that the individual is a citizen of. Accepts the 2-letter [ISO Alpha-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf) for the country. | [optional] [default to undefined]
**dateOfBirth** | **string** | The individual\&#39;s date of birth in &#x60;YYYY-MM-DD&#x60; format. Future dates are not allowed. | [optional] [default to undefined]
**birthCountry** | **string** | The 2-letter [ISO Alpha-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf) of the individual\&#39;s birth country. | [optional] [default to undefined]
**isResident** | **string** |  | [optional] [default to undefined]
**taxDetails** | [**Array&lt;TaxDetails&gt;**](TaxDetails.md) | A list of tax records for the individual. | [optional] [default to undefined]
**professionalDetails** | [**Array&lt;ProductProfessionalDetails&gt;**](ProductProfessionalDetails.md) | Accepts the positions. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request to get a list of valid enum values. | [optional] [default to undefined]
**contactDetails** | [**ContactDetails**](ContactDetails.md) |  | [optional] [default to undefined]
**address** | [**ProductAddress**](ProductAddress.md) |  | [optional] [default to undefined]
**documentDetails** | [**Array&lt;ProductDocumentDetail&gt;**](ProductDocumentDetail.md) | The details of the uploaded document. | [optional] [default to undefined]
**additionalInfo** | **{ [key: string]: string; }** | Accepts additional information about the applicant. | [optional] [default to undefined]
**occupation** | **string** | The occupation of the individual. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/get/api/v2/client/{clientHashId}/onboarding/constants) request to retrieve valid values. | [optional] [default to undefined]

## Example

```typescript
import { ProductApplicantDetails } from 'nium-client';

const instance: ProductApplicantDetails = {
    referenceId,
    kycMode,
    firstName,
    firstName_local,
    middleName,
    lastName,
    lastName_local,
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
    additionalInfo,
    occupation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# CorporateStakeholderDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**CorporateAddress**](CorporateAddress.md) |  | [optional] [default to undefined]
**contactDetails** | [**CorporateContactDetails**](CorporateContactDetails.md) |  | [optional] [default to undefined]
**dateOfBirth** | **string** | The date of birth of the stakeholder in &#x60;yyyy-MM-dd&#x60; format. This date can\&#39;t be in the future. | [optional] [default to undefined]
**documentDetails** | [**Array&lt;CorporateDocumentDetail&gt;**](CorporateDocumentDetail.md) | List of documents and document details provided by the stakeholder. | [optional] [default to undefined]
**firstName** | **string** | The first name of the stakeholder. | [optional] [default to undefined]
**lastName** | **string** | The last name of the stakeholder. | [optional] [default to undefined]
**middleName** | **string** | The middle name of the stakeholder. | [optional] [default to undefined]
**nationality** | **string** | The 2-letter [ISO Alpha-2 country code](/docs/getting-started/currency-and-country-codes) for the nationality of the stakeholder. | [optional] [default to undefined]
**professionalDetails** | [**Array&lt;CorporateProfessionalDetails&gt;**](CorporateProfessionalDetails.md) | Accepts the position of the stakeholder. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request to get a list of valid enum values. | [optional] [default to undefined]

## Example

```typescript
import { CorporateStakeholderDetails } from 'nium-client';

const instance: CorporateStakeholderDetails = {
    address,
    contactDetails,
    dateOfBirth,
    documentDetails,
    firstName,
    lastName,
    middleName,
    nationality,
    professionalDetails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

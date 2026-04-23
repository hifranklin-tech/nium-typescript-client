# CorporateDocumentDetails2DTO

List of documents and document details provided by the applicant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identificationType** | **string** | Type of document. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a list of valid enum values. | [optional] [default to undefined]
**identificationValue** | **string** | The masked value of the selected &#x60;identificationType&#x60;. | [optional] [default to undefined]
**documentIssuanceCountry** | **string** | The country that issued each document. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a list of valid values. | [optional] [default to undefined]

## Example

```typescript
import { CorporateDocumentDetails2DTO } from 'nium-client';

const instance: CorporateDocumentDetails2DTO = {
    identificationType,
    identificationValue,
    documentIssuanceCountry,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

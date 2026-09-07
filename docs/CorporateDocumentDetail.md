# CorporateDocumentDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentNumber** | **string** | The ID number shown on the document. | [optional] [default to undefined]
**documentType** | **string** | The type of document. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a list of available values. | [optional] [default to undefined]

## Example

```typescript
import { CorporateDocumentDetail } from 'nium-client';

const instance: CorporateDocumentDetail = {
    documentNumber,
    documentType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

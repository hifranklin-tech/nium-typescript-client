# CustomerDocumentDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentType** | **string** | The type of document. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a list of available values. | [optional] [default to undefined]
**documentNumber** | **string** | The ID number shown on the document. (Passport number, drivers license, etc.)  | [optional] [default to undefined]
**documentReferenceNumber** | **string** |  | [optional] [default to undefined]
**documentIssuanceCountry** | **string** | Country that issued the document. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a list of available values. | [optional] [default to undefined]
**documentExpiryDate** | **string** | Expiration date of the document in &#x60;YYYY-MM-DD&#x60; format. Required if the document type is &#x60;PASSPORT&#x60; or &#x60;DRIVER_LICENCE&#x60;. Expiry date must be in the future. | [optional] [default to undefined]
**documentIssuedDate** | **string** | The date the document was issued in &#x60;yyyy-MM-dd&#x60; format. | [optional] [default to undefined]
**documentIssuingAuthority** | **string** | The authority that issued the document. | [optional] [default to undefined]
**documentHolderName** | **string** | The full name of the person as it appears on the document. | [optional] [default to undefined]
**documentColor** | **string** | This field is deprecated. | [optional] [default to undefined]
**documentIssuanceState** | **string** |  | [optional] [default to undefined]
**document** | [**Array&lt;CustomerDocument&gt;**](CustomerDocument.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CustomerDocumentDetail } from 'nium-client';

const instance: CustomerDocumentDetail = {
    documentType,
    documentNumber,
    documentReferenceNumber,
    documentIssuanceCountry,
    documentExpiryDate,
    documentIssuedDate,
    documentIssuingAuthority,
    documentHolderName,
    documentColor,
    documentIssuanceState,
    document,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

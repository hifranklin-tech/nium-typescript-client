# ProductDocumentDetail

Details of the uploaded document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentType** | **string** | The type of document. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a list of available values. | [optional] [default to undefined]
**documentNumber** | **string** | The identification number of the document. | [optional] [default to undefined]
**documentReferenceNumber** | **string** | The document reference number for the uploaded document. This can include passport number, drivers license number, etc. | [optional] [default to undefined]
**documentIssuanceCountry** | **string** | The country that issued each document. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a list of valid values. | [optional] [default to undefined]
**documentIssuanceState** | **string** | The state that issued the document. Applicable for documents that differ in different states. | [optional] [default to undefined]
**documentExpiryDate** | **string** | The expiry date of the uploaded document in YYYY-MM-DD format. This field is required if the &#x60;documentType&#x60; is:   - &#x60;PASSPORT&#x60;   - &#x60;DRIVER_LICENCE&#x60;  The expiry date must not be in the past. | [optional] [default to undefined]
**documentIssuedDate** | **string** | The date when the document was issued. | [optional] [default to undefined]
**documentIssuingAuthority** | **string** | The name of the issuing authority of the document. | [optional] [default to undefined]
**documentHolderName** | **string** | The name of the document holder, as shown on the uploaded document. | [optional] [default to undefined]
**documentColor** | **string** | This field accepts the color of the document for Medicare cards.  AU: Optional EU: Optional UK: Optional SG: Optional | [optional] [default to undefined]
**document** | [**Array&lt;ProductDocument&gt;**](ProductDocument.md) | An object that accepts and contains the document(s) to be uploaded. | [optional] [default to undefined]

## Example

```typescript
import { ProductDocumentDetail } from 'nium-client';

const instance: ProductDocumentDetail = {
    documentType,
    documentNumber,
    documentReferenceNumber,
    documentIssuanceCountry,
    documentIssuanceState,
    documentExpiryDate,
    documentIssuedDate,
    documentIssuingAuthority,
    documentHolderName,
    documentColor,
    document,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

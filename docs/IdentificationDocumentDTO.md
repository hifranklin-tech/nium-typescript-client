# IdentificationDocumentDTO

It is an array of actual Base-64 documents as required. The maximum allowed size of this payload is 10MB. A separate object is needed for each document image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileName** | **string** | The name of the uploaded file. | [default to undefined]
**fileType** | **string** | The file type. Supported file types include:   - &#x60;application/pdf&#x60;   - &#x60;image/jpeg&#x60;   - &#x60;image/jpg&#x60;   - &#x60;image/png&#x60;   - &#x60;jpeg&#x60;   - &#x60;jpg&#x60;   - &#x60;png&#x60; | [default to undefined]
**document** | **string** | The Base64 encoded document being uploaded. The size limit of the original document, which can be pdf, jpeg, jpg, or png, and should not exceed 2MB. It is recommended to use standard libraries for the same. For example, java.util.Base64.getEncoder().encodeToString(byte[] data);This can be used in Java. | [default to undefined]

## Example

```typescript
import { IdentificationDocumentDTO } from 'nium-client';

const instance: IdentificationDocumentDTO = {
    fileName,
    fileType,
    document,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

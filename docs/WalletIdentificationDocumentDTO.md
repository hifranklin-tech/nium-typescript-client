# WalletIdentificationDocumentDTO

It is an array of actual documents for the data provided in previous fields. We support a maximum of 4 files in the array, and the total max size should be less than 10 MB. A separate object is needed for each document image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileName** | **string** | This field accepts the file name of the document being uploaded. | [optional] [default to undefined]
**fileType** | **string** | This field accepts the file type of the document being uploaded. The valid values are jpg, jpeg, png, pdf, image/jpg, image/jpeg, image/png, and application/pdf. | [optional] [default to undefined]
**document** | **string** | This field accepts the Base64 encoded document being uploaded. The size limit of the original document, which can be pdf, jpeg, jpg, or png, and should not exceed 2MB. It is recommended to use standard libraries for the same. For example, java.util.Base64.getEncoder().encodeToString(byte[] data);This can be used in Java. | [optional] [default to undefined]

## Example

```typescript
import { WalletIdentificationDocumentDTO } from 'nium-client';

const instance: WalletIdentificationDocumentDTO = {
    fileName,
    fileType,
    document,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

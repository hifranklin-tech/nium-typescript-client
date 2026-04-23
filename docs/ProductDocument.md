# ProductDocument


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileName** | **string** | Name of the uploaded file. | [optional] [default to undefined]
**fileType** | **string** | The file type. Supported file types include:   - &#x60;application/pdf&#x60;   - &#x60;image/jpeg&#x60;   - &#x60;image/jpg&#x60;   - &#x60;image/png&#x60;   - &#x60;jpeg&#x60;   - &#x60;jpg&#x60;   - &#x60;png&#x60; | [optional] [default to undefined]
**document** | **string** | The file encoded and saved as a base64 string. | [optional] [default to undefined]

## Example

```typescript
import { ProductDocument } from 'nium-client';

const instance: ProductDocument = {
    fileName,
    fileType,
    document,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

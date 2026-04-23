# DocumentDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amountPayable** | **number** | The total amount payable specified by the document. | [optional] [default to undefined]
**document** | **string** | The invoice as uploaded in Base64 encoded format. | [optional] [default to undefined]
**identifier** | **string** | This field contains an alphanumeric value containing the document\&#39;s identification number | [optional] [default to undefined]
**mimeType** | **string** | The file type of the uploaded invoice. | [optional] [default to undefined]
**type** | **string** | The type of the uploaded document. | [optional] [default to undefined]

## Example

```typescript
import { DocumentDetails } from 'nium-client';

const instance: DocumentDetails = {
    amountPayable,
    document,
    identifier,
    mimeType,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

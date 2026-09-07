# RfiResponsePayloadDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**AddressDto**](AddressDto.md) |  | [optional] [default to undefined]
**cannotRespondReason** | **string** | Client-selected reason when the RFI cannot be responded to (e.g. document not available, customer unresponsive). | [optional] [default to undefined]
**choice** | **string** | Single choice value for CHOICE field type. | [optional] [default to undefined]
**confirmation** | **boolean** | Boolean confirmation value for CONFIRMATION field type. | [optional] [default to undefined]
**date** | **string** | Date value for DATE field type. | [optional] [default to undefined]
**fileAttachment** | **Array&lt;string&gt;** | List of fileId values (UUID) for FILE_ATTACHMENT field type. | [optional] [default to undefined]
**identityDocument** | [**Array&lt;IdentityDocumentDto&gt;**](IdentityDocumentDto.md) | Identity document details for IDENTITY_DOCUMENT field type. | [optional] [default to undefined]
**multiChoice** | **Array&lt;string&gt;** | Multiple choice values for MULTI_CHOICE field type. | [optional] [default to undefined]
**text** | **string** | Free-text response for TEXT field type. | [optional] [default to undefined]

## Example

```typescript
import { RfiResponsePayloadDto } from 'nium-client';

const instance: RfiResponsePayloadDto = {
    address,
    cannotRespondReason,
    choice,
    confirmation,
    date,
    fileAttachment,
    identityDocument,
    multiChoice,
    text,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

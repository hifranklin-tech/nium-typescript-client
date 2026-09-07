# IdentityDocumentDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backFileId** | **string** | fileId (UUID) for the back of the identity document. | [optional] [default to undefined]
**documentExpiryDate** | **string** | Document expiry date. | [optional] [default to undefined]
**documentIssuanceCountry** | **string** | ISO country code of document issuance. | [optional] [default to undefined]
**documentNumber** | **string** | Document number. | [optional] [default to undefined]
**documentReferenceNumber** | **string** | Document reference number. | [optional] [default to undefined]
**documentType** | **string** | Type of identity document. | [optional] [default to undefined]
**frontFileId** | **string** | fileId (UUID) for the front of the identity document. | [optional] [default to undefined]

## Example

```typescript
import { IdentityDocumentDto } from 'nium-client';

const instance: IdentityDocumentDto = {
    backFileId,
    documentExpiryDate,
    documentIssuanceCountry,
    documentNumber,
    documentReferenceNumber,
    documentType,
    frontFileId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

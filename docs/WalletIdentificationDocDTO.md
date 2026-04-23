# WalletIdentificationDocDTO

This object contains the document details for which RFI is raised.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identificationType** | **string** | The type of document being uploaded. | [default to undefined]
**identificationValue** | **string** | The unique document id being uploaded. | [optional] [default to undefined]
**identificationDocExpiry** | **string** | The expiry date of the document being uploaded. | [optional] [default to undefined]
**identificationDocIssuanceCountry** | **string** | The issuing country of the document being uploaded. | [optional] [default to undefined]
**identificationDocHolderName** | **string** | The name of the customer as per the document being uploaded. | [optional] [default to undefined]
**identificationDocColor** | **string** | The color of the document being uploaded. | [optional] [default to undefined]
**identificationDocReferenceNumber** | **string** | The reference number of the document being uploaded. | [optional] [default to undefined]
**identificationIssuingDate** | **string** | The date of issuance of the document being uploaded. The format should be yyyy-mm-dd. Example, 2010-10-10. | [optional] [default to undefined]
**identificationIssuingAuthority** | **string** | The authority issuing the document being uploaded. | [optional] [default to undefined]
**identificationDocument** | [**Array&lt;WalletIdentificationDocumentDTO&gt;**](WalletIdentificationDocumentDTO.md) | It is an array of actual documents for the data provided in previous fields. We support a maximum of 4 files in the array, and the total max size should be less than 10 MB. A separate object is needed for each document image. | [optional] [default to undefined]

## Example

```typescript
import { WalletIdentificationDocDTO } from 'nium-client';

const instance: WalletIdentificationDocDTO = {
    identificationType,
    identificationValue,
    identificationDocExpiry,
    identificationDocIssuanceCountry,
    identificationDocHolderName,
    identificationDocColor,
    identificationDocReferenceNumber,
    identificationIssuingDate,
    identificationIssuingAuthority,
    identificationDocument,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

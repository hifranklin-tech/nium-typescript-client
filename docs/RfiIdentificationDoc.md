# RfiIdentificationDoc

This field is an object which holds document details. It is required to send any document RFI under this object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identificationType** | **string** | The identification type for the document being uploaded. Refer the details of the RFI raised and respond accordingly. | [default to undefined]
**identificationValue** | **string** | Each uploaded document\&#39;s identification number. This includes passport number, drivers license number, etc. | [optional] [default to undefined]
**identificationDocExpiry** | **string** | The document expiry date. format yyyy-MM-dd | [optional] [default to undefined]
**identificationDocIssuanceCountry** | **string** | The document issuance country. | [optional] [default to undefined]
**identificationDocHolderName** | **string** | The name of the document holder exactly according to the document uploaded. | [optional] [default to undefined]
**identificationDocColor** | **string** | The color of the medicare card which may be one of three values - G, B, Y. It is mandatory for medicare card. | [optional] [default to undefined]
**identificationDocReferenceNumber** | **string** | The reference number for the document being uploaded. | [optional] [default to undefined]
**identificationIssuingDate** | **string** | The document issuance date. | [optional] [default to undefined]
**identificationIssuingAuthority** | **string** | The name of the authorized issuer of the document such as the name of the government agency issuing the document. | [optional] [default to undefined]
**identificationDocument** | [**Array&lt;IdentificationDocumentDTO&gt;**](IdentificationDocumentDTO.md) | It is an array of actual Base-64 documents as required. The maximum allowed size of this payload is 10MB. A separate object is needed for each document image. | [optional] [default to undefined]

## Example

```typescript
import { RfiIdentificationDoc } from 'nium-client';

const instance: RfiIdentificationDoc = {
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

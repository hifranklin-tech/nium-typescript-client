# ComplianceIdentificationDocDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identificationType** | **string** | This field accepts the identificationType for the document being uploaded for KYC. Some commonly used values are as follows: Selfie Passport Government Id NRIC FIN Drivers License Government Letter Bank Statement Utility Bill Employer Letter Note: For EU, the acceptable values for identificationType are Passport, National ID. | [default to undefined]
**identificationValue** | **string** | This field accepts the identification value. The valid values for identificationValue are: For NRIC/FIN/Passport: Unique NRIC/FIN/passport number. For GovernmentID: Unique Id number as per the document. For selfieWithId/GovernmentLetter: Blank For others(as proof of address): Unique number as per document or blank(can pass the value in identificationDocReferenceNumber) | [optional] [default to undefined]
**identificationDocExpiry** | **string** | This field accepts the identification document expiry date. The valid values are: dateOfExpiry for passport dateOfExpiry for government letter format yyyy-MM-dd  | [optional] [default to undefined]
**identificationDocIssuanceCountry** | **string** | The country of the issuance for the document being uploaded. | [optional] [default to undefined]
**identificationDocHolderName** | **string** | The name of the document holder exactly according to the proof of identity document uploaded. | [optional] [default to undefined]
**identificationDocColor** | **string** | The color of the medicare card which may be one of three values - G, B, Y. It is mandatory for medicare card. | [optional] [default to undefined]
**identificationDocReferenceNumber** | **string** | This field is mandatory for medicare card and accepts the document reference number for the following documents: Government Letter Bank Statement Utility Bill Employer Letter Medicare Card | [optional] [default to undefined]
**identificationIssuingDate** | **string** | This field accepts the identification issuing date. The valid values are: dateOfIssue for FIN dateOfIssue for passport dateOfIssue for GovernmentLetter statementGeneratedOn for BankStatement billGeneratedOn for utilityBill | [optional] [default to undefined]
**identificationIssuingAuthority** | **string** | The authorized issuer of the document for example, the name of the government agency issuing the document. | [optional] [default to undefined]
**identificationDocument** | [**Array&lt;IdentificationDocumentDTO&gt;**](IdentificationDocumentDTO.md) | This is an array of actual Base-64 documents as required. The maximum allowed size of this payload is 10MB. A separate object is needed for each document image. | [default to undefined]

## Example

```typescript
import { ComplianceIdentificationDocDTO } from 'nium-client';

const instance: ComplianceIdentificationDocDTO = {
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

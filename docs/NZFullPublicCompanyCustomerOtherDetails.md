# NZFullPublicCompanyCustomerOtherDetails

Contains customer details for NZ, corporate, full kycType specific to Public Company businessType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessRegistrationNumber** | **string** | Official registration number - must be exactly 13 numeric digits for NZ | [optional] [default to undefined]
**documents** | [**Array&lt;BusinessDocumentsNZ&gt;**](BusinessDocumentsNZ.md) |  | [optional] [default to undefined]
**listedExchange** | **string** | Listed exchange. Mandatory for Public Company | [default to undefined]

## Example

```typescript
import { NZFullPublicCompanyCustomerOtherDetails } from 'nium-client';

const instance: NZFullPublicCompanyCustomerOtherDetails = {
    businessRegistrationNumber,
    documents,
    listedExchange,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# NZFullGeneralPartnershipCustomerOtherDetails

Contains customer details for NZ, corporate, full kycType specific to General Partnership businessType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessRegistrationNumber** | **string** | Official registration number - must be exactly 13 numeric digits for NZ | [optional] [default to undefined]
**documents** | [**Array&lt;BusinessDocumentsNZ&gt;**](BusinessDocumentsNZ.md) | partnership_deed is mandatory for general partnership | [default to undefined]

## Example

```typescript
import { NZFullGeneralPartnershipCustomerOtherDetails } from 'nium-client';

const instance: NZFullGeneralPartnershipCustomerOtherDetails = {
    businessRegistrationNumber,
    documents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

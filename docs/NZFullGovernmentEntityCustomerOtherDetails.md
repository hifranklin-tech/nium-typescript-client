# NZFullGovernmentEntityCustomerOtherDetails

Contains customer details for NZ, corporate, full kycType specific to Government Entity businessType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessRegistrationNumber** | **string** | Official registration number - must be exactly 13 numeric digits for NZ | [optional] [default to undefined]
**documents** | [**Array&lt;BusinessDocumentsNZ&gt;**](BusinessDocumentsNZ.md) |  | [optional] [default to undefined]

## Example

```typescript
import { NZFullGovernmentEntityCustomerOtherDetails } from 'nium-client';

const instance: NZFullGovernmentEntityCustomerOtherDetails = {
    businessRegistrationNumber,
    documents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# AUFullGovernmentEntityCustomerOtherDetails

Contains customer details for AU, corporate, full kycType specific to Government Entity businessType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessRegistrationNumber** | **string** | official registration number - must be exactly 11 alphanumeric characters for Government Entity | [optional] [default to undefined]
**documents** | [**Array&lt;BusinessDocumentsAU&gt;**](BusinessDocumentsAU.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AUFullGovernmentEntityCustomerOtherDetails } from 'nium-client';

const instance: AUFullGovernmentEntityCustomerOtherDetails = {
    businessRegistrationNumber,
    documents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

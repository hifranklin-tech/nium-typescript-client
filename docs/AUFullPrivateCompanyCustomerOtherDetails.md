# AUFullPrivateCompanyCustomerOtherDetails

Contains customer details for AU, corporate, full kycType specific to Private Company businessType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessRegistrationNumber** | **string** | official registration number - must be exactly 9 alphanumeric characters for Private Company | [optional] [default to undefined]
**documents** | [**Array&lt;BusinessDocumentsAU&gt;**](BusinessDocumentsAU.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AUFullPrivateCompanyCustomerOtherDetails } from 'nium-client';

const instance: AUFullPrivateCompanyCustomerOtherDetails = {
    businessRegistrationNumber,
    documents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

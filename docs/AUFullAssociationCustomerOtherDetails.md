# AUFullAssociationCustomerOtherDetails

Contains customer details for AU, corporate, full kycType specific to Association businessType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessRegistrationNumber** | **string** | official registration number - must be exactly 11 alphanumeric characters for Association | [optional] [default to undefined]
**associationName** | **string** |  | [default to undefined]
**associationNumber** | **string** |  | [default to undefined]
**documents** | [**Array&lt;BusinessDocumentsAU&gt;**](BusinessDocumentsAU.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AUFullAssociationCustomerOtherDetails } from 'nium-client';

const instance: AUFullAssociationCustomerOtherDetails = {
    businessRegistrationNumber,
    associationName,
    associationNumber,
    documents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

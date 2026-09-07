# NZFullCoOperativeCustomerOtherDetails

Contains customer details for NZ, corporate, full kycType specific to Co-operative businessType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessRegistrationNumber** | **string** | Official registration number - must be exactly 13 numeric digits for NZ | [optional] [default to undefined]
**documents** | [**Array&lt;BusinessDocumentsNZ&gt;**](BusinessDocumentsNZ.md) |  | [optional] [default to undefined]
**isRegistered** | **boolean** | Whether the co-operative is registered. Mandatory for CO_OPERATIVE | [default to undefined]

## Example

```typescript
import { NZFullCoOperativeCustomerOtherDetails } from 'nium-client';

const instance: NZFullCoOperativeCustomerOtherDetails = {
    businessRegistrationNumber,
    documents,
    isRegistered,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

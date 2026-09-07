# NZFullTrustCustomerOtherDetails

Contains customer details for NZ, corporate, full kycType specific to Trust businessType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessRegistrationNumber** | **string** | Official registration number - must be exactly 13 numeric digits for NZ | [optional] [default to undefined]
**documents** | [**Array&lt;BusinessDocumentsNZ&gt;**](BusinessDocumentsNZ.md) | trust_deed is mandatory for trust businessType | [default to undefined]
**trustType** | **string** | Type of trust. Mandatory for Trust businessType | [default to undefined]

## Example

```typescript
import { NZFullTrustCustomerOtherDetails } from 'nium-client';

const instance: NZFullTrustCustomerOtherDetails = {
    businessRegistrationNumber,
    documents,
    trustType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

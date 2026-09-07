# NZFullClubAssociationCustomerOtherDetails

Contains customer details for NZ, corporate, full kycType specific to Club Association businessType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessRegistrationNumber** | **string** | Official registration number - must be exactly 13 numeric digits for NZ | [optional] [default to undefined]
**documents** | [**Array&lt;BusinessDocumentsNZ&gt;**](BusinessDocumentsNZ.md) |  | [optional] [default to undefined]
**isRegistered** | **boolean** | Whether the club association is registered. Mandatory for CLUB_ASSOCIATION | [default to undefined]

## Example

```typescript
import { NZFullClubAssociationCustomerOtherDetails } from 'nium-client';

const instance: NZFullClubAssociationCustomerOtherDetails = {
    businessRegistrationNumber,
    documents,
    isRegistered,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

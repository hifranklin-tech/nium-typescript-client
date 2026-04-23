# PublicCorporateBusinessDetails

An array which contains details about the business.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessName** | **string** | Thehe name of a business. | [optional] [default to undefined]
**businessRegistrationNumber** | **string** | The business registration number of the new corporate entity to be onboarded. | [optional] [default to undefined]
**businessType** | **string** | The legal entity type of the business (e.g., private company, public company). Use the [Fetch Corporate Constants](ref:fetchcorporateconstants) request to retrieve valid values. | [optional] [default to undefined]
**searchReferenceId** | **string** |  | [optional] [default to undefined]
**website** | **string** | The business website link of the new corporate entity to be onboarded. | [optional] [default to undefined]
**addresses** | [**CorporateAddresses**](CorporateAddresses.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PublicCorporateBusinessDetails } from 'nium-client';

const instance: PublicCorporateBusinessDetails = {
    businessName,
    businessRegistrationNumber,
    businessType,
    searchReferenceId,
    website,
    addresses,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

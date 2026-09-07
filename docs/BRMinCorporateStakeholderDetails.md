# BRMinCorporateStakeholderDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessName** | **string** | Registered name of the business | [default to undefined]
**businessRegistrationNumber** | **string** | official registration number | [default to undefined]
**externalId** | **string** |  | [optional] [default to undefined]
**registeredCountry** | **string** | A 2-letter ISO country code. | [optional] [default to undefined]
**sharePercentage** | **string** |  | [optional] [default to undefined]
**positions** | [**Array&lt;PositionDetailsDTO&gt;**](PositionDetailsDTO.md) |  | [default to undefined]
**registeredDate** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { BRMinCorporateStakeholderDetails } from 'nium-client';

const instance: BRMinCorporateStakeholderDetails = {
    businessName,
    businessRegistrationNumber,
    externalId,
    registeredCountry,
    sharePercentage,
    positions,
    registeredDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# JPFullCorporateStakeholderDetails

Corporate Stakeholder Details for JP region, Full KYC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalId** | **string** |  | [optional] [default to undefined]
**businessName** | **string** | Registered name of the business | [default to undefined]
**businessRegistrationNumber** | **string** | official registration number | [default to undefined]
**registeredCountry** | **string** | A 2-letter ISO country code. | [default to undefined]
**sharePercentage** | **string** |  | [optional] [default to undefined]
**positions** | [**Array&lt;JPPositionDetails&gt;**](JPPositionDetails.md) |  | [default to undefined]

## Example

```typescript
import { JPFullCorporateStakeholderDetails } from 'nium-client';

const instance: JPFullCorporateStakeholderDetails = {
    externalId,
    businessName,
    businessRegistrationNumber,
    registeredCountry,
    sharePercentage,
    positions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

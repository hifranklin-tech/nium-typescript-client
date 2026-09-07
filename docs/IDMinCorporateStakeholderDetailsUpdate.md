# IDMinCorporateStakeholderDetailsUpdate

Corporate Stakeholder Update Details for ID, minimum KYC

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
**referenceId** | **string** | The unique identifier of the stakeholder generated on customer creation. Pass this field in update api for updating details of an existing stakeholder. | [optional] [default to undefined]

## Example

```typescript
import { IDMinCorporateStakeholderDetailsUpdate } from 'nium-client';

const instance: IDMinCorporateStakeholderDetailsUpdate = {
    businessName,
    businessRegistrationNumber,
    externalId,
    registeredCountry,
    sharePercentage,
    positions,
    registeredDate,
    referenceId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

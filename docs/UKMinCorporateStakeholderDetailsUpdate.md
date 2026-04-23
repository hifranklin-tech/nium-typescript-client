# UKMinCorporateStakeholderDetailsUpdate

Corporate Stakeholder Update Details for UK, minimum KYC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalId** | **string** |  | [optional] [default to undefined]
**businessName** | **string** | Registered name of the business | [default to undefined]
**businessRegistrationNumber** | **string** | official registration number | [default to undefined]
**registeredCountry** | **string** | A 2-letter ISO country code. | [optional] [default to undefined]
**sharePercentage** | **string** |  | [optional] [default to undefined]
**businessType** | **string** |  | [optional] [default to undefined]
**registeredDate** | **string** |  | [optional] [default to undefined]
**positions** | [**Array&lt;PositionDetailsDTO&gt;**](PositionDetailsDTO.md) | Positions held by the stakeholder in the company. More than one position title can be selected | [default to undefined]
**referenceId** | **string** | The unique identifier of the stakeholder generated on customer creation. Pass this field in update api for updating details of an existing stakeholder. | [optional] [default to undefined]

## Example

```typescript
import { UKMinCorporateStakeholderDetailsUpdate } from 'nium-client';

const instance: UKMinCorporateStakeholderDetailsUpdate = {
    externalId,
    businessName,
    businessRegistrationNumber,
    registeredCountry,
    sharePercentage,
    businessType,
    registeredDate,
    positions,
    referenceId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

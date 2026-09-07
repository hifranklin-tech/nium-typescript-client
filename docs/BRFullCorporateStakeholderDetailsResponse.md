# BRFullCorporateStakeholderDetailsResponse

Corporate Stakeholder Response Details for BR, Full KYC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessName** | **string** | Registered name of the business | [default to undefined]
**businessRegistrationNumber** | **string** | official registration number | [default to undefined]
**externalId** | **string** |  | [optional] [default to undefined]
**registeredCountry** | **string** | A 2-letter ISO country code. | [default to undefined]
**sharePercentage** | **string** |  | [optional] [default to undefined]
**positions** | [**Array&lt;AUPositionDetails&gt;**](AUPositionDetails.md) |  | [default to undefined]
**kycStatus** | **string** |  | [optional] [default to undefined]
**referenceId** | **string** | The unique identifier of the stakeholder generated on customer creation. Pass this field in update api for updating details of an existing stakeholder. | [optional] [default to undefined]

## Example

```typescript
import { BRFullCorporateStakeholderDetailsResponse } from 'nium-client';

const instance: BRFullCorporateStakeholderDetailsResponse = {
    businessName,
    businessRegistrationNumber,
    externalId,
    registeredCountry,
    sharePercentage,
    positions,
    kycStatus,
    referenceId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

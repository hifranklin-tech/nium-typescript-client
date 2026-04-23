# AUFullCorporateStakeholderDetailsResponse

Corporate Stakeholder Response Details for AU, Full KYC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalId** | **string** |  | [optional] [default to undefined]
**businessName** | **string** | Registered name of the business | [default to undefined]
**businessRegistrationNumber** | **string** | official registration number | [default to undefined]
**registeredCountry** | **string** | A 2-letter ISO country code. | [default to undefined]
**sharePercentage** | **string** |  | [optional] [default to undefined]
**businessType** | **string** |  | [optional] [default to undefined]
**listedExchange** | **string** |  | [optional] [default to undefined]
**positions** | [**Array&lt;AUPositionDetails&gt;**](AUPositionDetails.md) |  | [default to undefined]
**referenceId** | **string** | The unique identifier of the stakeholder generated on customer creation. Pass this field in update api for updating details of an existing stakeholder. | [optional] [default to undefined]
**kycStatus** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AUFullCorporateStakeholderDetailsResponse } from 'nium-client';

const instance: AUFullCorporateStakeholderDetailsResponse = {
    externalId,
    businessName,
    businessRegistrationNumber,
    registeredCountry,
    sharePercentage,
    businessType,
    listedExchange,
    positions,
    referenceId,
    kycStatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

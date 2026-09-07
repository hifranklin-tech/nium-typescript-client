# NZFullCorporateStakeholderDetailsUpdate

Corporate Stakeholder Update Details for NZ, Full KYC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessName** | **string** | Registered name of the business | [default to undefined]
**businessRegistrationNumber** | **string** | Official registration number - must be exactly 13 numeric digits for NZ | [default to undefined]
**externalId** | **string** |  | [optional] [default to undefined]
**registeredCountry** | **string** | A 2-letter ISO country code. | [default to undefined]
**sharePercentage** | **string** |  | [optional] [default to undefined]
**businessType** | **string** | Mandatory if registeredCountry is NZ | [optional] [default to undefined]
**capitalContribution** | **string** | Mandatory if position contains UBO, SHAREHOLDER, TRUSTEE, or PARTNER | [optional] [default to undefined]
**listedExchange** | **string** | Mandatory if registeredCountry is NZ and businessType is public_company | [optional] [default to undefined]
**positions** | [**Array&lt;AUPositionDetails&gt;**](AUPositionDetails.md) |  | [default to undefined]
**settlorProtectorRights** | **Array&lt;string&gt;** | Optional for SETTLOR or PROTECTOR positions | [optional] [default to undefined]
**referenceId** | **string** | The unique identifier of the stakeholder generated on customer creation. Pass this field in update api for updating details of an existing stakeholder. | [optional] [default to undefined]

## Example

```typescript
import { NZFullCorporateStakeholderDetailsUpdate } from 'nium-client';

const instance: NZFullCorporateStakeholderDetailsUpdate = {
    businessName,
    businessRegistrationNumber,
    externalId,
    registeredCountry,
    sharePercentage,
    businessType,
    capitalContribution,
    listedExchange,
    positions,
    settlorProtectorRights,
    referenceId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

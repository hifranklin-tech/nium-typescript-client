# NZFullCorporateStakeholderDetails

Corporate Stakeholder Details for NZ region, Full KYC

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

## Example

```typescript
import { NZFullCorporateStakeholderDetails } from 'nium-client';

const instance: NZFullCorporateStakeholderDetails = {
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

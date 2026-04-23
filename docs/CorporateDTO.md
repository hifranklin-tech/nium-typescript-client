# CorporateDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessName** | **string** |  | [optional] [default to undefined]
**registrationDate** | **string** |  | [optional] [default to undefined]
**identificationType** | **string** |  | [optional] [default to undefined]
**identificationNumber** | **string** |  | [optional] [default to undefined]
**identificationDocIssuanceCountry** | **string** |  | [optional] [default to undefined]
**registeredAddress** | [**AddressDTO1**](AddressDTO1.md) |  | [optional] [default to undefined]
**businessAddress** | [**AddressDTO1**](AddressDTO1.md) |  | [optional] [default to undefined]
**beneficialOwnerDetails** | [**BeneficialOwnerDetailsDTO**](BeneficialOwnerDetailsDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CorporateDTO } from 'nium-client';

const instance: CorporateDTO = {
    businessName,
    registrationDate,
    identificationType,
    identificationNumber,
    identificationDocIssuanceCountry,
    registeredAddress,
    businessAddress,
    beneficialOwnerDetails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

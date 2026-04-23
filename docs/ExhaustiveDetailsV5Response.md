# ExhaustiveDetailsV5Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region** | **string** |  | [optional] [default to undefined]
**searchId** | **string** |  | [optional] [default to undefined]
**businessName** | **string** |  | [optional] [default to undefined]
**businessRegistrationNumber** | **string** |  | [optional] [default to undefined]
**businessType** | **string** |  | [optional] [default to undefined]
**website** | **string** |  | [optional] [default to undefined]
**registeredCountry** | **string** |  | [optional] [default to undefined]
**registeredDate** | **string** |  | [optional] [default to undefined]
**sizeOfBusiness** | [**OnboardingSizeOfBusiness**](OnboardingSizeOfBusiness.md) |  | [optional] [default to undefined]
**stakeholders** | [**ExternalAPIResponseStakeholders**](ExternalAPIResponseStakeholders.md) |  | [optional] [default to undefined]
**taxDetails** | [**Array&lt;ExternalAPITaxDetails&gt;**](ExternalAPITaxDetails.md) |  | [optional] [default to undefined]
**addresses** | [**ExternalAPIResponseAddresses**](ExternalAPIResponseAddresses.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ExhaustiveDetailsV5Response } from 'nium-client';

const instance: ExhaustiveDetailsV5Response = {
    region,
    searchId,
    businessName,
    businessRegistrationNumber,
    businessType,
    website,
    registeredCountry,
    registeredDate,
    sizeOfBusiness,
    stakeholders,
    taxDetails,
    addresses,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

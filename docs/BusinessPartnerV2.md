# BusinessPartnerV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessName** | **string** |  | [optional] [default to undefined]
**businessRegistrationNumber** | **string** |  | [optional] [default to undefined]
**businessType** | **string** |  | [optional] [default to undefined]
**businessEntityType** | **string** |  | [optional] [default to undefined]
**sharePercentage** | **string** |  | [optional] [default to undefined]
**capitalContribution** | **string** |  | [optional] [default to undefined]
**legalDetails** | [**BusinessPartnerLegalDetails**](BusinessPartnerLegalDetails.md) |  | [optional] [default to undefined]
**registeredAddress** | [**AddressV2**](AddressV2.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BusinessPartnerV2 } from 'nium-client';

const instance: BusinessPartnerV2 = {
    businessName,
    businessRegistrationNumber,
    businessType,
    businessEntityType,
    sharePercentage,
    capitalContribution,
    legalDetails,
    registeredAddress,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# ExternalAPIResponseIndividualStakeholder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **string** |  | [optional] [default to undefined]
**middleName** | **string** |  | [optional] [default to undefined]
**lastName** | **string** |  | [optional] [default to undefined]
**dateOfBirth** | **string** |  | [optional] [default to undefined]
**nationality** | **string** |  | [optional] [default to undefined]
**mobile** | **string** |  | [optional] [default to undefined]
**mobileCountryCode** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**address** | [**ExternalAPIResponseAddress**](ExternalAPIResponseAddress.md) |  | [optional] [default to undefined]
**taxDetails** | [**Array&lt;ExternalAPITaxDetails&gt;**](ExternalAPITaxDetails.md) |  | [optional] [default to undefined]
**sharePercentage** | **number** |  | [optional] [default to undefined]
**positions** | [**Array&lt;ExternalAPIResponsePosition&gt;**](ExternalAPIResponsePosition.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ExternalAPIResponseIndividualStakeholder } from 'nium-client';

const instance: ExternalAPIResponseIndividualStakeholder = {
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    nationality,
    mobile,
    mobileCountryCode,
    email,
    address,
    taxDetails,
    sharePercentage,
    positions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

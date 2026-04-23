# Identification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**registrationId** | **string** | Registration Id | [optional] [default to undefined]
**nationalId** | **string** | SA: identificationType &#x3D; NATIONAL_ID for Individual customers | [optional] [default to undefined]
**unifiedNumber** | **string** | SA: identificationType &#x3D; UNIFIED_NUMBER  for Company | [optional] [default to undefined]
**commercialRegistration** | **string** | SA: identificationType &#x3D; COMMERCIAL_REGISTRATION for Company | [optional] [default to undefined]

## Example

```typescript
import { Identification } from 'nium-client';

const instance: Identification = {
    registrationId,
    nationalId,
    unifiedNumber,
    commercialRegistration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# OtaDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isOfacLicensePresent** | **boolean** | This boolean field accepts true or false to ensure if the OFAC licence is present or not for the new corporate entity to be onboarded. | [optional] [default to undefined]
**isTravelEnabledToRestrictedCountries** | **boolean** |  | [default to undefined]
**travelEnabledToRestrictedCountries** | **Array&lt;string&gt;** | This array accepts country code for the restricted countries. | [default to undefined]

## Example

```typescript
import { OtaDetails } from 'nium-client';

const instance: OtaDetails = {
    isOfacLicensePresent,
    isTravelEnabledToRestrictedCountries,
    travelEnabledToRestrictedCountries,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

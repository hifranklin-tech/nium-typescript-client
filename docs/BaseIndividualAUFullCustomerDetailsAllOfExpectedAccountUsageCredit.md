# BaseIndividualAUFullCustomerDetailsAllOfExpectedAccountUsageCredit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**monthlyTransactionVolume** | **string** | The expected monthly Volume for Pay In / Pay Out of the corporate entity to be onboarded. Use the [Fetch Corporate Constants API](ref:fetchcorporateconstants) to get the list of valid enum values. | [default to undefined]
**topTransactionCountries** | **Array&lt;string&gt;** | The list of expected top Pay In / Pay Out countries of the corporate entity to be onboarded. Use [Fetch Corporate Constants API](ref:fetchcorporateconstants) for valid values. | [default to undefined]

## Example

```typescript
import { BaseIndividualAUFullCustomerDetailsAllOfExpectedAccountUsageCredit } from 'nium-client';

const instance: BaseIndividualAUFullCustomerDetailsAllOfExpectedAccountUsageCredit = {
    monthlyTransactionVolume,
    topTransactionCountries,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

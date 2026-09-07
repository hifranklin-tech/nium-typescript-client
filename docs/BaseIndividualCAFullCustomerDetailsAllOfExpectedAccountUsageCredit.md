# BaseIndividualCAFullCustomerDetailsAllOfExpectedAccountUsageCredit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**averageTransactionValue** | **string** | The expected average transaction value for Pay in / Pay Out of the corporate entity to be onboarded. Use the [Fetch Corporate Constants API](ref:fetchcorporateconstants) to get the list of valid enum values. | [optional] [default to undefined]
**monthlyTransactionVolume** | **string** | The expected monthly Volume for Pay In / Pay Out of the corporate entity to be onboarded. Use the [Fetch Corporate Constants API](ref:fetchcorporateconstants) to get the list of valid enum values. | [default to undefined]
**topTransactionCountries** | **Array&lt;string&gt;** | The list of expected top Pay In / Pay Out countries of the corporate entity to be onboarded. Use [Fetch Corporate Constants API](ref:fetchcorporateconstants) for valid values. | [default to undefined]

## Example

```typescript
import { BaseIndividualCAFullCustomerDetailsAllOfExpectedAccountUsageCredit } from 'nium-client';

const instance: BaseIndividualCAFullCustomerDetailsAllOfExpectedAccountUsageCredit = {
    averageTransactionValue,
    monthlyTransactionVolume,
    topTransactionCountries,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

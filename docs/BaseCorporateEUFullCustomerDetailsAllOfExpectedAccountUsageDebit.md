# BaseCorporateEUFullCustomerDetailsAllOfExpectedAccountUsageDebit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**averageTransactionValue** | **string** | The expected average transaction value for Pay in / Pay Out of the corporate entity to be onboarded. Use the [Fetch Corporate Constants API](ref:fetchcorporateconstants) to get the list of valid enum values. | [default to undefined]
**monthlyTransactionVolume** | **string** | The expected monthly Volume for Pay In / Pay Out of the corporate entity to be onboarded. Use the [Fetch Corporate Constants API](ref:fetchcorporateconstants) to get the list of valid enum values. | [default to undefined]
**monthlyTransactions** | **string** | The expected average transaction count for Pay In / Pay Out transactions of the corporate entity to be onboarded. Use the [Fetch Corporate Constants API](ref:fetchcorporateconstants) to get the list of valid enum values. | [default to undefined]
**topTransactionCountries** | **Array&lt;string&gt;** | The list of expected top Pay In / Pay Out countries of the corporate entity to be onboarded. Use [Fetch Corporate Constants API](ref:fetchcorporateconstants) for valid values. | [default to undefined]
**topBeneficiaries** | **Array&lt;string&gt;** | Array of expected primary beneficiaries. Can be specific companies or types of entities | [default to undefined]

## Example

```typescript
import { BaseCorporateEUFullCustomerDetailsAllOfExpectedAccountUsageDebit } from 'nium-client';

const instance: BaseCorporateEUFullCustomerDetailsAllOfExpectedAccountUsageDebit = {
    averageTransactionValue,
    monthlyTransactionVolume,
    monthlyTransactions,
    topTransactionCountries,
    topBeneficiaries,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

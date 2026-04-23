# CreditDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**monthlyTransactionVolume** | **string** | The expected monthly Volume for Pay In of the corporate entity to be onboarded. Use the [Fetch Corporate Constants API](ref:fetchcorporateconstants) to get the list of valid enum values. | [default to undefined]
**monthlyTransactions** | **string** | The expected average transaction count for Pay In transactions of the corporate entity to be onboarded. Use the [Fetch Corporate Constants API](ref:fetchcorporateconstants) to get the list of valid enum values. | [default to undefined]
**averageTransactionValue** | **string** | The expected average transaction value for Pay In of the corporate entity to be onboarded. Use the [Fetch Corporate Constants API](ref:fetchcorporateconstants) to get the list of valid enum values. | [default to undefined]

## Example

```typescript
import { CreditDTO } from 'nium-client';

const instance: CreditDTO = {
    monthlyTransactionVolume,
    monthlyTransactions,
    averageTransactionValue,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

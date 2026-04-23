# BaseIndividualAUFullCustomerDetailsAllOfExpectedAccountUsage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**intendedUses** | **Array&lt;string&gt;** | The customer intended use of the account. Use [Fetch Corporate Constants API](ref:fetchcorporateconstants) for valid values. | [default to undefined]
**intendedUsesDescription** | **string** |  | [optional] [default to undefined]
**credit** | [**BaseIndividualAUFullCustomerDetailsAllOfExpectedAccountUsageCredit**](BaseIndividualAUFullCustomerDetailsAllOfExpectedAccountUsageCredit.md) |  | [default to undefined]
**debit** | [**BaseIndividualAUFullCustomerDetailsAllOfExpectedAccountUsageCredit**](BaseIndividualAUFullCustomerDetailsAllOfExpectedAccountUsageCredit.md) |  | [default to undefined]

## Example

```typescript
import { BaseIndividualAUFullCustomerDetailsAllOfExpectedAccountUsage } from 'nium-client';

const instance: BaseIndividualAUFullCustomerDetailsAllOfExpectedAccountUsage = {
    intendedUses,
    intendedUsesDescription,
    credit,
    debit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

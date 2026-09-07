# BaseCorporateBRFullCustomerDetailsAllOfExpectedAccountUsage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit** | [**BaseCorporateAUFullCustomerDetailsAllOfExpectedAccountUsageCredit**](BaseCorporateAUFullCustomerDetailsAllOfExpectedAccountUsageCredit.md) |  | [optional] [default to undefined]
**debit** | [**BaseCorporateAUFullCustomerDetailsAllOfExpectedAccountUsageCredit**](BaseCorporateAUFullCustomerDetailsAllOfExpectedAccountUsageCredit.md) |  | [default to undefined]
**intendedUses** | **Array&lt;string&gt;** | The customer intended use of the account. Use [Fetch Corporate Constants API](ref:fetchcorporateconstants) for valid values. | [default to undefined]
**intendedUsesDescription** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { BaseCorporateBRFullCustomerDetailsAllOfExpectedAccountUsage } from 'nium-client';

const instance: BaseCorporateBRFullCustomerDetailsAllOfExpectedAccountUsage = {
    credit,
    debit,
    intendedUses,
    intendedUsesDescription,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

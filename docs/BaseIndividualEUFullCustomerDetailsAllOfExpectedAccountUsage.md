# BaseIndividualEUFullCustomerDetailsAllOfExpectedAccountUsage

Expected account usage details of the individual customer for payins.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**intendedUses** | **Array&lt;string&gt;** | The customer intended use of the account. Use [Fetch Corporate Constants API](ref:fetchcorporateconstants) for valid values. | [default to undefined]
**intendedUsesDescription** | **string** | Description of the intended Uses of the account in case intendedUses is selected as \&quot;Other\&quot; | [optional] [default to undefined]
**credit** | [**BaseIndividualCAFullCustomerDetailsAllOfExpectedAccountUsageCredit**](BaseIndividualCAFullCustomerDetailsAllOfExpectedAccountUsageCredit.md) |  | [default to undefined]
**debit** | [**BaseIndividualCAFullCustomerDetailsAllOfExpectedAccountUsageCredit**](BaseIndividualCAFullCustomerDetailsAllOfExpectedAccountUsageCredit.md) |  | [default to undefined]

## Example

```typescript
import { BaseIndividualEUFullCustomerDetailsAllOfExpectedAccountUsage } from 'nium-client';

const instance: BaseIndividualEUFullCustomerDetailsAllOfExpectedAccountUsage = {
    intendedUses,
    intendedUsesDescription,
    credit,
    debit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

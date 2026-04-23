# ExpectedAccountUsageDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit** | [**CreditDTO**](CreditDTO.md) |  | [default to undefined]
**intendedUses** | **Array&lt;string&gt;** | The customer intended use of the account. Use [Fetch Corporate Constants API](ref:fetchcorporateconstants) for valid values. | [default to undefined]
**intendedUsesDescription** | **any** | Additional information about the intended uses of the account | [optional] [default to undefined]

## Example

```typescript
import { ExpectedAccountUsageDTO } from 'nium-client';

const instance: ExpectedAccountUsageDTO = {
    credit,
    intendedUses,
    intendedUsesDescription,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

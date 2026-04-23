# ExpectedAccountUsage

Details regarding the expected usage of the account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debit** | [**ExpectedAccountDebit**](ExpectedAccountDebit.md) |  | [optional] [default to undefined]
**credit** | [**ExpectedAccountCredit**](ExpectedAccountCredit.md) |  | [optional] [default to undefined]
**intendedUses** | **Set&lt;string&gt;** | An array holding the intended uses of the account. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a list of valid values. | [optional] [default to undefined]
**intendedUsesDescription** | **string** | Text field description of the intended use of the account of the corporate customer.  Minimum 20 characters | [optional] [default to undefined]

## Example

```typescript
import { ExpectedAccountUsage } from 'nium-client';

const instance: ExpectedAccountUsage = {
    debit,
    credit,
    intendedUses,
    intendedUsesDescription,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

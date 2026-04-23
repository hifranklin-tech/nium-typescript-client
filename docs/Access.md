# Access

This is an object which holds access data fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allPsd2** | **string** | Only \&quot;allAccounts\&quot; value is admitted. | [optional] [default to undefined]
**availableAccounts** | **string** | Only \&quot;allAccounts\&quot; or \&quot;allAccountsWithBalances\&quot; values are admitted | [optional] [default to undefined]
**accounts** | [**Array&lt;Account&gt;**](Account.md) | This is an array which holds account detail fields. | [optional] [default to undefined]
**balances** | [**Array&lt;Balance&gt;**](Balance.md) | This is an array which holds balance detail fields. | [optional] [default to undefined]
**transactions** | [**Array&lt;Transaction&gt;**](Transaction.md) | This is an array which holds transaction detail fields. | [optional] [default to undefined]

## Example

```typescript
import { Access } from 'nium-client';

const instance: Access = {
    allPsd2,
    availableAccounts,
    accounts,
    balances,
    transactions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

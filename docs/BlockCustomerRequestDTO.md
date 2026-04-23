# BlockCustomerRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** | This field accepts the action type of block/unblock. The possible values are: • TEMPORARY_BLOCK • PERMANENT_BLOCK • UNBLOCK | [default to undefined]
**reason** | **string** | This field accepts the reason for block/unblock for customer. Following are the valid values with respect to action: &#x3D;&gt; PERMANENT_BLOCK: • CUSTOMER_REQUEST • CLIENT_REQUEST • DECEASED • ACCOUNT_CLOSURE • SUSPICIOUS_ACTIVITY • FRAUDULENT_ACTIVITY • POTENTIAL_SANCTION • SANCTIONED_CUSTOMER • BLACKLISTED_CUSTOMER • UNRESPONSIVE_CUSTOMER • DORMANCY • OTHER &#x3D;&gt; TEMPORARY_BLOCK: • CUSTOMER_REQUEST • CLIENT_REQUEST • SUSPICIOUS_ACTIVITY • POTENTIAL_SANCTION • DORMANT • NON_COMPLIANCE • POSSIBLE_PEP_MATCH • POSSIBLE_ADVERSE_MEDIA &#x3D;&gt; UNBLOCK: • CUSTOMER_REQUEST • CLIENT_REQUEST | [default to undefined]
**comment** | **string** | This field accepts comment which describes the action or reason. Maximum character limit: 255 | [default to undefined]

## Example

```typescript
import { BlockCustomerRequestDTO } from 'nium-client';

const instance: BlockCustomerRequestDTO = {
    action,
    reason,
    comment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

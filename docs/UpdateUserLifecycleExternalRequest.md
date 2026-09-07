# UpdateUserLifecycleExternalRequest

Request to update a user\'s lifecycle status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** | Target status. Use clear, suspended, or revoked. reasonCode must be valid for the chosen action.  | [default to undefined]
**comments** | **string** | Free-text comment for the status change. | [default to undefined]
**reasonCode** | **string** | Reason for the status change. Must match the action: suspended — offboard_pending, role_change, security_incident, extended_leave, policy_violation, suspicious_activity, customer_closed; revoked — termination, duplicate, no_longer_required, not_interested; clear — review_completed, reinstated.  | [default to undefined]

## Example

```typescript
import { UpdateUserLifecycleExternalRequest } from 'nium-client';

const instance: UpdateUserLifecycleExternalRequest = {
    action,
    comments,
    reasonCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

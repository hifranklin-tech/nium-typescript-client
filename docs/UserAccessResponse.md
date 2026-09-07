# UserAccessResponse

Success body for user lifecycle (access) actions. Carries status and message (ApiError-like happy path) plus lifecycle metadata. No errors list. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blockUpdatedBy** | [**BlockUpdatedBy**](BlockUpdatedBy.md) |  | [optional] [default to undefined]
**message** | **string** | Result of the lifecycle action. | [optional] [default to undefined]
**reasonCode** | **string** | Reason code applied for the update. | [optional] [default to undefined]
**status** | **string** | User status after the lifecycle action. | [optional] [default to undefined]

## Example

```typescript
import { UserAccessResponse } from 'nium-client';

const instance: UserAccessResponse = {
    blockUpdatedBy,
    message,
    reasonCode,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

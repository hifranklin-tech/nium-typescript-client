# BulkPayoutItemFailureDTO

Validation or processing failure details for a payout.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | Response status associated with this failure. | [optional] [default to undefined]
**code** | **string** | Machine readable error code. | [default to undefined]
**message** | **string** | Human readable error message. | [default to undefined]
**body** | **string** | Raw downstream error payload. | [optional] [default to undefined]
**errors** | **Array&lt;string&gt;** | List of additional error messages for this failure. | [optional] [default to undefined]
**field** | **string** | The field where the error occured in the original request. | [optional] [default to undefined]
**action** | **string** | Recommended remediation action. | [optional] [default to undefined]
**regex** | **string** | Regular expression describing expected format. | [optional] [default to undefined]

## Example

```typescript
import { BulkPayoutItemFailureDTO } from 'nium-client';

const instance: BulkPayoutItemFailureDTO = {
    status,
    code,
    message,
    body,
    errors,
    field,
    action,
    regex,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# BulkPayoutItemReturnDTO

Return details when an accepted or paid item is reversed or returned downstream.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Machine readable return code. | [default to undefined]
**message** | **string** | Human readable return message. | [default to undefined]
**reasonCode** | **string** | Downstream reason descriptor. | [optional] [default to undefined]

## Example

```typescript
import { BulkPayoutItemReturnDTO } from 'nium-client';

const instance: BulkPayoutItemReturnDTO = {
    code,
    message,
    reasonCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

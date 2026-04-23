# BulkPayoutItemResponse

Paged list of individual payouts in a Batch Payout.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batchExternalId** | **string** | Client supplied ID used to identify the Batch Payout. | [default to undefined]
**batchId** | **string** | System-generated internal Batch Payout ID. | [default to undefined]
**page** | [**PageCursorDTO**](PageCursorDTO.md) |  | [default to undefined]
**items** | [**Array&lt;BulkPayoutItemDTO&gt;**](BulkPayoutItemDTO.md) | Current page of individual payout. | [default to undefined]

## Example

```typescript
import { BulkPayoutItemResponse } from 'nium-client';

const instance: BulkPayoutItemResponse = {
    batchExternalId,
    batchId,
    page,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

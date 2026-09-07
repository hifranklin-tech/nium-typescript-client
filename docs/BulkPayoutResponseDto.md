# BulkPayoutResponseDto

Batch Payouts Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batchExternalId** | **string** | Client supplied external batch identifier. | [default to undefined]
**batchId** | **string** | System-generated batch identifier. | [default to undefined]
**status** | **string** | Batch processing status. | [default to undefined]
**totalCount** | **number** | Total number of payout items in the batch. | [default to undefined]

## Example

```typescript
import { BulkPayoutResponseDto } from 'nium-client';

const instance: BulkPayoutResponseDto = {
    batchExternalId,
    batchId,
    status,
    totalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

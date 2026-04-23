# BulkPayoutStatusResponseDto

Current processing state and aggregate metrics for a Batch Payout.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batchExternalId** | **string** | Client supplied ID used to identify the Batch Payout or &#x60;batch&#x60;. | [default to undefined]
**batchId** | **string** | System-generated internal &#x60;batch&#x60; ID. | [default to undefined]
**status** | **string** | Processing status of the &#x60;batch&#x60;. | [default to undefined]
**summary** | [**BulkPayoutStatusCountSummaryDto**](BulkPayoutStatusCountSummaryDto.md) |  | [default to undefined]
**createdAt** | **string** | Timestamp of when the &#x60;batch&#x60; was created. | [default to undefined]
**completedAt** | **string** | Timestamp of when the &#x60;batch&#x60; was completed; **null** if still processing. | [optional] [default to undefined]
**links** | [**BulkPayoutBatchLinksDto**](BulkPayoutBatchLinksDto.md) |  | [default to undefined]

## Example

```typescript
import { BulkPayoutStatusResponseDto } from 'nium-client';

const instance: BulkPayoutStatusResponseDto = {
    batchExternalId,
    batchId,
    status,
    summary,
    createdAt,
    completedAt,
    links,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

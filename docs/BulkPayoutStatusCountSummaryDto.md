# BulkPayoutStatusCountSummaryDto

Summary of a Batch Payout

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepted** | **number** | Number of payouts accepted for processing. | [default to undefined]
**failed** | **number** | Number of payouts that have failed. | [default to undefined]
**paid** | **number** | Number of payouts that have been successfully paid. | [default to undefined]
**returned** | **number** | Number of payouts that were returned after payment was attempted. | [default to undefined]
**total** | **number** | Total number of payouts submitted in the batch. | [default to undefined]

## Example

```typescript
import { BulkPayoutStatusCountSummaryDto } from 'nium-client';

const instance: BulkPayoutStatusCountSummaryDto = {
    accepted,
    failed,
    paid,
    returned,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

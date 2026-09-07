# BulkPayoutRequestDto

Batch Payout Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batchExternalId** | **string** | Unique external ID created by the &#x60;client&#x60; to easily retrieve the batch. | [default to undefined]
**executeAt** | **string** | Date to execute a batch for scheduled Batch Payouts. | [optional] [default to undefined]
**fundingSource** | [**BulkPayoutFundingSourceDto**](BulkPayoutFundingSourceDto.md) |  | [optional] [default to undefined]
**payouts** | [**Array&lt;BulkPayoutItemsDto&gt;**](BulkPayoutItemsDto.md) | List of Individual Remittance Payout Instructions | [default to undefined]

## Example

```typescript
import { BulkPayoutRequestDto } from 'nium-client';

const instance: BulkPayoutRequestDto = {
    batchExternalId,
    executeAt,
    fundingSource,
    payouts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

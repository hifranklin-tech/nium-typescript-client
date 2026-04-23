# BulkPayoutItemDTO

Status of an Individual Payout in a Batch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalId** | **string** | Unique ID created by the &#x60;client&#x60; to retrieve the &#x60;payout&#x60;. | [default to undefined]
**transactionId** | **string** | System-generated transaction identifier (created once transaction processing begins). | [optional] [default to undefined]
**status** | **string** | Status of the individual &#x60;payout&#x60;. | [default to undefined]
**failure** | [**Array&lt;BulkPayoutItemFailureDTO&gt;**](BulkPayoutItemFailureDTO.md) | Details error or return reason. | [optional] [default to undefined]
**createdAt** | **string** | Timestampe of when the individual &#x60;payout&#x60; was created (UTC). | [default to undefined]
**updatedAt** | **string** | Timestamp of when the individual &#x60;payout&#x60; was last updated (UTC). | [default to undefined]
**_return** | [**BulkPayoutItemReturnDTO**](BulkPayoutItemReturnDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BulkPayoutItemDTO } from 'nium-client';

const instance: BulkPayoutItemDTO = {
    externalId,
    transactionId,
    status,
    failure,
    createdAt,
    updatedAt,
    _return,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# BulkPayoutFundingSourceDto

Funding Source details for the Batch Payout.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fundingInstrumentId** | **string** | Unique identifier of the funding instrument to debit. | [default to undefined]
**fundingChannel** | **string** | Channel used for debiting funds. | [default to undefined]
**statementNarrative** | **string** | Narrative/descriptor to appear on the sender\&#39;s bank statement. | [optional] [default to undefined]

## Example

```typescript
import { BulkPayoutFundingSourceDto } from 'nium-client';

const instance: BulkPayoutFundingSourceDto = {
    fundingInstrumentId,
    fundingChannel,
    statementNarrative,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

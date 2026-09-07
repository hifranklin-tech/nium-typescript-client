# ApproveOrRejectFundsRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decision** | **string** | The value for status can be approve or reject. | [default to undefined]
**decisionReason** | **string** | This field contains a description of the reason for approving or rejecting the funds. | [default to undefined]
**documents** | [**Array&lt;DocumentDetails&gt;**](DocumentDetails.md) | The document details, we only support one document for now. | [optional] [default to undefined]
**transactionDetails** | [**TransactionDetails**](TransactionDetails.md) |  | [default to undefined]

## Example

```typescript
import { ApproveOrRejectFundsRequestDTO } from 'nium-client';

const instance: ApproveOrRejectFundsRequestDTO = {
    decision,
    decisionReason,
    documents,
    transactionDetails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

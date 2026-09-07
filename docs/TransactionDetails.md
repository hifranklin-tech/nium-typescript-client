# TransactionDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientTransactionId** | **string** | The client\&#39;s unique transaction identifier maintained within their systems. | [optional] [default to undefined]
**date** | **string** | The date on which the transaction is expected to have been made. This must be provided in YYYY-MM-DD format. | [optional] [default to undefined]
**description** | **string** | Additional description of the incoming transaction | [optional] [default to undefined]
**purposes** | [**Array&lt;TransactionPurposeDTO&gt;**](TransactionPurposeDTO.md) | A list of objects representing the purposes of the transaction. Optionally, the user may provide purpose-specific fields inside the purpose object. At least one purpose must be provided. | [optional] [default to undefined]
**senderName** | **string** | Name of sender/remitter from whom funds are to be collected | [optional] [default to undefined]

## Example

```typescript
import { TransactionDetails } from 'nium-client';

const instance: TransactionDetails = {
    clientTransactionId,
    date,
    description,
    purposes,
    senderName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

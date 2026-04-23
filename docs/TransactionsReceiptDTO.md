# TransactionsReceiptDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**receiptType** | **string** | The file type of the uploaded receipt. | [default to undefined]
**receiptFileName** | **string** | The name of the file as uploaded. | [default to undefined]
**document** | **string** | Contains the receipt as uploaded in Base64 encoded format. | [default to undefined]

## Example

```typescript
import { TransactionsReceiptDTO } from 'nium-client';

const instance: TransactionsReceiptDTO = {
    receiptType,
    receiptFileName,
    document,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

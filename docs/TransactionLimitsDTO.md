# TransactionLimitsDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionLimits** | [**Array&lt;TransactionLimitDTO&gt;**](TransactionLimitDTO.md) | This array contains an object for each card limit parameter. This object contains the below data elements. Refer to the example for exact structure. | [default to undefined]
**cardHashId** | **string** | Unique card identifier generated while new/add-on card issuance. | [optional] [default to undefined]

## Example

```typescript
import { TransactionLimitsDTO } from 'nium-client';

const instance: TransactionLimitsDTO = {
    transactionLimits,
    cardHashId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

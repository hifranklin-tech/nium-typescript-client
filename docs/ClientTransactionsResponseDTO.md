# ClientTransactionsResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | [**Array&lt;TransactionResponseDTO&gt;**](TransactionResponseDTO.md) | This field contains an array that holds additional data. | [optional] [default to undefined]
**totalElements** | **number** | The number of elements in the response body. | [optional] [default to undefined]
**totalPages** | **number** | The number of pages in response body. | [optional] [default to undefined]

## Example

```typescript
import { ClientTransactionsResponseDTO } from 'nium-client';

const instance: ClientTransactionsResponseDTO = {
    content,
    totalElements,
    totalPages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

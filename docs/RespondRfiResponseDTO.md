# RespondRfiResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caseId** | **string** | The compliance case Id of the customer. | [optional] [default to undefined]
**clientId** | **string** | The Nium client Id of the customer. | [optional] [default to undefined]
**status** | **string** | The compliance status of the corporate customer after the RFI is responded. A successful response to returns **RFI_RESPONDED**. | [optional] [default to undefined]

## Example

```typescript
import { RespondRfiResponseDTO } from 'nium-client';

const instance: RespondRfiResponseDTO = {
    caseId,
    clientId,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

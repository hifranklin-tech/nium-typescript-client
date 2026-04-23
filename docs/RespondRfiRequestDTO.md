# RespondRfiRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region** | **string** | The regulatory region where the corporate customer is being onboarded. | [optional] [default to undefined]
**customerHashId** | **string** | The unique customer identifier generated at the time of customer creation. | [optional] [default to undefined]
**clientId** | **string** | The Nium client Id of the customer. | [optional] [default to undefined]
**caseId** | **string** | The compliance case Id of the customer. | [optional] [default to undefined]
**rfiResponseRequest** | [**Array&lt;ProductRfiResponseRequest&gt;**](ProductRfiResponseRequest.md) | This is an array which accepts the requests for information, depending upon documents required to raise RFI. | [default to undefined]

## Example

```typescript
import { RespondRfiRequestDTO } from 'nium-client';

const instance: RespondRfiRequestDTO = {
    region,
    customerHashId,
    clientId,
    caseId,
    rfiResponseRequest,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

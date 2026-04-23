# CustomFeeResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**systemReferenceNumber** | **string** | The unique system reference number. | [optional] [default to undefined]
**status** | **string** | The status such as success if the fee is levied successfully. | [optional] [default to undefined]
**message** | **string** | This field contains further details regarding the status of the fee. | [optional] [default to undefined]

## Example

```typescript
import { CustomFeeResponseDTO } from 'nium-client';

const instance: CustomFeeResponseDTO = {
    systemReferenceNumber,
    status,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

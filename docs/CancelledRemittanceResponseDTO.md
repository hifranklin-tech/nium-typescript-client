# CancelledRemittanceResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | This field will return a success message if the remittance gets cancelled successfully. | [optional] [default to undefined]
**systemReferenceNumber** | **string** | This is a unique system reference number assigned to the transaction. | [optional] [default to undefined]

## Example

```typescript
import { CancelledRemittanceResponseDTO } from 'nium-client';

const instance: CancelledRemittanceResponseDTO = {
    message,
    systemReferenceNumber,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

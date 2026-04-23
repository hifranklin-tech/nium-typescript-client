# LockStatusUpdateResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | This field will contain the status of the request after processing. It shall be success if the lock/unlock is successful. | [optional] [default to undefined]
**message** | **string** | This field will return a success message if the request processes successfully else this will return an error message. | [optional] [default to undefined]

## Example

```typescript
import { LockStatusUpdateResponseDTO } from 'nium-client';

const instance: LockStatusUpdateResponseDTO = {
    status,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

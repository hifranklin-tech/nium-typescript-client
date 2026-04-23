# UploadRfiDetailsResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complianceId** | **string** | The unique compliance ID for the customer. | [optional] [default to undefined]
**status** | **string** | This field contains the status and following are the valid values for compliance status: • IN_PROGRESS • ACTION_REQUIRED • RFI_REQUESTED • RFI_RESPONDED • COMPLETED • REJECT • ERROR In case of successful response to RFI, expected status is RFI_RESPONDED. | [optional] [default to undefined]
**rfiId** | **string** | This field contains the unique RFI ID. This is for future use. Currently, the value shall be null. | [optional] [default to undefined]

## Example

```typescript
import { UploadRfiDetailsResponseDto } from 'nium-client';

const instance: UploadRfiDetailsResponseDto = {
    complianceId,
    status,
    rfiId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

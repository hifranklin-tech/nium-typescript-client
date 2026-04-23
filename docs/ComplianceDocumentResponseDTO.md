# ComplianceDocumentResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complianceId** | **string** |  | [optional] [default to undefined]
**status** | **string** | This field contains the status and following are the valid values for compliance status: • IN_PROGRESS • ACTION_REQUIRED • RFI_REQUESTED • RFI_RESPONDED • COMPLETED • REJECT • ERROR | [optional] [default to undefined]

## Example

```typescript
import { ComplianceDocumentResponseDTO } from 'nium-client';

const instance: ComplianceDocumentResponseDTO = {
    complianceId,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

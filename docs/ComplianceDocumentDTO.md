# ComplianceDocumentDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kycMode** | **string** |  | [optional] [default to undefined]
**identificationDoc** | [**Array&lt;ComplianceIdentificationDocDTO&gt;**](ComplianceIdentificationDocDTO.md) | This field is an array which accepts document objects. Total size of the array should be less than 10 MB. | [default to undefined]

## Example

```typescript
import { ComplianceDocumentDTO } from 'nium-client';

const instance: ComplianceDocumentDTO = {
    kycMode,
    identificationDoc,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

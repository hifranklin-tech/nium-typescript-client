# ProductRfiTemplate

An array which lists RFI template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**referenceId** | **string** | The reference ID of the the entity for which the RFI is raised. | [optional] [default to undefined]
**remarks** | **string** | The remarks entered by compliance while raising RFI. | [optional] [default to undefined]
**rfiHashId** | **string** | The unique identifier (UUID) for the individual RFI. | [optional] [default to undefined]
**status** | **string** | The status of the RFI. Available values include:   - **RFI_REQUESTED**   - **RFI_RESPONDED** | [optional] [default to undefined]
**template** | [**ProductTemplate**](ProductTemplate.md) |  | [optional] [default to undefined]
**templateId** | **string** | The ID of the RFI template. | [optional] [default to undefined]

## Example

```typescript
import { ProductRfiTemplate } from 'nium-client';

const instance: ProductRfiTemplate = {
    referenceId,
    remarks,
    rfiHashId,
    status,
    template,
    templateId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

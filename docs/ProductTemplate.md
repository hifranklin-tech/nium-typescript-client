# ProductTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentType** | **string** | This field contains the RFI document type. The possible values are: POA POI | [optional] [default to undefined]
**name** | **string** | This field contains name of the RFI template. | [optional] [default to undefined]
**requiredFields** | [**Array&lt;ProductRequiredFields&gt;**](ProductRequiredFields.md) | This is an array which contains the list of fields for the RFI template. | [optional] [default to undefined]
**rfiType** | **string** | This field contains the entity type for which the RFI is raised. The possible values are: corporate applicant stakeholder | [optional] [default to undefined]
**type** | **string** | This field contains the RFI template type. It can be either Data RFI or Document RFI. The possible values are: data document | [optional] [default to undefined]

## Example

```typescript
import { ProductTemplate } from 'nium-client';

const instance: ProductTemplate = {
    documentType,
    name,
    requiredFields,
    rfiType,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

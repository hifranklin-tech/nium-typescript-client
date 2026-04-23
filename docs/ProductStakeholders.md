# ProductStakeholders

An array of objects to accept the stakeholders of the corporate customers such as Directors or UBOs. Stakeholder can be a business entity or a natural person.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**referenceId** | **string** | The universally unique identifier (UUID) for the stakeholder object. If not provided, Nium will generate one automatically. Use the UUID to respond to RFIs or upload supporting documents. | [optional] [default to undefined]
**entityType** | **string** |  | [optional] [default to undefined]
**stakeholderDetails** | [**ProductStakeholderDetails**](ProductStakeholderDetails.md) |  | [optional] [default to undefined]
**businessPartner** | [**ProductBusinessPartner**](ProductBusinessPartner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ProductStakeholders } from 'nium-client';

const instance: ProductStakeholders = {
    referenceId,
    entityType,
    stakeholderDetails,
    businessPartner,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

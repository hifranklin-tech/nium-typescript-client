# CustomerDetailDTO

This object accepts customer details while assigning payment ID. This fields is conditional based on the Clients, who intends to leverage this API to request for VAN allocation without onboarding

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityType** | **string** |  | [optional] [default to undefined]
**corporate** | [**CorporateDTO**](CorporateDTO.md) |  | [optional] [default to undefined]
**individual** | [**IndividualDTO**](IndividualDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CustomerDetailDTO } from 'nium-client';

const instance: CustomerDetailDTO = {
    entityType,
    corporate,
    individual,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

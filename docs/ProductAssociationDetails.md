# ProductAssociationDetails

Additional details of the customer, in case it is an association such as association number and chairperson

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**associationName** | **string** | The full legal name of the association. | [optional] [default to undefined]
**associationNumber** | **string** | The registration number issued to the association by the relevant state or territorial authority. | [optional] [default to undefined]
**associationChairPerson** | **string** | The full name of the association’s chairperson, secretary, or treasurer. | [optional] [default to undefined]

## Example

```typescript
import { ProductAssociationDetails } from 'nium-client';

const instance: ProductAssociationDetails = {
    associationName,
    associationNumber,
    associationChairPerson,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

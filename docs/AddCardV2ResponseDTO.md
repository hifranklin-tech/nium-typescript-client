# AddCardV2ResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardHashId** | **string** | Unique card identifier generated while new/add-on card issuance. | [optional] [default to undefined]
**cardActivationStatus** | **string** | Card activation status values are VIRTUAL_ACTIVE and INACTIVE | [optional] [default to undefined]

## Example

```typescript
import { AddCardV2ResponseDTO } from 'nium-client';

const instance: AddCardV2ResponseDTO = {
    cardHashId,
    cardActivationStatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

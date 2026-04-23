# CardAssignResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardHashId** | **string** | Unique card identifier generated while new/add-on card issuance. | [optional] [default to undefined]
**cardActivationStatus** | **string** | The card activation status. The values are VIRTUAL_ACTIVE and INACTIVE. In case of Assign Card flow, expected status is INACTIVE. | [optional] [default to undefined]
**maskedCardNumber** | **string** | The 16-digit masked card number in format 1234-56xx-xxxx-3456. | [optional] [default to undefined]

## Example

```typescript
import { CardAssignResponseDTO } from 'nium-client';

const instance: CardAssignResponseDTO = {
    cardHashId,
    cardActivationStatus,
    maskedCardNumber,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

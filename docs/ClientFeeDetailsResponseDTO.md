# ClientFeeDetailsResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**segment** | **string** | The fee segment associated with a client. | [optional] [default to undefined]
**status** | **string** | This field contains the status and the possible values are: Active Inactive | [optional] [default to undefined]
**fees** | [**Array&lt;FeeResponseDTO&gt;**](FeeResponseDTO.md) | This is an array which contains the fees details. | [optional] [default to undefined]
**_default** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { ClientFeeDetailsResponseDTO } from 'nium-client';

const instance: ClientFeeDetailsResponseDTO = {
    segment,
    status,
    fees,
    _default,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# ClientFeeDetailsResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_default** | **boolean** |  | [optional] [default to undefined]
**fees** | [**Array&lt;FeeResponseDTO&gt;**](FeeResponseDTO.md) | This is an array which contains the fees details. | [optional] [default to undefined]
**segment** | **string** | The fee segment associated with a client. | [optional] [default to undefined]
**status** | **string** | This field contains the status and the possible values are: Active Inactive | [optional] [default to undefined]

## Example

```typescript
import { ClientFeeDetailsResponseDTO } from 'nium-client';

const instance: ClientFeeDetailsResponseDTO = {
    _default,
    fees,
    segment,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

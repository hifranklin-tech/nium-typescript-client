# RetrieveCardDetailsResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cvv** | **string** | The base64 encoded 3-digit CVV for the card. | [optional] [default to undefined]
**expiry** | **string** | The base64 encoded expiry date of the card in MM/YY format. | [optional] [default to undefined]
**unMaskedCardNumber** | **string** | The complete 16 digit card number in base64 encoded format. | [optional] [default to undefined]

## Example

```typescript
import { RetrieveCardDetailsResponseDTO } from 'nium-client';

const instance: RetrieveCardDetailsResponseDTO = {
    cvv,
    expiry,
    unMaskedCardNumber,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

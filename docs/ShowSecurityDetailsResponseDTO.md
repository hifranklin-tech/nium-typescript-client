# ShowSecurityDetailsResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cvv** | **string** | This field contains RSA Encrypted 3-digit CVV for the card. | [optional] [default to undefined]
**expiry** | **string** | This field contains RSA Encrypted expiry date of the card in MM/YY format. | [optional] [default to undefined]
**unMaskedCardNumber** | **string** | The complete 16 digit card number RSA Encrypted. | [optional] [default to undefined]

## Example

```typescript
import { ShowSecurityDetailsResponseDTO } from 'nium-client';

const instance: ShowSecurityDetailsResponseDTO = {
    cvv,
    expiry,
    unMaskedCardNumber,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

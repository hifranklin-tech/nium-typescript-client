# CustomerCardWidgetTokenRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardType** | **string** |  | [default to undefined]
**destinationCountry** | **string** | The 2-letter [ISO-2 country code](/docs/currency-and-country-codes) of the customer\&#39;s address. | [optional] [default to undefined]
**cssAttributes** | [**CSSAttributeDTO**](CSSAttributeDTO.md) |  | [optional] [default to undefined]
**clientDomain** | **string** | The domain name where the widget needs to be embedded | [optional] [default to undefined]

## Example

```typescript
import { CustomerCardWidgetTokenRequestDTO } from 'nium-client';

const instance: CustomerCardWidgetTokenRequestDTO = {
    cardType,
    destinationCountry,
    cssAttributes,
    clientDomain,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

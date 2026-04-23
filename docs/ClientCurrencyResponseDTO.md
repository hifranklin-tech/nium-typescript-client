# ClientCurrencyResponseDTO

This is an array objects which holds currency details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencyCode** | **string** | The 3-letter [ISO-4217 currency code](/docs/currency-and-country-codes). | [optional] [default to undefined]
**decimalUnit** | **number** | The decimal unit which will be used for rounding off, for example 0 | [optional] [default to undefined]
**remittanceAllowed** | **boolean** | This field specifies if the remittance is allowed with the respective currency or not. | [optional] [default to undefined]
**authorizationOrder** | **number** | This is the authorization order based on priority for available currencies. The order starts from 0 as a highest priority. | [optional] [default to undefined]
**fxSellAllowed** | **boolean** | This field indicates if forex sell is allowed or not for the currency. | [optional] [default to undefined]

## Example

```typescript
import { ClientCurrencyResponseDTO } from 'nium-client';

const instance: ClientCurrencyResponseDTO = {
    currencyCode,
    decimalUnit,
    remittanceAllowed,
    authorizationOrder,
    fxSellAllowed,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

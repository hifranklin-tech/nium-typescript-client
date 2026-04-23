# FeeResponseDTO

This is an array which contains the fees details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feeName** | **string** | The name of the fee or markup. | [optional] [default to undefined]
**authCurrency** | **string** | The 3-letter [ISO-4217 authorization currency code](/docs/currency-and-country-codes). | [optional] [default to undefined]
**transactionCurrency** | **string** | The 3-letter [ISO-4217 transaction currency code](/docs/currency-and-country-codes). | [optional] [default to undefined]
**feeCurrency** | **string** | The 3-letter [ISO-4217 fee currency code](/docs/currency-and-country-codes). | [optional] [default to undefined]
**feeValue** | **number** | The actual value of the fee. It can be an amount or percentage. | [optional] [default to undefined]
**fixed** | **boolean** | This field determines if the fee is a fixed amount or a percentage. It is true for a fixed amount and false for a percentage. | [optional] [default to undefined]
**slabFrom** | **number** | The starting point of the slab of transaction amount on which the fee is applicable. | [optional] [default to undefined]
**slabTo** | **number** | The ending point of the slab of transaction amount on which the fee is applicable. | [optional] [default to undefined]
**thresholdFeeValue** | **number** | The value of the threshold fee. It can be fixed or percentage. | [optional] [default to undefined]
**status** | **string** | This field contains the fee status and the possible values are: Active Inactive | [optional] [default to undefined]

## Example

```typescript
import { FeeResponseDTO } from 'nium-client';

const instance: FeeResponseDTO = {
    feeName,
    authCurrency,
    transactionCurrency,
    feeCurrency,
    feeValue,
    fixed,
    slabFrom,
    slabTo,
    thresholdFeeValue,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

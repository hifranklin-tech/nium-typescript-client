# CreateConversionError

error details description

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | The detailed error code associated with HTTP status 400. * &#x60;fx_constraint_violated_input&#x60;: The input violates the model constraints. * &#x60;fx_invalid_format_input&#x60;: The input format is invalid. * &#x60;fx_invalid_currency_code&#x60;: The input currency code is invalid. * &#x60;fx_quote_expired&#x60;: The provided quote is expired. * &#x60;fx_insufficient_funds&#x60;: The balance in the account is insufficient to complete/schedule the transfer.  | [default to undefined]
**description** | **string** |  | [default to undefined]
**field** | **any** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateConversionError } from 'nium-client';

const instance: CreateConversionError = {
    code,
    description,
    field,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

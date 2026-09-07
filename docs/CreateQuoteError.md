# CreateQuoteError

error details description

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | The detailed error code associated with HTTP status 400.  * &#x60;fx_constraint_violated_input&#x60;: The input violates the model constraints. * &#x60;fx_invalid_format_input&#x60;: The input format is invalid. * &#x60;fx_invalid_currency_code&#x60;: The input currency code is invalid.  | [default to undefined]
**description** | **string** |  | [default to undefined]
**field** | **any** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateQuoteError } from 'nium-client';

const instance: CreateQuoteError = {
    code,
    description,
    field,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

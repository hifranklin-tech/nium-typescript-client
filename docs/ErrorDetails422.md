# ErrorDetails422

Detailied information about the returned error(s).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Code detailing the type of error. | [default to undefined]
**field** | **string** | Field associated with the error (if applicable). | [optional] [default to undefined]
**description** | **string** | Error codes associated with HTTP status 422. Available values include:   - &#x60;bank_code_not_supported&#x60;: Bank code is not supported.   - &#x60;country_currency_not_supported&#x60;: Country-currency combination not supported. | [default to undefined]

## Example

```typescript
import { ErrorDetails422 } from 'nium-client';

const instance: ErrorDetails422 = {
    code,
    field,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

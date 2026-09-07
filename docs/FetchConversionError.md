# FetchConversionError

error details description

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | The detailed error code associated with HTTP status 400. * &#x60;fx_constraint_violated_input&#x60;: The input violates the model constraints.  | [default to undefined]
**description** | **string** |  | [default to undefined]
**field** | **any** |  | [optional] [default to undefined]

## Example

```typescript
import { FetchConversionError } from 'nium-client';

const instance: FetchConversionError = {
    code,
    description,
    field,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

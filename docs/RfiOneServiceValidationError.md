# RfiOneServiceValidationError

Field-level validation error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Machine-readable error code in snake_case | [optional] [default to undefined]
**description** | **string** | Human-readable error message | [optional] [default to undefined]
**field** | **any** | Request field name without array index prefix (e.g. fieldType, response.text) | [optional] [default to undefined]

## Example

```typescript
import { RfiOneServiceValidationError } from 'nium-client';

const instance: RfiOneServiceValidationError = {
    code,
    description,
    field,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

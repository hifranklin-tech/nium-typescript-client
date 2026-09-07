# PaymentIdError

error details description

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | The detailed error code associated with HTTP status 400.   - **invalid_input**: The input provided is invalid.   - **field_missing**: A required field is missing.   - **incorrect_value**: The value provided is incorrect.   - **unsupported_value**: The value provided is not supported.   - **incorrect_format**: The format of the value is incorrect.   - **duplicate_entry**: A duplicate entry was detected.   - **not_allowed**: The operation is not allowed.   - **dependency_failure**: A dependency check failed.   - **validation_error&#x60;: A validation error occurred. | [default to undefined]
**description** | **string** |  | [default to undefined]
**field** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { PaymentIdError } from 'nium-client';

const instance: PaymentIdError = {
    code,
    description,
    field,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

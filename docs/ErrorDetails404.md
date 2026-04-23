# ErrorDetails404

Detailed information about the returned errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Code detailing the type of error. | [default to undefined]
**field** | **string** | Field associated with the error (if applicable). | [optional] [default to undefined]
**description** | **string** | Invalid &#x60;verificationId&#x60;. | [default to undefined]

## Example

```typescript
import { ErrorDetails404 } from 'nium-client';

const instance: ErrorDetails404 = {
    code,
    field,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

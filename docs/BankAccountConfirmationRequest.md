# BankAccountConfirmationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amounts** | **Array&lt;number&gt;** | The micro-deposit amounts received, in any order. | [optional] [default to undefined]
**otp** | **string** | The one-time password (OTP) received in the statement narrative. | [optional] [default to undefined]

## Example

```typescript
import { BankAccountConfirmationRequest } from 'nium-client';

const instance: BankAccountConfirmationRequest = {
    amounts,
    otp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

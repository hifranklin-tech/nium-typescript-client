# PasscodeStatusDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardHashId** | **string** | Unique card identifier generated while new/add-on card issuance. | [optional] [default to undefined]
**passcodeEnrolled** | **boolean** | Passcode enrollment status | [optional] [default to undefined]
**createdDateTime** | **string** | Passcode enrollment created date and time | [optional] [default to undefined]
**updatedDateTime** | **string** | Passcode enrollment updated date and time | [optional] [default to undefined]

## Example

```typescript
import { PasscodeStatusDTO } from 'nium-client';

const instance: PasscodeStatusDTO = {
    cardHashId,
    passcodeEnrolled,
    createdDateTime,
    updatedDateTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

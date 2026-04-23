# ConfirmFundingInstrumentRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**otpReceived** | **string** | The one-time password (OTP) you received from Nium when calling the Add Funding Instrument API. This is a required field for EU and UK direct deposits. | [optional] [default to undefined]

## Example

```typescript
import { ConfirmFundingInstrumentRequestDTO } from 'nium-client';

const instance: ConfirmFundingInstrumentRequestDTO = {
    otpReceived,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

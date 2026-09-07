# ScaStatus

Multiple level SCA approach in a corporate PSU context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**otp** | **string** | The PSU can authorize the consent using the OTP code received as part of SCA process. | [optional] [default to undefined]
**scaApproach** | **string** | This data element must be contained, if the SCA approach is already fixed. The possible values are: EMBEDDED DECOUPLED REDIRECT The OAuth SCA approach will be subsumed by REDIRECT. | [optional] [default to undefined]
**scaRequred** | **boolean** | This field will ensure if the SCA is required for consent or not. | [optional] [default to undefined]
**status** | **string** | The consent authorization status. | [optional] [default to undefined]
**tppNokRedirectUrl** | **string** | Redirect URL for the failure response. | [optional] [default to undefined]
**tppRedirectUrl** | **string** | Redirect URL for the success response. | [optional] [default to undefined]

## Example

```typescript
import { ScaStatus } from 'nium-client';

const instance: ScaStatus = {
    otp,
    scaApproach,
    scaRequred,
    status,
    tppNokRedirectUrl,
    tppRedirectUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

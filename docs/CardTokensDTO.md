# CardTokensDTO

This array contains the token details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providerType** | **string** | This field contains the wallet provider.It can contain two values - googlePay applePay | [optional] [default to undefined]
**tokenReferenceNumber** | **string** | The reference number for the token provided against the provisioning request. | [optional] [default to undefined]
**tokenNumber** | **string** | The token value created for the provisioned card. | [optional] [default to undefined]
**tokenRequesterId** | **string** | The identifier for the provisioning service. | [optional] [default to undefined]
**deviceId** | **string** | The unique ID of the device on which the card is provisioned. | [optional] [default to undefined]
**deviceType** | **string** | The device type in numeric format used for provisioning. | [optional] [default to undefined]
**status** | **string** | The token status. | [optional] [default to undefined]
**createdAt** | **string** | The date and time of token creation in the format - YYYY-MM-DD HH:mm:ss. | [optional] [default to undefined]
**updatedAt** | **string** | The date and time of token update in the format - YYYY-MM-DD HH:mm:ss. | [optional] [default to undefined]

## Example

```typescript
import { CardTokensDTO } from 'nium-client';

const instance: CardTokensDTO = {
    providerType,
    tokenReferenceNumber,
    tokenNumber,
    tokenRequesterId,
    deviceId,
    deviceType,
    status,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# WalletDeviceDetailsDTO

This object accepts the device and IP details for the transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deviceInfo** | **string** | The details of the device the customer used to initate the request. | [optional] [default to undefined]
**ipAddress** | **string** | The IP address of the device the customer is using to initate the request. | [optional] [default to undefined]
**countryIP** | **string** | Accepts the country IP address of the device the customer is using to initate the request. | [optional] [default to undefined]
**sessionId** | **string** | The session ID of the instance the customer is initiating. | [optional] [default to undefined]

## Example

```typescript
import { WalletDeviceDetailsDTO } from 'nium-client';

const instance: WalletDeviceDetailsDTO = {
    deviceInfo,
    ipAddress,
    countryIP,
    sessionId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

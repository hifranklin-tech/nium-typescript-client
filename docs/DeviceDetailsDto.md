# DeviceDetailsDto

Accepts details about the device and IP address used for the transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deviceInfo** | **string** | Information about the device used by the customer to initiate the request. | [optional] [default to undefined]
**ipAddress** | **string** | The IP address of the device used by the customer to initiate the request. | [optional] [default to undefined]
**countryIP** | **string** | The country IP of the device used by the customer to initiate the request. | [optional] [default to undefined]
**sessionId** | **string** | The &#x60;sessionId&#x60; for the &#x60;session&#x60; the customer used to initiate the request. | [optional] [default to undefined]

## Example

```typescript
import { DeviceDetailsDto } from 'nium-client';

const instance: DeviceDetailsDto = {
    deviceInfo,
    ipAddress,
    countryIP,
    sessionId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

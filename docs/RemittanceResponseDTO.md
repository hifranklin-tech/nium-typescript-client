# RemittanceResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** | This field will return a success message if the money transferred successfully. | [optional] [default to undefined]
**payment_id** | **string** | The unique payment ID. | [optional] [default to undefined]
**system_reference_number** | **string** | This is a unique system reference number assigned to the transaction. | [optional] [default to undefined]
**estimatedDeliveryTime** | **string** | This field is estimated delivery time of transaction. | [optional] [default to undefined]
**systemReferenceNumber** | **string** | This is a unique system reference number assigned to the transaction. | [optional] [default to undefined]

## Example

```typescript
import { RemittanceResponseDTO } from 'nium-client';

const instance: RemittanceResponseDTO = {
    message,
    payment_id,
    system_reference_number,
    estimatedDeliveryTime,
    systemReferenceNumber,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# RemittanceEventsResponseDTO2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check** | [**CheckDTO**](CheckDTO.md) |  | [optional] [default to undefined]
**errorCode** | **string** | This field contains ISO error code. | [optional] [default to undefined]
**errorDescription** | **string** | This field contains ISO reason description. | [optional] [default to undefined]
**errorReasonCode** | **string** | This field contains ISO reason code. | [optional] [default to undefined]
**estimatedDeliveryTime** | **string** |  | [optional] [default to undefined]
**externalId** | **string** |  | [optional] [default to undefined]
**gpi** | [**GPIResponseDTO**](GPIResponseDTO.md) |  | [optional] [default to undefined]
**isCancellable** | **boolean** | Indicates whether this transaction can currently be cancelled via the Cancel Remittance API. Present only on the latest status event; absent on historical events. | [optional] [default to undefined]
**lastUpdatedAt** | **string** |  | [optional] [default to undefined]
**partnerReferenceNumber** | **string** |  | [optional] [default to undefined]
**paymentReferenceNumber** | **string** |  | [optional] [default to undefined]
**paymode** | **string** | This field shows payout mode through which payment is processed. | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**statusDetails** | **string** |  | [optional] [default to undefined]
**subStatus** | **string** |  | [optional] [default to undefined]
**systemReferenceNumber** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { RemittanceEventsResponseDTO2 } from 'nium-client';

const instance: RemittanceEventsResponseDTO2 = {
    check,
    errorCode,
    errorDescription,
    errorReasonCode,
    estimatedDeliveryTime,
    externalId,
    gpi,
    isCancellable,
    lastUpdatedAt,
    partnerReferenceNumber,
    paymentReferenceNumber,
    paymode,
    status,
    statusDetails,
    subStatus,
    systemReferenceNumber,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

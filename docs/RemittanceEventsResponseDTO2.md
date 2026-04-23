# RemittanceEventsResponseDTO2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**systemReferenceNumber** | **string** |  | [optional] [default to undefined]
**partnerReferenceNumber** | **string** |  | [optional] [default to undefined]
**paymentReferenceNumber** | **string** |  | [optional] [default to undefined]
**externalId** | **string** |  | [optional] [default to undefined]
**estimatedDeliveryTime** | **string** |  | [optional] [default to undefined]
**subStatus** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**statusDetails** | **string** |  | [optional] [default to undefined]
**lastUpdatedAt** | **string** |  | [optional] [default to undefined]
**gpi** | [**GPIResponseDTO**](GPIResponseDTO.md) |  | [optional] [default to undefined]
**check** | [**CheckDTO**](CheckDTO.md) |  | [optional] [default to undefined]
**errorCode** | **string** | This field contains ISO error code. | [optional] [default to undefined]
**errorReasonCode** | **string** | This field contains ISO reason code. | [optional] [default to undefined]
**errorDescription** | **string** | This field contains ISO reason description. | [optional] [default to undefined]
**paymode** | **string** | This field shows payout mode through which payment is processed. | [optional] [default to undefined]

## Example

```typescript
import { RemittanceEventsResponseDTO2 } from 'nium-client';

const instance: RemittanceEventsResponseDTO2 = {
    systemReferenceNumber,
    partnerReferenceNumber,
    paymentReferenceNumber,
    externalId,
    estimatedDeliveryTime,
    subStatus,
    status,
    statusDetails,
    lastUpdatedAt,
    gpi,
    check,
    errorCode,
    errorReasonCode,
    errorDescription,
    paymode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

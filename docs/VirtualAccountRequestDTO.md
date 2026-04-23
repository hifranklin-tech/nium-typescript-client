# VirtualAccountRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size** | **number** | Page size | [optional] [default to undefined]
**page** | **number** | Page number | [optional] [default to undefined]
**order** | **string** | Property order | [optional] [default to undefined]
**property** | **string** | Property name | [optional] [default to undefined]
**startDate** | **string** |  | [optional] [default to undefined]
**endDate** | **string** |  | [optional] [default to undefined]
**currencyCode** | **string** |  | [optional] [default to undefined]
**tagKey** | **string** |  | [optional] [default to undefined]
**tagValue** | **string** |  | [optional] [default to undefined]
**status** | **string** | The status of the funding instrument. | [optional] [default to undefined]
**uniquePaymentId** | **string** | Unique payment ID to filter virtual accounts | [optional] [default to undefined]

## Example

```typescript
import { VirtualAccountRequestDTO } from 'nium-client';

const instance: VirtualAccountRequestDTO = {
    size,
    page,
    order,
    property,
    startDate,
    endDate,
    currencyCode,
    tagKey,
    tagValue,
    status,
    uniquePaymentId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

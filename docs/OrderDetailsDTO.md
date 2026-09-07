# OrderDetailsDTO

Order Details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**goods** | [**Goods**](Goods.md) |  | [default to undefined]
**logistics** | [**Logistics**](Logistics.md) |  | [optional] [default to undefined]
**order** | [**Order**](Order.md) |  | [default to undefined]
**payer** | [**Payer**](Payer.md) |  | [optional] [default to undefined]
**recipient** | [**Recipient**](Recipient.md) |  | [optional] [default to undefined]
**seller** | [**Seller**](Seller.md) |  | [default to undefined]
**trade** | [**Trade**](Trade.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrderDetailsDTO } from 'nium-client';

const instance: OrderDetailsDTO = {
    goods,
    logistics,
    order,
    payer,
    recipient,
    seller,
    trade,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

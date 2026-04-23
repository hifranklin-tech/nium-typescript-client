# Order

This object accepts the order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number** | **string** | Order number of the sale done by the seller/marketplace | [default to undefined]
**amount** | **number** | Amount of the order of the sale done by the seller/marketplace | [default to undefined]
**time** | **string** | Date and time the sale done by the seller/marketplace | [default to undefined]
**commodity** | **string** | Different based on purpose code. | [default to undefined]
**description** | **string** | Order description | [optional] [default to undefined]

## Example

```typescript
import { Order } from 'nium-client';

const instance: Order = {
    number,
    amount,
    time,
    commodity,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

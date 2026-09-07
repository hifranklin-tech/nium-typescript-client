# Order

This object accepts the order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount of the order of the sale done by the seller/marketplace | [default to undefined]
**commodity** | **string** | Different based on purpose code. | [default to undefined]
**description** | **string** | Order description | [optional] [default to undefined]
**number** | **string** | Order number of the sale done by the seller/marketplace | [default to undefined]
**time** | **string** | Date and time the sale done by the seller/marketplace | [default to undefined]

## Example

```typescript
import { Order } from 'nium-client';

const instance: Order = {
    amount,
    commodity,
    description,
    number,
    time,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# TierRange

The ranges array contains multiple objects, each representing range of fee tiers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **string** | End value of the range. | [optional] [default to undefined]
**price** | [**PriceV3**](PriceV3.md) |  | [optional] [default to undefined]
**start** | **string** | Start value of the range. | [optional] [default to undefined]

## Example

```typescript
import { TierRange } from 'nium-client';

const instance: TierRange = {
    end,
    price,
    start,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

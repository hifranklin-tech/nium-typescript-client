# PriceV3


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Determines whether fee is flat or percentage. | [optional] [default to undefined]
**value** | **string** | Value of fee. | [optional] [default to undefined]
**currency** | **string** |  Currency should be accepted as the [3-letter ISO-4217 currency code]. | [optional] [default to undefined]
**percentageOf** | **string** | Percentage on the parameter. | [optional] [default to undefined]

## Example

```typescript
import { PriceV3 } from 'nium-client';

const instance: PriceV3 = {
    type,
    value,
    currency,
    percentageOf,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

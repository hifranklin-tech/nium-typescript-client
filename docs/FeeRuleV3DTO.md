# FeeRuleV3DTO

The rules array contains multiple objects, each contains the condition and fee values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | It represent whether pricing is tiered or non-tiered. | [optional] [default to undefined]
**condition** | [**Condition**](Condition.md) |  | [optional] [default to undefined]
**price** | [**PriceV3**](PriceV3.md) |  | [optional] [default to undefined]
**tier** | [**TierPrice**](TierPrice.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FeeRuleV3DTO } from 'nium-client';

const instance: FeeRuleV3DTO = {
    type,
    condition,
    price,
    tier,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# TierOn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameter** | **string** | This parameter determines which tier should be picked for charging. | [optional] [default to undefined]
**currency** | **string** |  Currency should be accepted as the [3-letter ISO-4217 currency code]. | [optional] [default to undefined]
**aggregatedBy** | **string** | This parameter determines the tiering whether it is volumetric or quantity. | [optional] [default to undefined]

## Example

```typescript
import { TierOn } from 'nium-client';

const instance: TierOn = {
    parameter,
    currency,
    aggregatedBy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

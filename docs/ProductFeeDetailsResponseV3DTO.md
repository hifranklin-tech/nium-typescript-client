# ProductFeeDetailsResponseV3DTO

The fees array contains multiple objects, each representing fee details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fee** | **string** | Name of fee. | [optional] [default to undefined]
**rules** | [**Array&lt;FeeRuleV3DTO&gt;**](FeeRuleV3DTO.md) | The rules array contains multiple objects, each contains the condition and fee values. | [optional] [default to undefined]

## Example

```typescript
import { ProductFeeDetailsResponseV3DTO } from 'nium-client';

const instance: ProductFeeDetailsResponseV3DTO = {
    fee,
    rules,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

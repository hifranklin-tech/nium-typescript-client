# AdditionalFeesDto

The client\'s additional fees.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feeType** | **string** | The fee type; either **FIXED** (flat) or **PERCENTAGE**. | [optional] [default to undefined]
**feeValue** | **number** | The client\&#39;s fee to be added on to the existing fee. | [optional] [default to undefined]
**fxMarkup** | **number** | The client\&#39;s additional fx markup rate to be added on to the existing fx markup. | [optional] [default to undefined]

## Example

```typescript
import { AdditionalFeesDto } from 'nium-client';

const instance: AdditionalFeesDto = {
    feeType,
    feeValue,
    fxMarkup,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

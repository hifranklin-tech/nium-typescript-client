# ClientProductFeeDetailsResponseV3DTO

The products array contains multiple product objects, each representing the product Fee details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the product. | [optional] [default to undefined]
**fees** | [**Array&lt;ProductFeeDetailsResponseV3DTO&gt;**](ProductFeeDetailsResponseV3DTO.md) | The fees array contains multiple objects, each representing fee details. | [optional] [default to undefined]

## Example

```typescript
import { ClientProductFeeDetailsResponseV3DTO } from 'nium-client';

const instance: ClientProductFeeDetailsResponseV3DTO = {
    name,
    fees,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

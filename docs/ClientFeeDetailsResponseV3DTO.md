# ClientFeeDetailsResponseV3DTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**planName** | **string** | Name of Segment/Plan. | [optional] [default to undefined]
**isDefault** | **boolean** | This field describes whether the plan is default one or not | [optional] [default to undefined]
**products** | [**Array&lt;ClientProductFeeDetailsResponseV3DTO&gt;**](ClientProductFeeDetailsResponseV3DTO.md) | The products array contains multiple product objects, each representing the product Fee details. | [optional] [default to undefined]

## Example

```typescript
import { ClientFeeDetailsResponseV3DTO } from 'nium-client';

const instance: ClientFeeDetailsResponseV3DTO = {
    planName,
    isDefault,
    products,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

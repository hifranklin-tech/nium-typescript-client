# UserRequestAddress

Billing address. Optional overall, but when supplied addressLine1, city, state, postcode and country are mandatory (enforced by the schema). addressLine2 is optional. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressLine1** | **string** |  | [default to undefined]
**addressLine2** | **string** |  | [optional] [default to undefined]
**city** | **string** |  | [default to undefined]
**country** | **string** |  | [default to undefined]
**postcode** | **string** |  | [default to undefined]
**state** | **string** |  | [default to undefined]

## Example

```typescript
import { UserRequestAddress } from 'nium-client';

const instance: UserRequestAddress = {
    addressLine1,
    addressLine2,
    city,
    country,
    postcode,
    state,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

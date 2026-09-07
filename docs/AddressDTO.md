# AddressDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressLine1** | **string** | First line of the address. | [optional] [default to undefined]
**addressLine2** | **string** | Second line of the address. | [optional] [default to undefined]
**city** | **string** | City. | [optional] [default to undefined]
**country** | **string** | Two-letter ISO country code. | [optional] [default to undefined]
**postcode** | **string** | Postal code. Alphanumeric, 3 to 10 characters. | [optional] [default to undefined]
**state** | **string** | State or province. | [optional] [default to undefined]

## Example

```typescript
import { AddressDto } from 'nium-client';

const instance: AddressDto = {
    addressLine1,
    addressLine2,
    city,
    country,
    postcode,
    state,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# ProductBusinessAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressLine1** | **string** | First line of the business\&#39; address. | [optional] [default to undefined]
**addressLine2** | **string** | Second line of the business\&#39; address (optional). | [optional] [default to undefined]
**city** | **string** | The city of the business address. | [optional] [default to undefined]
**state** | **string** | State or province of the business\&#39; address. This field is required in case business address is being sent. | [optional] [default to undefined]
**country** | **string** | The country of the business address. | [optional] [default to undefined]
**postcode** | **string** | The postal code or ZIP code of the business address. | [optional] [default to undefined]

## Example

```typescript
import { ProductBusinessAddress } from 'nium-client';

const instance: ProductBusinessAddress = {
    addressLine1,
    addressLine2,
    city,
    state,
    country,
    postcode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

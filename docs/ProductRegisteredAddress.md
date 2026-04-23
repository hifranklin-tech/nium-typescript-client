# ProductRegisteredAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressLine1** | **string** | First line of the corporation\&#39;s address. | [optional] [default to undefined]
**addressLine2** | **string** | Second line of the corporation\&#39;s address (optional). | [optional] [default to undefined]
**city** | **string** | City where the corporation is based. | [optional] [default to undefined]
**state** | **string** | State or province of the applicant or corporation\&#39;s address. | [optional] [default to undefined]
**country** | **string** | The country where the corporation is registered. Use values from the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request. | [optional] [default to undefined]
**postcode** | **string** | The zip or postal code of the address registered to the corporation being onboarded. | [optional] [default to undefined]

## Example

```typescript
import { ProductRegisteredAddress } from 'nium-client';

const instance: ProductRegisteredAddress = {
    addressLine1,
    addressLine2,
    city,
    state,
    country,
    postcode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

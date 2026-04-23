# CorporateAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressLine1** | **string** | First line of the individual\&#39;s address. | [optional] [default to undefined]
**addressLine2** | **string** | Second line of the individual\&#39;s address (optional). | [optional] [default to undefined]
**city** | **string** | The individual\&#39;s residential city. | [optional] [default to undefined]
**state** | **string** | State or province of the individual\&#39;s address. | [optional] [default to undefined]
**country** | **string** | The [2-letter ISO Alpha-2 country code](/docs/currency-and-country-codes) for the residential country of the individual. | [optional] [default to undefined]
**postcode** | **string** | The zip or postal code of the indivdual\&#39;s residential address. | [optional] [default to undefined]

## Example

```typescript
import { CorporateAddress } from 'nium-client';

const instance: CorporateAddress = {
    addressLine1,
    addressLine2,
    city,
    state,
    country,
    postcode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

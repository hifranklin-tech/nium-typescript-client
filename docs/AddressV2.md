# AddressV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressLine1** | **string** | First line of the individual\&#39;s address. | [optional] [default to undefined]
**addressLine2** | **string** | Second line of the individual\&#39;s address (optional). | [optional] [default to undefined]
**city** | **string** | City where the applicant lives. | [optional] [default to undefined]
**state** | **string** | State where the individual lives. | [optional] [default to undefined]
**country** | **string** | The 2-letter [ISO-2 country code](/docs/currency-and-country-codes) of the individual\&#39;s address. Use the [Fetch Corporate Constants](ref:fetchcorporateconstantsusingget) request to get the list of valid countries. | [optional] [default to undefined]
**postCode** | **string** | This field stores the zip code. | [optional] [default to undefined]

## Example

```typescript
import { AddressV2 } from 'nium-client';

const instance: AddressV2 = {
    addressLine1,
    addressLine2,
    city,
    state,
    country,
    postCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

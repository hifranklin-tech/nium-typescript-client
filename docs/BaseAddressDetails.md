# BaseAddressDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressLine1** | **string** | First line of the customer billing address | [default to undefined]
**addressLine2** | **string** | Second line of the customer billing address | [optional] [default to undefined]
**city** | **string** | City of the customer billing address | [default to undefined]
**postcode** | **string** | Postcode of the customer billing address | [default to undefined]
**country** | **string** | 2-letter ISO Alpha-2 country code denoting the country of the customer billing address | [default to undefined]

## Example

```typescript
import { BaseAddressDetails } from 'nium-client';

const instance: BaseAddressDetails = {
    addressLine1,
    addressLine2,
    city,
    postcode,
    country,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

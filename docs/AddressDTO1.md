# AddressDTO1

This object accepts the address detail for the customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressLine1** | **string** | This field accepts the line 1 of the customer’s address. Maximum character limit: 100. | [optional] [default to undefined]
**addressLine2** | **string** | This field accepts the line 2 of the customer’s address. Maximum character limit: 100. | [optional] [default to undefined]
**city** | **string** | This field accepts the city of the customer’s address. Maximum character limit: 50. | [optional] [default to undefined]
**state** | **string** | This field accepts the state of the customer’s address | [optional] [default to undefined]
**country** | **string** | This field accepts the 2-letter [ISO Alpha-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf) denoting the customer’s country. | [optional] [default to undefined]
**postcode** | **string** | This field accepts the postal code of the customer’s address. The acceptable special characters are: Hypen(-) Hash(#) Space( ) Minimum character limit: 3 Maximum character limit: 10 Example: CM-4165 65 | [optional] [default to undefined]

## Example

```typescript
import { AddressDTO1 } from 'nium-client';

const instance: AddressDTO1 = {
    addressLine1,
    addressLine2,
    city,
    state,
    country,
    postcode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

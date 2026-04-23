# CardsAddress

Delivery address details, mandatory fields : addressLine1, postCode, city, country

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressLine1** | **string** | First line of the cardowner\&#39;s address. | [optional] [default to undefined]
**addressLine2** | **string** | Second line of the cardowner\&#39;s address (optional). | [optional] [default to undefined]
**city** | **string** | City where the cardowner lives. | [optional] [default to undefined]
**landmark** | **string** | Landmark is an optional field used to specify a nearby recognizable location or point of reference to assist | [optional] [default to undefined]
**country** | **string** | Country is two-letter ISO2 country code of the address | [optional] [default to undefined]
**state** | **string** | State where the cardowner lives. | [optional] [default to undefined]
**postCode** | **string** | Post code field is where the postal code or ZIP code of the address | [optional] [default to undefined]

## Example

```typescript
import { CardsAddress } from 'nium-client';

const instance: CardsAddress = {
    addressLine1,
    addressLine2,
    city,
    landmark,
    country,
    state,
    postCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

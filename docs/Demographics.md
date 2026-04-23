# Demographics

Demographic details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **string** | The first name of the card holder. | [optional] [default to undefined]
**middleName** | **string** | The middle name of the card holder. | [optional] [default to undefined]
**lastName** | **string** | The last name of the card holder. | [optional] [default to undefined]
**email** | **string** | The email ID of the card holder. | [optional] [default to undefined]
**countryCode** | **string** | The 2-letter [ISO-2 country code](/docs/currency-and-country-codes) for identifying the country prefix to a mobile number. | [optional] [default to undefined]
**mobile** | **string** | The mobile number of the card holder--digits only--without the country code. | [optional] [default to undefined]
**currentDeliveryAddress** | [**CardsAddress**](CardsAddress.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Demographics } from 'nium-client';

const instance: Demographics = {
    firstName,
    middleName,
    lastName,
    email,
    countryCode,
    mobile,
    currentDeliveryAddress,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

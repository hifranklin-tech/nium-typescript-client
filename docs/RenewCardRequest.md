# RenewCardRequest

A card can be renewed using the Renew Card API on or before 45 days from the date of expiry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardExpiry** | **string** | The expiry date is applicable only for Virtual cards and not applicable for physical cards. This field is in MMYY format. For Virtual cards, the expiry date can be a maximum of 5 years from when the API is used. | [optional] [default to undefined]
**useCurrentAddress** | **boolean** | Flag indicates if the address details for the renewed card must be current address on file or a new address. This flag should only be used for physical cards.  Skip this parameter for virtual cards.   **Note**: &#x60;delivery&#x60; field is mandatory if the value for this flag is true | [optional] [default to undefined]
**delivery** | [**CardsAddress**](CardsAddress.md) |  | [optional] [default to undefined]
**email** | **string** | Email Address to be mapped to the renewed card. | [optional] [default to undefined]
**countryCode** | **string** | Mobile country code to be mapped to the renewed card, it is two-letter ISO2 country code. | [optional] [default to undefined]
**mobile** | **string** | Mobile number to be mapped to the renewed card | [optional] [default to undefined]

## Example

```typescript
import { RenewCardRequest } from 'nium-client';

const instance: RenewCardRequest = {
    cardExpiry,
    useCurrentAddress,
    delivery,
    email,
    countryCode,
    mobile,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

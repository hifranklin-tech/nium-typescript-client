# ConvertCardRequestDTO

Convert card request payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**useCurrentAddress** | **boolean** | Should the delivery address be changed or not? | [default to undefined]
**plasticId** | **string** | Pre-defined plastic Id defined at Nium and communicated to client. It is used to determine the card design | [default to undefined]
**email** | **string** | The email ID for the add-on cardholder. This field is mandatory when demogOverridden is true | [optional] [default to undefined]
**countryCode** | **string** | Country is two-letter ISO2 country code of the address | [optional] [default to undefined]
**mobile** | **string** | Mobile field is where the recipient\&#39;s mobile phone number. This field is mandatory when useBillingAddress is true | [optional] [default to undefined]
**delivery** | [**CardsAddress**](CardsAddress.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ConvertCardRequestDTO } from 'nium-client';

const instance: ConvertCardRequestDTO = {
    useCurrentAddress,
    plasticId,
    email,
    countryCode,
    mobile,
    delivery,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# BlockAndReplaceCardRequestDTO

A card can be blocked and replaced using the Block And Replace Card API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **string** | This field accepts the reason for card block. The possible values are: fraud lost stolen damaged | [default to undefined]
**replaceCard** | **boolean** | A Flag that specifies whether to replace card or not | [default to undefined]
**plasticId** | **string** | Pre-defined plastic Id defined at Nium and communicated to client. It is used to determine the card design | [optional] [default to undefined]
**cardExpiry** | **string** | The expiry date is applicable only for Virtual cards and not applicable for physical cards. This field is in MMYY format. For Virtual cards, the expiry date can be a maximum of 5 years from when the API is used. | [optional] [default to undefined]
**useCurrentAddress** | **boolean** | Boolean \&quot;useCurrentAddress\&quot; specifies whether to use existing address in the system or new address passed in address object | [optional] [default to undefined]
**delivery** | [**CardsAddress**](CardsAddress.md) |  | [optional] [default to undefined]
**email** | **string** | Card holder Email | [optional] [default to undefined]
**countryCode** | **string** | Country is two-letter ISO2 country code for mobile | [optional] [default to undefined]
**mobile** | **string** | Mobile field is where the recipient\&#39;s mobile phone number. This field is mandatory when useBillingAddress is true | [optional] [default to undefined]

## Example

```typescript
import { BlockAndReplaceCardRequestDTO } from 'nium-client';

const instance: BlockAndReplaceCardRequestDTO = {
    reason,
    replaceCard,
    plasticId,
    cardExpiry,
    useCurrentAddress,
    delivery,
    email,
    countryCode,
    mobile,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

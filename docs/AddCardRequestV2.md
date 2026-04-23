# AddCardRequestV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardProductId** | **string** | Pre-defined product Id, defined at Nium and communicated to client for card issuance. | [default to undefined]
**cardType** | **string** | This field accepts the card type to be issued. The acceptable values are: \&quot; + \&quot;PHY: This value is used to issue a physical card \&quot; + \&quot;VIR: This value is used to issue a virtual card \&quot; + \&quot;VIRUP2PHY: This value is used to issue a virtual upgrade to physical card | [default to undefined]
**cardExpiry** | **string** | Expiry date to be set for virtual and virtual physical cards. For physical cards do not send this field. This field is in MMYY format. For virtual cards, the last acceptable date is the year-end of the 5th year from now. Card will be valid till the last day of the month and year of expiry. | [default to undefined]
**nameOnCard** | **string** | This field can be used to print the customer name. The value sent in this field will be printed on the card.If this field is left empty, line 1 will not be printed on the card. This field accepts alphanumeric characters along with space(s) The maximum character limit is 26. | [optional] [default to undefined]
**additionalLine** | **string** | This field can be used to send the company name or employeeID. Anything sent in this field will be printed on the card.  This field accepts alphanumeric characters along with space(s). The maximum character limit is 26. | [optional] [default to undefined]
**delivery** | [**CardsAddress**](CardsAddress.md) |  | [optional] [default to undefined]
**email** | **string** | Email of the card holder. | [optional] [default to undefined]
**countryCode** | **string** | Country code of recipient\&#39;s phone number accepted in [2-letter ISO Alpha-2 country code](/docs/currency-and-country-codes). | [optional] [default to undefined]
**mobile** | **string** | Mobile field is where the recipient\&#39;s mobile phone number. | [optional] [default to undefined]
**issuanceMode** | **string** | This field is only required for physical cards(PHY) mode of delivery of a card. Possible values are: NORMAL_DELIVERY_LOCAL EXPRESS_DELIVERY_LOCAL INTERNATIONAL_DELIVERY | [optional] [default to undefined]
**plasticId** | **string** | Pre-defined plastic Id defined at Nium and communicated to client. It is used to determine the card design | [default to undefined]
**childCustomerHashId** | **string** | Unique ID for an individual customer linked to a parent-level corporate customer. Used to associate and track the child customer within a corporate customer\&#39;s program. | [optional] [default to undefined]
**additionalInfo** | **{ [key: string]: string; }** | This field accepts additional information in form of map with key value pairs as string. | [optional] [default to undefined]

## Example

```typescript
import { AddCardRequestV2 } from 'nium-client';

const instance: AddCardRequestV2 = {
    cardProductId,
    cardType,
    cardExpiry,
    nameOnCard,
    additionalLine,
    delivery,
    email,
    countryCode,
    mobile,
    issuanceMode,
    plasticId,
    childCustomerHashId,
    additionalInfo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

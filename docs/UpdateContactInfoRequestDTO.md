# UpdateContactInfoRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | Card holder Email | [optional] [default to undefined]
**countryCode** | **string** | Country code for mobile number in [ISO Alpha-2](/docs/currency-and-country-codes) format. | [optional] [default to undefined]
**mobile** | **string** | Card holder mobile number | [optional] [default to undefined]
**delivery** | [**CardsAddress**](CardsAddress.md) |  | [optional] [default to undefined]
**nameOnCard** | **string** | This field can be used to print the customer name. The value sent in this field will be updated on the card.If this field is left empty, line 1 will not be printed on the card. This field accepts alphanumeric characters along with space(s) The maximum character limit is 26. | [optional] [default to undefined]

## Example

```typescript
import { UpdateContactInfoRequestDTO } from 'nium-client';

const instance: UpdateContactInfoRequestDTO = {
    email,
    countryCode,
    mobile,
    delivery,
    nameOnCard,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

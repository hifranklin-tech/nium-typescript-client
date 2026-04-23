# CustomerLinkAccountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountNumber** | **string** | The customer account number or IBAN. | [optional] [default to undefined]
**country** | **string** | The [2-letter ISO-2 country code](/docs/currency-and-country-codes) where the bank account resides. | [default to undefined]
**currency** | **string** | The 3-letter [ISO-4217 currency code](/docs/currency-and-country-codes) for the linked account. | [default to undefined]
**fundingChannel** | **string** | The mode to use to fund a wallet. Adding a new funding instrument is only supported for direct debit. | [default to undefined]
**rails** | **string** | The payment rails which funds will be sent through. | [optional] [default to undefined]
**routingCodes** | [**Array&lt;RoutingInfo&gt;**](RoutingInfo.md) | Accepts the List of routing code type and value. | [optional] [default to undefined]

## Example

```typescript
import { CustomerLinkAccountRequest } from 'nium-client';

const instance: CustomerLinkAccountRequest = {
    accountNumber,
    country,
    currency,
    fundingChannel,
    rails,
    routingCodes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

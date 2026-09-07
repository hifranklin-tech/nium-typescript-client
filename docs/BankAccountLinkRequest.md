# BankAccountLinkRequest

Bank Account Link Request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountNumber** | **string** | The bank account number | [default to undefined]
**authenticationType** | [**AuthenticationType**](AuthenticationType.md) |  | [optional] [default to undefined]
**country** | **string** | The ISO 3166-2 country code. | [default to undefined]
**currency** | **string** | The ISO 4217 currency code. | [default to undefined]
**isCustomerAccount** | **boolean** | Indivates if the bank account belongs to the customer. | [default to undefined]
**routingCodes** | [**Array&lt;ExternalAccountServiceRoutingInfo&gt;**](ExternalAccountServiceRoutingInfo.md) | The bank account\&#39;s routing codes. | [default to undefined]
**tags** | **{ [key: string]: string; }** | A set of key-value pairs to help the client retrieve resources.  A maximum number of 15 tags is allowed. | [optional] [default to undefined]

## Example

```typescript
import { BankAccountLinkRequest } from 'nium-client';

const instance: BankAccountLinkRequest = {
    accountNumber,
    authenticationType,
    country,
    currency,
    isCustomerAccount,
    routingCodes,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

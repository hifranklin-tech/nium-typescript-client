# BankAccountResponse

Bank account response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bankAccountId** | **string** | Unique identifier of a linked bank account. | [optional] [default to undefined]
**accountNumber** | **string** | The bank account number | [optional] [default to undefined]
**routingCodes** | [**Array&lt;ExternalAccountServiceRoutingInfo&gt;**](ExternalAccountServiceRoutingInfo.md) | The bank account\&#39;s routing codes. | [optional] [default to undefined]
**country** | **string** | The ISO 3166-2 country code. | [optional] [default to undefined]
**currency** | **string** | The ISO 4217 currency code. | [optional] [default to undefined]
**verification** | [**BankAccountActionState**](BankAccountActionState.md) |  | [optional] [default to undefined]
**authentication** | [**BankAccountActionState**](BankAccountActionState.md) |  | [optional] [default to undefined]
**authenticationType** | [**AuthenticationType**](AuthenticationType.md) |  | [optional] [default to undefined]
**isCustomerAccount** | **boolean** | Indivates if the bank account belongs to the customer. | [optional] [default to undefined]
**tags** | **{ [key: string]: string; }** | A set of key-value pairs used by the client to rectrieve data.  A maximum of number 15 tags are allowed. | [optional] [default to undefined]
**createdAt** | **string** | The date and time when this bank account was first linked. | [optional] [default to undefined]
**updatedAt** | **string** | The date and time when this bank account was last updated at. | [optional] [default to undefined]

## Example

```typescript
import { BankAccountResponse } from 'nium-client';

const instance: BankAccountResponse = {
    bankAccountId,
    accountNumber,
    routingCodes,
    country,
    currency,
    verification,
    authentication,
    authenticationType,
    isCustomerAccount,
    tags,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

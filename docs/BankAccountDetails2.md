# BankAccountDetails2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountName** | **string** | Name of the beneficiary for the bank account. | [default to undefined]
**accountNumber** | **string** | The bank account number. | [default to undefined]
**bankAccountType** | **string** | Type of Bank account. | [optional] [default to undefined]
**bankName** | **string** | Name of the bank. | [default to undefined]
**bankCountry** | **string** | A 2-letter ISO country code. | [default to undefined]
**currency** | **string** | Currency in which the bank account operates | [default to undefined]
**bankCode** | **string** | Bank identifier code used to uniquely identify the bank depending on the country | [optional] [default to undefined]
**identificationType** | **string** | Type of bank account identifier required for the selected country | [optional] [default to undefined]
**identificationValue** | **string** | The actual value of the bank account identifier corresponding to the selected identification type | [optional] [default to undefined]
**localRegisteredName** | **string** | Account holder name as registered with the bank, in the local or official format | [optional] [default to undefined]
**routingCodes** | [**Array&lt;BankAccountDetails2RoutingCodesInner&gt;**](BankAccountDetails2RoutingCodesInner.md) | List of routing codes for the bank account. | [default to undefined]

## Example

```typescript
import { BankAccountDetails2 } from 'nium-client';

const instance: BankAccountDetails2 = {
    accountName,
    accountNumber,
    bankAccountType,
    bankName,
    bankCountry,
    currency,
    bankCode,
    identificationType,
    identificationValue,
    localRegisteredName,
    routingCodes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

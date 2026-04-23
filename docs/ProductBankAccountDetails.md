# ProductBankAccountDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountName** | **string** | The name of the bank account beneficiary.    - Supports alphanumeric characters and the following special characters: &#x60;&amp; . , ( ) _ \&#39; / -.&#x60;   - Maximum length: 140 characters. | [optional] [default to undefined]
**bankName** | **string** | The name of the bank.   Maximum length: 255 characters. | [optional] [default to undefined]
**accountNumber** | **string** | Account number. This field can contain alphanumeric characters for a maximum length of 35 characters. | [optional] [default to undefined]
**currency** | **string** | The primary currency of the bank account. | [optional] [default to undefined]
**bankAccountType** | **string** | Type of Bank account. | [optional] [default to undefined]
**routingType** | **string** | Routing type of the bank account. Eg. SWIFT, BANK CODE. | [optional] [default to undefined]
**routingValue** | **string** | Routing value of the bank account for the provided routingType. This field can contain alphanumeric characters. | [optional] [default to undefined]
**routingType2** | **string** | An additional routing type for the bank account (e.g., &#x60;BRANCH_CODE&#x60;). | [optional] [default to undefined]
**routingValue2** | **string** | The routing value associated with the specified &#x60;routingType2&#x60;. Supports alphanumeric characters. | [optional] [default to undefined]

## Example

```typescript
import { ProductBankAccountDetails } from 'nium-client';

const instance: ProductBankAccountDetails = {
    accountName,
    bankName,
    accountNumber,
    currency,
    bankAccountType,
    routingType,
    routingValue,
    routingType2,
    routingValue2,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

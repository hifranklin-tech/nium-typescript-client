# WalletRefundRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencyCode** | **string** | The 3-letter [ISO-4217 currency code](/docs/currency-and-country-codes) for the amount | [default to undefined]
**amount** | **number** | An amount to be transferred. | [default to undefined]
**refundMode** | **string** | The mode of refund. CASH is the only allowed mode of refund for this request. | [default to undefined]
**pocketName** | **string** | This is the name of the pocket defined under base currency. | [optional] [default to undefined]
**comments** | **string** | This field is for an instruction or a message to support personnel. | [optional] [default to undefined]
**bankName** | **string** | This field is needed in case of BANK_TRANSFER to specify the bank name for the receiver. | [optional] [default to undefined]
**accountNumber** | **string** | This field is needed in case of BANK_TRANSFER to specify the account number of the receiver. | [optional] [default to undefined]
**bankCode** | **string** | This field is needed in case of BANK_TRANSFER to specify the bank code for the receiver. | [optional] [default to undefined]
**accountName** | **string** | This field is needed in case of BANK_TRANSFER to specify the account holder name. | [optional] [default to undefined]

## Example

```typescript
import { WalletRefundRequestDTO } from 'nium-client';

const instance: WalletRefundRequestDTO = {
    currencyCode,
    amount,
    refundMode,
    pocketName,
    comments,
    bankName,
    accountNumber,
    bankCode,
    accountName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

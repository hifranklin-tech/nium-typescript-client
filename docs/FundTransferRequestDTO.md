# FundTransferRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authenticationCode** | **string** | Accepts the authentication code generated as part of SCA (Strong Customer Authentication). Note: Authentication code is expected if regulatory region is UK or EU. | [optional] [default to undefined]
**customerComments** | **string** | Accepts customer comments for wallet to wallet transfers. | [optional] [default to undefined]
**destinationAmount** | **number** | The amount to be transferred. | [default to undefined]
**destinationCurrencyCode** | **string** | Accepts the 3-letter [ISO-4217 currency code](/docs/getting-started/currency-and-country-codes) for the amount. | [default to undefined]
**destinationWalletHashId** | **string** | The walletHashId of Nium’s customer who is the recepient of the funds. | [default to undefined]
**deviceDetails** | [**WalletDeviceDetailsDTO**](WalletDeviceDetailsDTO.md) |  | [optional] [default to undefined]
**exemptionCode** | **string** | Accepts the reason code for the exemption provided as part of SCA (Strong Customer Authentication). Accepted values include: 01 - Trusted Beneficiary 02 - Low Value Transaction 03 - Recurring Transactions 04 - Payment to Self  Note: Exemption code is required if regulatory region is UK or EU | [optional] [default to undefined]
**purposeCode** | **string** | Accepts the purpose code for the payment. Refer to the [Glossary of Purpose Codes](/docs/purpose-of-transfer-codes) For the value to include. | [default to undefined]
**sourceAmount** | **number** | The amount to be transferred. | [default to undefined]
**sourceCurrencyCode** | **string** | Accepts the 3-letter [ISO-4217 currency code](/docs/getting-started/currency-and-country-codes) for the amount. | [default to undefined]
**tags** | [**Array&lt;ClientCustomTagDTO&gt;**](ClientCustomTagDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FundTransferRequestDTO } from 'nium-client';

const instance: FundTransferRequestDTO = {
    authenticationCode,
    customerComments,
    destinationAmount,
    destinationCurrencyCode,
    destinationWalletHashId,
    deviceDetails,
    exemptionCode,
    purposeCode,
    sourceAmount,
    sourceCurrencyCode,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# FundWalletV2RequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinationAmount** | **number** | The total amount to be received in the wallet. | [optional] [default to undefined]
**destinationCurrencyCode** | **string** |  The 3-letter ISO-4217 currency code for the destination amount. | [default to undefined]
**deviceDetails** | [**DeviceDetailsV2DTO**](DeviceDetailsV2DTO.md) |  | [optional] [default to undefined]
**fundingChannel** | **string** |  | [default to undefined]
**sourceAmount** | **number** | The amount to be sent in the source currency, converted to the destination currency, and placed in the wallet. | [optional] [default to undefined]
**sourceCurrencyCode** | **string** | The 3-letter ISO-4217 currency code for the source amount. | [default to undefined]
**statementNarrative** | **string** | This field allows clients to pass a narrative that they want to be displayed in the payer\\u2019s account statement when they are pulling funds using Direct Debit. The field value will be truncated to 10 characters for UK and US, and 140 characters for EU. | [optional] [default to undefined]

## Example

```typescript
import { FundWalletV2RequestDTO } from 'nium-client';

const instance: FundWalletV2RequestDTO = {
    destinationAmount,
    destinationCurrencyCode,
    deviceDetails,
    fundingChannel,
    sourceAmount,
    sourceCurrencyCode,
    statementNarrative,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

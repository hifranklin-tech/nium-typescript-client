# WalletFundingInstrumentsResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bankName** | **string** | The name of the bank that issued the account associated with the funding instrument. | [optional] [default to undefined]
**cardBankName** | **string** | The name of the bank that issued the card associated with the funding instrument. | [optional] [default to undefined]
**cardNetwork** | **string** | The payment network the provided card uses. At this time we support Visa and MasterCard. | [optional] [default to undefined]
**cardType** | **string** | The type of card being used. Available values include **credit** and **debit**. | [optional] [default to undefined]
**clientHashId** | **string** | The unique 36-character client identifier generated and shared before the API handshake. | [optional] [default to undefined]
**country** | **string** | The country the card or account was originally opened in. | [optional] [default to undefined]
**createdAt** | **string** | A timestamp detailing when the funding instrument got added. returned in a YYYY-MM-DD hh:mm:ss format. | [optional] [default to undefined]
**currency** | **string** | This currency the submitted the card or account uses. | [optional] [default to undefined]
**customerHashId** | **string** | The unique 36-character customer identifier generated and shared before the API handshake. | [optional] [default to undefined]
**fundingChannel** | **string** | The funding channel of the funding instrument. | [optional] [default to undefined]
**fundingInstrumentId** | **string** | The unique 36-character funding instrument identifier. | [optional] [default to undefined]
**maskCardNumber** | **string** | The 16-digit card number in a masked format: 1234-56xx-xxxx-3456. | [optional] [default to undefined]
**maskedAccountNumber** | **string** | The account number in a masked format where only the blast 4 digits are visible. | [optional] [default to undefined]
**routingType** | **string** | The routing type. | [optional] [default to undefined]
**routingValue** | **string** | The routing value. | [optional] [default to undefined]
**saved** | **boolean** | Details if the the funding instrument is saved for future funding transfers. or not. | [optional] [default to undefined]
**status** | **string** | The status of the funding instrument. | [optional] [default to undefined]
**threeDSecureUsage** | **boolean** | Details if the funding instrument supports 3DS verification. | [optional] [default to undefined]
**updatedAt** | **string** | A timestamp detailing when the funding instrument was last updated. returned in a YYYY-MM-DD hh:mm:ss format. | [optional] [default to undefined]
**walletHashId** | **string** | The unique 36-character wallet identifier generated and shared before the initial request. | [optional] [default to undefined]

## Example

```typescript
import { WalletFundingInstrumentsResponseDTO } from 'nium-client';

const instance: WalletFundingInstrumentsResponseDTO = {
    bankName,
    cardBankName,
    cardNetwork,
    cardType,
    clientHashId,
    country,
    createdAt,
    currency,
    customerHashId,
    fundingChannel,
    fundingInstrumentId,
    maskCardNumber,
    maskedAccountNumber,
    routingType,
    routingValue,
    saved,
    status,
    threeDSecureUsage,
    updatedAt,
    walletHashId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# WalletFundDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount in the destination currency to transfer. If &#x60;amount&#x60; is provided, it will take precedence over the &#x60;sourceAmount&#x60; field. | [optional] [default to undefined]
**countryIpAddress** | **string** | The country IP address of the device the customer is using to initate the request. | [optional] [default to undefined]
**currencyMap** | **{ [key: string]: number; }** |  | [optional] [default to undefined]
**destinationCurrencyCode** | **string** | The 3-letter [ISO-4217 currency code](/docs/currency-and-country-codes) for the destination amount. | [default to undefined]
**deviceKey** | **string** | Device key | [optional] [default to undefined]
**fundingChannel** | **string** | &lt;ul&gt;&lt;li&gt;Funding wallets using &lt;strong&gt;PREFUND&lt;/strong&gt; is available via cross-currency.&lt;/li&gt;&lt;li&gt;Funding wallets using &lt;strong&gt;BANK_TRANSFER&lt;/strong&gt; mode is only available for SGD to SGD. &lt;strong&gt;BANK_TRANSFER&lt;/strong&gt; is not available for cross-currency funding.&lt;/li&gt;&lt;li&gt;Funding wallets using &lt;strong&gt;DIRECT_DEBIT&lt;/strong&gt; is only available for the USA.&lt;/li&gt;&lt;/ul&gt; | [default to undefined]
**fundingInstrumentExpiry** | **string** | The expiry date of the funding insturment in MMYY format. Required when adding new cards. | [optional] [default to undefined]
**fundingInstrumentHolderName** | **string** | Name of the card holder as printed on the card. Maximum length of this field is 26 characters. This is required in case of new card. | [optional] [default to undefined]
**fundingInstrumentId** | **string** | The ID of the funding instrument that\&#39;s returned when Adding a &#x60;fundingInstrument&#x60; &#x60;. The &#x60;fundingInstrumentId&#x60; is a card hash when &#x60;fundingChannel&#x60; is **CARD** and required only for existing cards. The id is a bank account identifier when the funding channel is direct debit. | [optional] [default to undefined]
**fundingInstrumentNumber** | **string** | The 16-digit card number. Required when adding new cards. | [optional] [default to undefined]
**fundingInstrumentSecurityNumber** | **string** | The 3-digit CVV number. Required for both new and existing cards. | [optional] [default to undefined]
**invoiceDetails** | [**InvoiceDetails**](InvoiceDetails.md) |  | [optional] [default to undefined]
**ipAddress** | **string** | The IP address of the device the customer is using to initate the request. | [optional] [default to undefined]
**pocketName** | **string** | The name of the pocket as defined under base currency. | [optional] [default to undefined]
**save** | **boolean** | Set to **TRUE** to save the funding instrument for future transfers. | [optional] [default to undefined]
**sessionId** | **string** | The session ID of the instance the customer is initiating. the request. | [optional] [default to undefined]
**sourceAmount** | **number** | The amount in the source currency to convert and transfer. Note the &#x60;amount&#x60; field takes precedence over &#x60;sourceAmount&#x60;. | [optional] [default to undefined]
**sourceCurrencyCode** | **string** | The 3-letter [ISO-4217 currency code](/docs/currency-and-country-codes) for the source amount. | [default to undefined]
**statementNarrative** | **string** | Set what to display on bank account statements when they are pulling funds using Direct Debit. The value entered will be truncated to 10 characters for the UK and US, and 140 chars for the EU. | [optional] [default to undefined]

## Example

```typescript
import { WalletFundDTO } from 'nium-client';

const instance: WalletFundDTO = {
    amount,
    countryIpAddress,
    currencyMap,
    destinationCurrencyCode,
    deviceKey,
    fundingChannel,
    fundingInstrumentExpiry,
    fundingInstrumentHolderName,
    fundingInstrumentId,
    fundingInstrumentNumber,
    fundingInstrumentSecurityNumber,
    invoiceDetails,
    ipAddress,
    pocketName,
    save,
    sessionId,
    sourceAmount,
    sourceCurrencyCode,
    statementNarrative,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

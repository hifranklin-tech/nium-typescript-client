# LinkAccountResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **string** | The [2-letter ISO-2 country code](/docs/currency-and-country-codes) where the bank account resides. | [optional] [default to undefined]
**createdAt** | **string** | The timestamp of when the funding instrument was added. | [optional] [default to undefined]
**currency** | **string** | The 3-letter [ISO-4217 currency code](/docs/currency-and-country-codes) for the account to be linked. | [optional] [default to undefined]
**fundingChannel** | **string** | The mode of funding the wallet. Direct debit is supported when adding a new funding instrument. | [optional] [default to undefined]
**fundingInstrumentId** | **string** | The unique 36-character alphanumeric identifier of a funding instrument. The ID is a bank account identifier when the funding channel is direct debit. | [optional] [default to undefined]
**returnUrl** | **string** | The URL to redirect the customer when they\&#39;re done. | [optional] [default to undefined]
**status** | **string** | The status of the request. Available values include:&lt;ul&gt;&lt;li&gt;&lt;strong&gt;PENDING&lt;/strong&gt;&lt;/li&gt;&lt;li&gt;&lt;strong&gt;FAILED&lt;/strong&gt;&lt;/li&gt;&lt;/ul&gt; | [optional] [default to undefined]

## Example

```typescript
import { LinkAccountResponse } from 'nium-client';

const instance: LinkAccountResponse = {
    country,
    createdAt,
    currency,
    fundingChannel,
    fundingInstrumentId,
    returnUrl,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# PayinAccountStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bankName** | **string** |  This field contains the name of the bank which has issued the account linked to this funding instrument. | [optional] [default to undefined]
**clientHashId** | **string** | The unique 36-character client identifier generated and shared before the initial request. | [optional] [default to undefined]
**country** | **string** | The [ 2-letter ISO-2 country code](https://docs.nium.com/apis/docs/currency-and-country-codes) where the bank account resides. | [optional] [default to undefined]
**createdAt** | **string** | The timestamp when the funding instrument was added. | [optional] [default to undefined]
**currency** | **string** | The 3-letter [ISO-4217 currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) for the account to be linked. | [optional] [default to undefined]
**customerHashId** | **string** | The unique 36-character customer identifier generated and shared before the initial request. | [optional] [default to undefined]
**fundingChannel** | **string** | The field shows the mode of funding the wallet. | [optional] [default to undefined]
**fundingInstrumentId** | **string** | The unique 36-character funding instrument identifier. | [optional] [default to undefined]
**maskedAccountNumber** | **string** | The masked bank account number in the format XXXXXXXXXXXX1111. | [optional] [default to undefined]
**redirectURL** | **string** | The URL where the customer is redirected. | [optional] [default to undefined]
**routingType** | **string** | The routing code type, for example, \&#39;ACH CODE\&#39; for US. | [optional] [default to undefined]
**routingValue** | **string** | The routing code value. | [optional] [default to undefined]
**saved** | **boolean** | This flag returns true when the funding instrument is saved. This can return false when funding instrument status is not yet approved. | [optional] [default to undefined]
**status** | **string** | The current status of the funding instrument. | [optional] [default to undefined]
**statusDescription** | **string** | The additional information of the status response. | [optional] [default to undefined]
**updatedAt** | **string** | The timestamp when the funding instrument was last updated. | [optional] [default to undefined]
**walletHashId** | **string** | The unique 36-character wallet identifier generated and shared before the initial request. | [optional] [default to undefined]

## Example

```typescript
import { PayinAccountStatusResponse } from 'nium-client';

const instance: PayinAccountStatusResponse = {
    bankName,
    clientHashId,
    country,
    createdAt,
    currency,
    customerHashId,
    fundingChannel,
    fundingInstrumentId,
    maskedAccountNumber,
    redirectURL,
    routingType,
    routingValue,
    saved,
    status,
    statusDescription,
    updatedAt,
    walletHashId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

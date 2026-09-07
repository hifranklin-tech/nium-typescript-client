# PaymentIdResponseDTOV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountCategory** | **string** | This field contains the account category of the virtual account. | [optional] [default to undefined]
**accountName** | **string** | This field contains the account name of the virtual account. | [optional] [default to undefined]
**accountType** | **string** | This field contains the account type of the virtual account. | [optional] [default to undefined]
**bankAddress** | **string** | This field contains the bank address of the virtual account. | [optional] [default to undefined]
**bankName** | **string** | This field contains the bank name of the virtual account. | [optional] [default to undefined]
**currencyCode** | **string** | This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes). | [optional] [default to undefined]
**fullBankName** | **string** | This field contains the complete name of the bank for the virtual account. | [optional] [default to undefined]
**network** | **string** | This field contains the network type. | [optional] [default to undefined]
**routingCodes** | [**Array&lt;RoutingCodeDTO&gt;**](RoutingCodeDTO.md) | This field contains the list of routing code type and value. | [optional] [default to undefined]
**tags** | **{ [key: string]: string; }** | This is a map object containing user defined key-value pairs provided by the client for the wallet payment IDs. | [optional] [default to undefined]
**uniquePayerId** | **string** | This field contains the unique payer ID. | [optional] [default to undefined]
**uniquePayerType** | **string** | This field contains the unique payer type. | [optional] [default to undefined]
**uniquePaymentId** | **string** | This field contains the unique payment ID. | [optional] [default to undefined]

## Example

```typescript
import { PaymentIdResponseDTOV2 } from 'nium-client';

const instance: PaymentIdResponseDTOV2 = {
    accountCategory,
    accountName,
    accountType,
    bankAddress,
    bankName,
    currencyCode,
    fullBankName,
    network,
    routingCodes,
    tags,
    uniquePayerId,
    uniquePayerType,
    uniquePaymentId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

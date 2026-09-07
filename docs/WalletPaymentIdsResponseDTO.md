# WalletPaymentIdsResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountCategory** | **string** |  | [optional] [default to undefined]
**accountName** | **string** |  | [optional] [default to undefined]
**accountType** | **string** |  | [optional] [default to undefined]
**bankAddress** | **string** |  | [optional] [default to undefined]
**bankName** | **string** |  | [optional] [default to undefined]
**currencyCode** | **string** |  | [optional] [default to undefined]
**fullBankName** | **string** |  | [optional] [default to undefined]
**network** | **string** |  | [optional] [default to undefined]
**routingCodeType1** | **string** |  | [optional] [default to undefined]
**routingCodeType2** | **string** |  | [optional] [default to undefined]
**routingCodeValue1** | **string** |  | [optional] [default to undefined]
**routingCodeValue2** | **string** |  | [optional] [default to undefined]
**status** | **string** | The current status of the funding instrument. | [optional] [default to undefined]
**tags** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**uniquePayerId** | **string** |  | [optional] [default to undefined]
**uniquePayerType** | **string** |  | [optional] [default to undefined]
**uniquePaymentId** | **string** |  | [optional] [default to undefined]
**walletName** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { WalletPaymentIdsResponseDTO } from 'nium-client';

const instance: WalletPaymentIdsResponseDTO = {
    accountCategory,
    accountName,
    accountType,
    bankAddress,
    bankName,
    currencyCode,
    fullBankName,
    network,
    routingCodeType1,
    routingCodeType2,
    routingCodeValue1,
    routingCodeValue2,
    status,
    tags,
    uniquePayerId,
    uniquePayerType,
    uniquePaymentId,
    walletName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

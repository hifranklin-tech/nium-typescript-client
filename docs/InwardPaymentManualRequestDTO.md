# InwardPaymentManualRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalInfo** | **{ [key: string]: string; }** | This object accepts additional information about the corridor being used. | [optional] [default to undefined]
**amount** | **number** | The amount of the transaction to simulate. | [optional] [default to undefined]
**bankReferenceNumber** | **string** | The bank reference number. | [optional] [default to undefined]
**bankSource** | **string** | This field details the source of the funds. | [optional] [default to undefined]
**branchCode** | **string** | This field contains bank\&#39;s branch code. | [optional] [default to undefined]
**country** | **string** | The country. | [optional] [default to undefined]
**currency** | **string** | The 3-letter currency code. | [optional] [default to undefined]
**customerReferenceNumber** | **string** | The customer reference number | [optional] [default to undefined]
**iccExpiry** | **string** | The expiry time for ICC. | [optional] [default to undefined]
**instructionType** | **string** | The payment instruction type | [optional] [default to undefined]
**narrative** | **string** | The narrative. | [optional] [default to undefined]
**payMode** | **string** | This field details the payment mode. | [optional] [default to undefined]
**remitterAccountNumber** | **string** | The remitter account number. | [optional] [default to undefined]
**remitterBankCode** | **string** | The remitter bank code. | [optional] [default to undefined]
**remitterBankName** | **string** | The remitter bank name. | [optional] [default to undefined]
**remitterName** | **string** | The remitter name. | [optional] [default to undefined]
**remitterNameLocalLanguage** | **string** | The remitter name local language. | [optional] [default to undefined]
**transactionId** | **string** | The transaction reference number/ID. | [optional] [default to undefined]
**transactionSource** | **string** | The ICC transaction source. | [optional] [default to undefined]
**type** | **string** | The ICC entry type. | [optional] [default to undefined]
**virtualAccountNumber** | **string** | The virtual account number. | [optional] [default to undefined]

## Example

```typescript
import { InwardPaymentManualRequestDTO } from 'nium-client';

const instance: InwardPaymentManualRequestDTO = {
    additionalInfo,
    amount,
    bankReferenceNumber,
    bankSource,
    branchCode,
    country,
    currency,
    customerReferenceNumber,
    iccExpiry,
    instructionType,
    narrative,
    payMode,
    remitterAccountNumber,
    remitterBankCode,
    remitterBankName,
    remitterName,
    remitterNameLocalLanguage,
    transactionId,
    transactionSource,
    type,
    virtualAccountNumber,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# WalletResponseDTO2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**walletHashId** | **string** | Unique identifier of the wallet. | [optional] [default to undefined]
**currencies** | [**Array&lt;CurrencyDetail&gt;**](CurrencyDetail.md) | A list of currency objects, each defined in the **CurrencyDetail** schema. See the related example for the full structure. | [optional] [default to undefined]
**intendedUseOfAccount** | **string** | Details how the customer intends to use the account. | [optional] [default to undefined]
**tags** | **{ [key: string]: string; }** | This is an array which accepts custom tags &amp; values. Maximum 15 key-value pairs can be sent in tags. | [optional] [default to undefined]
**status** | **string** | Current status of the wallet. | [optional] [default to undefined]
**createdAt** | **string** | The timestamp of when the wallet was created in the format &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60;. | [optional] [default to undefined]
**updatedAt** | **string** | The timestamp of when the wallet was last updated in the format &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60;. | [optional] [default to undefined]
**name** | **string** | A description to help you identify the balance held in the wallet. | [optional] [default to undefined]
**type** | **string** | The type of the wallet. | [optional] [default to undefined]

## Example

```typescript
import { WalletResponseDTO2 } from 'nium-client';

const instance: WalletResponseDTO2 = {
    walletHashId,
    currencies,
    intendedUseOfAccount,
    tags,
    status,
    createdAt,
    updatedAt,
    name,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

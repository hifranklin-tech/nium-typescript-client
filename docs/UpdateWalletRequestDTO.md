# UpdateWalletRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currencies** | **Array&lt;string&gt;** | The list of currencies that the wallet will use. Currencies should be submitted as the [3-letter ISO-4217 currency code](https://www.currency-iso.org/en/home/tables/table-a1.html). | [optional] [default to undefined]
**name** | **string** | A description to identify the balance held in the wallet. | [optional] [default to undefined]
**tags** | [**Array&lt;WalletTag&gt;**](WalletTag.md) | This object contains the user defined key-value pairs provided by the client. The maximum number of tags allowed is 15. | [optional] [default to undefined]

## Example

```typescript
import { UpdateWalletRequestDTO } from 'nium-client';

const instance: UpdateWalletRequestDTO = {
    currencies,
    name,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

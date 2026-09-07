# WalletsSearchDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the wallet. | [optional] [default to undefined]
**tagKey** | **string** | tagKey defined against wallet. | [optional] [default to undefined]
**tagValue** | **string** | tagValue defined against wallet. | [optional] [default to undefined]
**walletHashId** | **string** | Unique wallet identifier generated on wallet creation. | [optional] [default to undefined]
**walletTypes** | **Array&lt;string&gt;** | Comma-separated wallet types to filter by. | [optional] [default to undefined]

## Example

```typescript
import { WalletsSearchDTO } from 'nium-client';

const instance: WalletsSearchDTO = {
    name,
    tagKey,
    tagValue,
    walletHashId,
    walletTypes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

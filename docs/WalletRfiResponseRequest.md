# WalletRfiResponseRequest

This array contains the objects for each RFI being responded to. This facilitates responding to multiple RFIs in one-go for the same transaction. Refer the example for more details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rfiHashId** | **string** | The unique RFI hash ID. | [default to undefined]
**rfiResponseInfo** | [**WalletRfiResponseInfo**](WalletRfiResponseInfo.md) |  | [default to undefined]

## Example

```typescript
import { WalletRfiResponseRequest } from 'nium-client';

const instance: WalletRfiResponseRequest = {
    rfiHashId,
    rfiResponseInfo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

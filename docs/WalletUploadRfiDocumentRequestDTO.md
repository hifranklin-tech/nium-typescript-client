# WalletUploadRfiDocumentRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rfiResponseRequest** | [**Array&lt;WalletRfiResponseRequest&gt;**](WalletRfiResponseRequest.md) | This array contains the objects for each RFI being responded to. This facilitates responding to multiple RFIs in one-go for the same transaction. Refer the example for more details. | [default to undefined]

## Example

```typescript
import { WalletUploadRfiDocumentRequestDTO } from 'nium-client';

const instance: WalletUploadRfiDocumentRequestDTO = {
    rfiResponseRequest,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

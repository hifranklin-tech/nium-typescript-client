# WalletRfiAttributeResponse

This array contains the required data for the RFI.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **string** | The field label for the RFI. | [optional] [default to undefined]
**value** | **string** | The field value for the RFI. This will be used while responding to transaction RFI. | [optional] [default to undefined]
**type** | **string** | The field type. The possible values are data or document. | [optional] [default to undefined]

## Example

```typescript
import { WalletRfiAttributeResponse } from 'nium-client';

const instance: WalletRfiAttributeResponse = {
    label,
    value,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

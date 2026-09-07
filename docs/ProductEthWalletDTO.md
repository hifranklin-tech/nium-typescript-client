# ProductEthWalletDTO

ETH wallet details including funding and refund addresses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fundingAddress** | [**Array&lt;WalletAddressDTO&gt;**](WalletAddressDTO.md) |  | [optional] [default to undefined]
**refundAddress** | [**Array&lt;WalletAddressDTO&gt;**](WalletAddressDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ProductEthWalletDTO } from 'nium-client';

const instance: ProductEthWalletDTO = {
    fundingAddress,
    refundAddress,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

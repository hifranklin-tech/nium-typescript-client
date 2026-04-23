# Bank

Details of the bank account, required for verifying account details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountNumber** | **string** |  | [optional] [default to undefined]
**routing** | [**Routing**](Routing.md) |  | [optional] [default to undefined]
**iban** | **string** |  | [optional] [default to undefined]
**identification** | [**Identification**](Identification.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Bank } from 'nium-client';

const instance: Bank = {
    accountNumber,
    routing,
    iban,
    identification,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# Payer

This object accepts the payer details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Field for payer name already exists. Both Chinese and English to be supported. Name of the buyer | [optional] [default to undefined]
**bankAccountNumber** | **string** | Field for payer bank account number already exists | [optional] [default to undefined]
**bankName** | **string** | Field for payer bank name already exists | [optional] [default to undefined]

## Example

```typescript
import { Payer } from 'nium-client';

const instance: Payer = {
    name,
    bankAccountNumber,
    bankName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

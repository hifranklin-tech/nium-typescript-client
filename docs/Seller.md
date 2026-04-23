# Seller

This object accepts the seller details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | To be passed if seller is different than final beneficiary. If it is the same, beneficiary name field will be used | [default to undefined]
**identificationNumber** | **string** | To be passed if seller is different than final beneficiary. If it is the same, beneficiary name field will be used | [default to undefined]
**website** | **string** | Website of the seller or marketplace where the sale of goods or services was done | [optional] [default to undefined]
**bankAccountNumber** | **string** | Currency will be passed in the beneficiary account number field | [optional] [default to undefined]
**id** | **string** | NA | [optional] [default to undefined]

## Example

```typescript
import { Seller } from 'nium-client';

const instance: Seller = {
    name,
    identificationNumber,
    website,
    bankAccountNumber,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

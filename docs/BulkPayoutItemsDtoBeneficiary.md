# BulkPayoutItemsDtoBeneficiary

Accepts details about the `beneficiary`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | This is an unique beneficiary ID which depends upon the destination currency and payout method. The beneficiary Id and payout ID can be found out using [Beneficiary List](https://docs.nium.com/baas/beneficiary-list) API. | [default to undefined]
**beneficiary** | [**BeneficiaryDetailsV3Dto**](BeneficiaryDetailsV3Dto.md) |  | [optional] [default to undefined]
**paymentAccount** | [**BeneficiaryPaymentAccount**](BeneficiaryPaymentAccount.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BulkPayoutItemsDtoBeneficiary } from 'nium-client';

const instance: BulkPayoutItemsDtoBeneficiary = {
    id,
    beneficiary,
    paymentAccount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

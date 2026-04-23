# RemittanceTransactionsRequestDTOBeneficiary

This object will accept the beneficiary details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | This is an unique beneficiary ID which depends upon the destination currency and payout method. The beneficiary Id and payout ID can be found out using [Beneficiary List](https://docs.nium.com/baas/beneficiary-list) API. | [default to undefined]
**beneficiary** | [**BeneficiaryDetailsV3DTO**](BeneficiaryDetailsV3DTO.md) |  | [optional] [default to undefined]
**paymentAccount** | [**BeneficiaryPaymentAccount**](BeneficiaryPaymentAccount.md) |  | [optional] [default to undefined]
**paymentAccountId** | **string** | This is an unique beneficiary\&#39;s payment account identifier. | [default to undefined]

## Example

```typescript
import { RemittanceTransactionsRequestDTOBeneficiary } from 'nium-client';

const instance: RemittanceTransactionsRequestDTOBeneficiary = {
    id,
    beneficiary,
    paymentAccount,
    paymentAccountId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

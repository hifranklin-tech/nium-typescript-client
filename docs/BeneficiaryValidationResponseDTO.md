# BeneficiaryValidationResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**valid** | **boolean** | This field will return true if the provided details are valid otherwise false. | [optional] [default to undefined]
**status** | **string** | This field contains the status only when the proxy type is VPA. The possible values are: VE: Virtual Address Available F: Failed VN: Virtual Address not Available | [optional] [default to undefined]
**beneficiaryBankCode** | **string** | This field contains beneficiary bank code if the payout method is proxy and proxy type is VPA. | [optional] [default to undefined]
**beneficiaryName** | **string** | This field contains beneficiary name if the payout method is proxy. | [optional] [default to undefined]

## Example

```typescript
import { BeneficiaryValidationResponseDTO } from 'nium-client';

const instance: BeneficiaryValidationResponseDTO = {
    valid,
    status,
    beneficiaryBankCode,
    beneficiaryName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

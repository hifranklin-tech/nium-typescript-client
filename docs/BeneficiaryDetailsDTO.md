# BeneficiaryDetailsDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bankAccountName** | **string** | The name registered with the bank account. (Only supported in some corridors. For more information, see &lt;a href&#x3D;\&quot;https://docs.nium.com/apis/docs/account-verification\&quot;&gt;Account Verification&lt;/a&gt;.) | [optional] [default to undefined]
**nameMatch** | **string** | Name match status of US account verification | [optional] [default to undefined]

## Example

```typescript
import { BeneficiaryDetailsDTO } from 'nium-client';

const instance: BeneficiaryDetailsDTO = {
    bankAccountName,
    nameMatch,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

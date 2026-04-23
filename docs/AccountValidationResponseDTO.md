# AccountValidationResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountValidationId** | **string** | The unique ID generated to represent the validation attempt. | [optional] [default to undefined]
**status** | **string** | Provides the status of the verification request. Available values include: &lt;ul&gt;   &lt;li&gt;&lt;code&gt;confirmation_in_progress&lt;/code&gt;&lt;/li&gt;   &lt;li&gt;&lt;code&gt;verified&lt;/code&gt;&lt;/li&gt;   &lt;li&gt;&lt;code&gt;not_verified&lt;/code&gt;&lt;/li&gt;   &lt;li&gt;&lt;code&gt;not_supported&lt;/code&gt;&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;For more information, see &lt;a href&#x3D;\&quot;https://docs.nium.com/apis/docs/account-verification\&quot;&gt;Account Verification&lt;/a&gt;.&lt;/p&gt; | [optional] [default to undefined]
**beneficiary** | [**BeneficiaryDetailsDTO**](BeneficiaryDetailsDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AccountValidationResponseDTO } from 'nium-client';

const instance: AccountValidationResponseDTO = {
    accountValidationId,
    status,
    beneficiary,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

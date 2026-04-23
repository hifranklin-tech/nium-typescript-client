# UpdateCorporateCustomerRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region** | **string** | The regulatory region of Nium where the corporate customer is being onboarded. | [optional] [default to undefined]
**clientId** | **string** | The ID of the client. Returned in the response of the [Onboard Corporate Customer](/api#tag/customer-account---corporate/post/api/v1/client/{clientHashId}/corporate) request.  This field is required to restart the Know Your Business (KYB) process for closed or rejected customers. | [optional] [default to undefined]
**customerHashId** | **string** | The unique customer identifier generated at the time of customer creation. Returned in the response of the [Onboard Corporate Customer](/api#tag/customer-account---corporate/post/api/v1/client/{clientHashId}/corporate) request.  This field is required to restart the Know Your Business (KYB) process for closed or rejected customers. | [optional] [default to undefined]
**caseId** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**entityType** | **string** |  | [optional] [default to undefined]
**subscribers** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**clientPreference** | [**ProductClientPreference**](ProductClientPreference.md) |  | [optional] [default to undefined]
**complianceDetails** | [**ProductComplianceDetails**](ProductComplianceDetails.md) |  | [optional] [default to undefined]
**productDetails** | [**ProductProductDetails**](ProductProductDetails.md) |  | [optional] [default to undefined]
**businessDetails** | [**ProductBusinessDetails**](ProductBusinessDetails.md) |  | [optional] [default to undefined]
**riskAssessmentInfo** | [**ProductRiskAssessmentInfo**](ProductRiskAssessmentInfo.md) |  | [optional] [default to undefined]
**expectedAccountUsage** | [**ExpectedAccountUsage**](ExpectedAccountUsage.md) |  | [optional] [default to undefined]
**natureOfBusiness** | [**ProductNatureOfBusiness**](ProductNatureOfBusiness.md) |  | [optional] [default to undefined]
**tags** | [**Array&lt;CustomerTagDTO&gt;**](CustomerTagDTO.md) | User defined key-value pairs that enable you to tag transactions with additional details. The maximum number of tags allowed is 15. | [optional] [default to undefined]
**source** | **string** |  | [optional] [default to undefined]
**corporateClient** | **boolean** |  | [optional] [default to undefined]
**authenticationCode** | **string** | This field accepts the authentication code generated as part of SCA (Strong Customer Authentication). Note: : Authentication code must be passed if regulatory region of the program is UK or EU. Otherwise, do not use this field and do not pass any values. | [optional] [default to undefined]
**ethWallet** | [**ProductEthWalletDTO**](ProductEthWalletDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateCorporateCustomerRequestDTO } from 'nium-client';

const instance: UpdateCorporateCustomerRequestDTO = {
    region,
    clientId,
    customerHashId,
    caseId,
    status,
    entityType,
    subscribers,
    clientPreference,
    complianceDetails,
    productDetails,
    businessDetails,
    riskAssessmentInfo,
    expectedAccountUsage,
    natureOfBusiness,
    tags,
    source,
    corporateClient,
    authenticationCode,
    ethWallet,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

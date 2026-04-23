# OnboardCorporateCustomerRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region** | **string** | The regulatory region of Nium where the corporate customer is being onboarded. | [optional] [default to undefined]
**clientId** | **string** | The Nium client ID of the customer. Returned in the response of the [Onboard Corporate Customer](/api#tag/customer-account---corporate/post/api/v1/client/{clientHashId}/corporate) request.  Note: This field is required to restart the Know Your Business (KYB) process for closed or rejected customers. | [optional] [default to undefined]
**customerHashId** | **string** | The client ID generated for the customer during customer creation. Returned in the response of the [Onboard Corporate Customer](/api#tag/customer-account---corporate/post/api/v1/client/{clientHashId}/corporate) request.  Note: This field is required to restart the Know Your Business (KYB) process for closed or rejected customers. | [optional] [default to undefined]
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
**applicationId** | **string** |  | [optional] [default to undefined]
**deviceDetails** | [**ProductDeviceDetails**](ProductDeviceDetails.md) |  | [optional] [default to undefined]
**oddStatus** | **string** |  | [optional] [default to undefined]
**kycUrls** | [**KycUrls**](KycUrls.md) |  | [optional] [default to undefined]
**ethWallet** | [**ProductEthWalletDTO**](ProductEthWalletDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OnboardCorporateCustomerRequestDTO } from 'nium-client';

const instance: OnboardCorporateCustomerRequestDTO = {
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
    applicationId,
    deviceDetails,
    oddStatus,
    kycUrls,
    ethWallet,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

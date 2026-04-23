# CustomerCorporateCustomerResponseDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **string** | The Nium client ID of the customer. Returned in the response of the [Onboard Corporate Customer](/api#tag/customer-account---corporate/post/api/v1/client/{clientHashId}/corporate) request.  Note: This field is required to restart the Know Your Business (KYB) process for closed or rejected customers. | [optional] [default to undefined]
**caseId** | **string** |  | [optional] [default to undefined]
**complianceRegion** | **string** | The regulatory Nium region where the corporate customer is being onboarded. | [optional] [default to undefined]
**businessDetails** | [**BusinessDetailsResponseV2DTO**](BusinessDetailsResponseV2DTO.md) |  | [optional] [default to undefined]
**riskAssessmentInfo** | [**RiskAssessmentInfoV2**](RiskAssessmentInfoV2.md) |  | [optional] [default to undefined]
**expectedAccountUsage** | [**ExpectedAccountUsageDTO**](ExpectedAccountUsageDTO.md) |  | [optional] [default to undefined]
**natureOfBusiness** | [**NatureOfBusinessDTO**](NatureOfBusinessDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CustomerCorporateCustomerResponseDTO } from 'nium-client';

const instance: CustomerCorporateCustomerResponseDTO = {
    clientId,
    caseId,
    complianceRegion,
    businessDetails,
    riskAssessmentInfo,
    expectedAccountUsage,
    natureOfBusiness,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

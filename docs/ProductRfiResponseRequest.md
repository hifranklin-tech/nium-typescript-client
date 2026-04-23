# ProductRfiResponseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rfiHashId** | **string** | The unique identifier (UUID) for the individual\&#39;s RFI. | [optional] [default to undefined]
**rfiTemplateId** | **string** | The RFI template ID as received in [Fetch Corporate Customer RFI Details](ref:fetchcorporatecustomerrfidetails) API. | [optional] [default to undefined]
**businessDetails** | [**ProductBusinessDetails2**](ProductBusinessDetails2.md) |  | [optional] [default to undefined]
**riskAssessmentInfo** | [**ProductRiskAssessmentInfo**](ProductRiskAssessmentInfo.md) |  | [optional] [default to undefined]
**expectedAccountUsage** | [**ExpectedAccountUsage**](ExpectedAccountUsage.md) |  | [optional] [default to undefined]
**natureOfBusiness** | [**ProductNatureOfBusiness**](ProductNatureOfBusiness.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ProductRfiResponseRequest } from 'nium-client';

const instance: ProductRfiResponseRequest = {
    rfiHashId,
    rfiTemplateId,
    businessDetails,
    riskAssessmentInfo,
    expectedAccountUsage,
    natureOfBusiness,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

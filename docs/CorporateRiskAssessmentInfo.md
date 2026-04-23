# CorporateRiskAssessmentInfo

This is an object which contains the risk assessment information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalEmployees** | **string** | The total number of employees for the corporate entity to be onboarded. | [optional] [default to undefined]
**annualTurnover** | **string** | The annual turnover for the corporate entity to be onboarded. See [Corporate Customer Onboarding](https://docs.nium.com/apis/docs/overview-corporate-customer) for the applicable values. | [optional] [default to undefined]

## Example

```typescript
import { CorporateRiskAssessmentInfo } from 'nium-client';

const instance: CorporateRiskAssessmentInfo = {
    totalEmployees,
    annualTurnover,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

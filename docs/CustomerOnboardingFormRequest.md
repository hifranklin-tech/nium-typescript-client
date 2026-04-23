# CustomerOnboardingFormRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**featureType** | **string** | The type of form the &#x60;session&#x60; will be used for. | [default to undefined]
**clientHashId** | **string** | Unique ID used to identify the &#x60;client&#x60;. Generated when the &#x60;client&#x60; is initally created. | [optional] [default to undefined]
**expiry** | **string** | Time when the &#x60;session&#x60; will expire (in ISO-8601 format with timezone). Must be a future date/time. | [optional] [default to undefined]
**rollingDurationMinutes** | **number** | Rolling duration window of a &#x60;session&#x60; in minutes. | [optional] [default to undefined]
**integrationType** | [**IntegrationType**](IntegrationType.md) |  | [default to undefined]
**onBehalf** | **boolean** | Details if the form is being filled on behalf of someone. | [default to undefined]
**domain** | **string** | The domain that\&#39;s being used to access the &#x60;session&#x60;. | [optional] [default to undefined]
**email** | **string** | Email address (required if &#x60;onBehalf&#x60; is true). | [optional] [default to undefined]
**externalId** | **string** | External identifier | [default to undefined]
**customerType** | [**CustomerType**](CustomerType.md) |  | [optional] [default to undefined]
**segment** | **string** | Customer segment | [optional] [default to undefined]

## Example

```typescript
import { CustomerOnboardingFormRequest } from 'nium-client';

const instance: CustomerOnboardingFormRequest = {
    featureType,
    clientHashId,
    expiry,
    rollingDurationMinutes,
    integrationType,
    onBehalf,
    domain,
    email,
    externalId,
    customerType,
    segment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

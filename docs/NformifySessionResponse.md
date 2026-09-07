# NformifySessionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalId** | **string** | External identifier (optional) | [optional] [default to undefined]
**featureType** | [**FeatureType**](FeatureType.md) |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: any; }** | Metadata containing information about the specific &#x60;session&#x60;. | [optional] [default to undefined]
**sessionId** | **string** | Unique ID to identify a &#x60;session&#x60;. Generated when the &#x60;session&#x60; is intially created. | [optional] [default to undefined]
**shortLived** | **boolean** | Whether this is a short-lived one-time URL session | [default to false]
**status** | [**Status**](Status.md) |  | [optional] [default to undefined]
**submissionStatus** | [**SubmissionStatus**](SubmissionStatus.md) |  | [optional] [default to undefined]

## Example

```typescript
import { NformifySessionResponse } from 'nium-client';

const instance: NformifySessionResponse = {
    externalId,
    featureType,
    metadata,
    sessionId,
    shortLived,
    status,
    submissionStatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

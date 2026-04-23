# NformifySessionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sessionId** | **string** | Unique ID to identify a &#x60;session&#x60;. Generated when the &#x60;session&#x60; is intially created. | [optional] [default to undefined]
**externalId** | **string** | External identifier (optional) | [optional] [default to undefined]
**featureType** | [**FeatureType**](FeatureType.md) |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: any; }** | Metadata containing information about the specific &#x60;session&#x60;. | [optional] [default to undefined]
**status** | [**Status**](Status.md) |  | [optional] [default to undefined]

## Example

```typescript
import { NformifySessionResponse } from 'nium-client';

const instance: NformifySessionResponse = {
    sessionId,
    externalId,
    featureType,
    metadata,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

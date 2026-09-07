# HostedFormApplicationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationStartTime** | **string** | Application creation time in ISO 8601 format | [optional] [default to undefined]
**customerHashId** | **string** | Customer hash ID if the application is submitted | [optional] [default to undefined]
**customerType** | **string** | Type of the customer (individual or corporate) | [optional] [default to undefined]
**externalId** | **string** | External identifier of the application | [optional] [default to undefined]
**status** | [**ApplicationStatus**](ApplicationStatus.md) |  | [optional] [default to undefined]
**submissionErrors** | [**Array&lt;SubmissionError&gt;**](SubmissionError.md) | List of errors from the last submission attempt | [optional] [default to undefined]

## Example

```typescript
import { HostedFormApplicationResponse } from 'nium-client';

const instance: HostedFormApplicationResponse = {
    applicationStartTime,
    customerHashId,
    customerType,
    externalId,
    status,
    submissionErrors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

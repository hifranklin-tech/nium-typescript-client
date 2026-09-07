# RfiResponseBatchResponse

Batch outcome for one or more RFI response submissions. Returns HTTP 200 when the body is a valid JSON array; per-item failures are reported in results with status FAILED. FAILED items include errors; RFI_RESPONDED items omit errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed** | **number** | Number of failed submissions | [optional] [default to undefined]
**results** | [**Array&lt;RfiResponseResultDto&gt;**](RfiResponseResultDto.md) | Per-request outcomes in the same order as the request array. Failed items include errors with code, description, and field. | [optional] [default to undefined]
**success** | **number** | Number of successfully responded RFIs | [optional] [default to undefined]
**total** | **number** | Total number of requests in the batch | [optional] [default to undefined]

## Example

```typescript
import { RfiResponseBatchResponse } from 'nium-client';

const instance: RfiResponseBatchResponse = {
    failed,
    results,
    success,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

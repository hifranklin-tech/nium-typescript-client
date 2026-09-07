# RfiResponseResultDto

Outcome of a single RFI response submission within a batch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**Array&lt;RfiOneServiceValidationError&gt;**](RfiOneServiceValidationError.md) | Validation or processing errors for this item. Present only when status is FAILED; omitted for RFI_RESPONDED. | [optional] [default to undefined]
**rfiId** | **string** | RFI id from the request | [optional] [default to undefined]
**status** | **string** | Submission outcome | [optional] [default to undefined]

## Example

```typescript
import { RfiResponseResultDto } from 'nium-client';

const instance: RfiResponseResultDto = {
    errors,
    rfiId,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# RfiPageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | [**Array&lt;RfiDetailsDto&gt;**](RfiDetailsDto.md) | List of RFI details matching the filter. | [optional] [default to undefined]
**totalElements** | **string** | Total number of RFIs matching the filter. | [optional] [default to undefined]
**totalPages** | **string** | Total number of pages in the response. | [optional] [default to undefined]

## Example

```typescript
import { RfiPageResponse } from 'nium-client';

const instance: RfiPageResponse = {
    content,
    totalElements,
    totalPages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# ApplicationsPageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applications** | [**Array&lt;HostedFormApplicationResponse&gt;**](HostedFormApplicationResponse.md) |  | [optional] [default to undefined]
**totalRecords** | **number** | Total number of records | [optional] [default to undefined]
**totalPages** | **number** | Total number of pages | [optional] [default to undefined]
**currentCursor** | **number** | Current cursor position | [optional] [default to undefined]
**nextCursor** | **number** | Next cursor position | [optional] [default to undefined]

## Example

```typescript
import { ApplicationsPageResponse } from 'nium-client';

const instance: ApplicationsPageResponse = {
    applications,
    totalRecords,
    totalPages,
    currentCursor,
    nextCursor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

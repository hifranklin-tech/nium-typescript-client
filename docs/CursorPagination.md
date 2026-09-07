# CursorPagination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currentCursor** | **string** | The cursor for the current page of responses. | [default to undefined]
**nextCursor** | **string** | The cursor for the next page of responses. | [default to undefined]
**totalPages** | **number** | The total number of pages available for querying. | [default to undefined]
**totalRecords** | **number** | The total number of records available to be returned. | [default to undefined]

## Example

```typescript
import { CursorPagination } from 'nium-client';

const instance: CursorPagination = {
    currentCursor,
    nextCursor,
    totalPages,
    totalRecords,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

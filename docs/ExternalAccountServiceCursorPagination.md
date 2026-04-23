# ExternalAccountServiceCursorPagination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalRecords** | **number** | The total number of records available to be returned. | [optional] [default to undefined]
**totalPages** | **number** | The total number of pages available for querying. | [optional] [default to undefined]
**currentCursor** | **string** | The cursor for the current page of responses. | [default to undefined]
**nextCursor** | **string** | The cursor for the next page of responses. | [default to undefined]
**nextPageUrl** | **string** | The URL of the request for the next page of responses. | [optional] [default to undefined]
**prevPageUrl** | **string** | The URL of the request for the previous page of responses. | [optional] [default to undefined]

## Example

```typescript
import { ExternalAccountServiceCursorPagination } from 'nium-client';

const instance: ExternalAccountServiceCursorPagination = {
    totalRecords,
    totalPages,
    currentCursor,
    nextCursor,
    nextPageUrl,
    prevPageUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

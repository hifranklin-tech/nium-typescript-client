# Pagination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currentCursor** | **string** |  | [optional] [default to undefined]
**nextCursor** | **string** |  | [optional] [default to undefined]
**totalRecords** | **number** |  | [optional] [default to undefined]
**totalPages** | **number** |  | [optional] [default to undefined]
**nextPageUrl** | **string** |  | [optional] [default to undefined]
**prevPageUrl** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Pagination } from 'nium-client';

const instance: Pagination = {
    currentCursor,
    nextCursor,
    totalRecords,
    totalPages,
    nextPageUrl,
    prevPageUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

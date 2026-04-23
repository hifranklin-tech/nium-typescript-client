# PageCursorDTO

Cursor Based Paging

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **number** | Number of results to return per page. | [default to undefined]
**nextCursor** | **string** | The cursor for the next page of responses; **null** when no further results. | [optional] [default to undefined]
**prevCursor** | **string** | The cursor for the previous page of responses; **null** when no previous results. | [optional] [default to undefined]

## Example

```typescript
import { PageCursorDTO } from 'nium-client';

const instance: PageCursorDTO = {
    limit,
    nextCursor,
    prevCursor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

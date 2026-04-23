# ApplicationsListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalId** | **string** | Filter by external identifier. Mutually exclusive with status, fromDate, toDate. | [optional] [default to undefined]
**status** | **string** | Filter by status. Allowed: form_not_started, form_in_progress, submission_error, awaiting_kyc, under_review, rfi_requested, clear, rejected | [optional] [default to undefined]
**fromDate** | **string** | Filter from date (yyyy-MM-dd), inclusive. | [optional] [default to undefined]
**toDate** | **string** | Filter to date (yyyy-MM-dd), inclusive. | [optional] [default to undefined]
**limit** | **number** | The number of items to be returned on each page. | [optional] [default to 20]
**startingAfter** | **string** | Cursor for the next page. | [optional] [default to undefined]
**endingBefore** | **string** | Cursor for the previous page. | [optional] [default to undefined]

## Example

```typescript
import { ApplicationsListRequest } from 'nium-client';

const instance: ApplicationsListRequest = {
    externalId,
    status,
    fromDate,
    toDate,
    limit,
    startingAfter,
    endingBefore,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

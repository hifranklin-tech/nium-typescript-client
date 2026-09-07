# CustomerList5RequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endingBefore** | **string** | Used to return the &#x60;limit&#x60; number of records up to (excluding) the given ending position. Effectively returns the previous page for a given cursor. | [optional] [default to undefined]
**externalId** | **string** | Unique external identifier number provided by the client during customer creation. | [optional] [default to undefined]
**limit** | **number** | The number of items to be returned on each page. | [optional] [default to 10]
**startingAfter** | **string** | Used to return the &#x60;limit&#x60; number of records after (including) the given starting position. | [optional] [default to undefined]

## Example

```typescript
import { CustomerList5RequestDTO } from 'nium-client';

const instance: CustomerList5RequestDTO = {
    endingBefore,
    externalId,
    limit,
    startingAfter,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# RfiOneServiceRfiResponseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **string** | Optional comment accompanying the RFI response or cannot-respond submission. | [optional] [default to undefined]
**response** | [**RfiResponsePayloadDto**](RfiResponsePayloadDto.md) |  | [default to undefined]
**rfiId** | **string** | RFI id to respond to. | [default to undefined]

## Example

```typescript
import { RfiOneServiceRfiResponseRequest } from 'nium-client';

const instance: RfiOneServiceRfiResponseRequest = {
    comment,
    response,
    rfiId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

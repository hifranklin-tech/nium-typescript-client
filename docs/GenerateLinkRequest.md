# GenerateLinkRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationType** | **string** |  | [default to undefined]
**region** | **string** | The regulatory region of Nium where the corporate customer is being onboarded. | [default to undefined]
**corporate** | [**Corporate**](Corporate.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GenerateLinkRequest } from 'nium-client';

const instance: GenerateLinkRequest = {
    applicationType,
    region,
    corporate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

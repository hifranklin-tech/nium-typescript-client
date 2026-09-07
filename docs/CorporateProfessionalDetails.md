# CorporateProfessionalDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**position** | **string** | Accepts coporate positions. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request to get a list of valid enum values. | [optional] [default to undefined]
**sharePercentage** | **string** | Ownership percentage as a number from 0 to 100. Example: &#x60;23.4&#x60;. Applies to Ultimate Beneficial Owners (UBOs), shareholders, trustees, or partners. | [optional] [default to undefined]

## Example

```typescript
import { CorporateProfessionalDetails } from 'nium-client';

const instance: CorporateProfessionalDetails = {
    position,
    sharePercentage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

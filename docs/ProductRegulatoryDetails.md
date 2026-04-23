# ProductRegulatoryDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**regulatedTrustType** | **Array&lt;string&gt;** | An array specifying the type(s) of the *regulated trust*. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/get/api/v2/client/{clientHashId}/onboarding/constants) request to retrieve valid values. | [optional] [default to undefined]
**unregulatedTrustType** | **Array&lt;string&gt;** | An array specifying the type(s) of the *unregulated trust*. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/get/api/v2/client/{clientHashId}/onboarding/constants) request to retrieve valid values. | [optional] [default to undefined]

## Example

```typescript
import { ProductRegulatoryDetails } from 'nium-client';

const instance: ProductRegulatoryDetails = {
    regulatedTrustType,
    unregulatedTrustType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

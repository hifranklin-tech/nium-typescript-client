# ProductAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressLine1** | **string** | First line of the individual\&#39;s address. | [optional] [default to undefined]
**addressLine2** | **string** | Second line of the individual\&#39;s address (optional). | [optional] [default to undefined]
**city** | **string** | The individual\&#39;s residential city. | [optional] [default to undefined]
**state** | **string** | The state of the individual\&#39;s residential address. | [optional] [default to undefined]
**country** | **string** | The [2-letter ISO Alpha-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf) for the residential country of the individual. | [optional] [default to undefined]
**postcode** | **string** | The zip or postal code of the individual\&#39;s residential address. | [optional] [default to undefined]

## Example

```typescript
import { ProductAddress } from 'nium-client';

const instance: ProductAddress = {
    addressLine1,
    addressLine2,
    city,
    state,
    country,
    postcode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

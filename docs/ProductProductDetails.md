# ProductProductDetails

Information about the products or services the business offers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**products** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**productType** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**program** | **string** |  | [optional] [default to undefined]
**intendUseOfCard** | **string** |  | [optional] [default to undefined]
**intendUseOfCardOthers** | **string** |  | [optional] [default to undefined]
**parentClientHashId** | **string** |  | [optional] [default to undefined]
**preFundName** | **string** |  | [optional] [default to undefined]
**segment** | **string** | The fee segment associated with the client.  Maximum character limit: 64. | [optional] [default to undefined]
**accountDetails** | [**AccountWhiteList**](AccountWhiteList.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ProductProductDetails } from 'nium-client';

const instance: ProductProductDetails = {
    products,
    productType,
    program,
    intendUseOfCard,
    intendUseOfCardOthers,
    parentClientHashId,
    preFundName,
    segment,
    accountDetails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# MerchantCategoryResponseDTO2

The mccData is an array that contains multiple objects. Each object is a mccCode for which the pocket has restrictions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mccCode** | **string** | The four-digit Visa Merchant Category Code. | [optional] [default to undefined]
**description** | **string** | Description of the MCC. | [optional] [default to undefined]
**merchantCategory** | **string** | Nium\&#39;s categorization of the  MCC. | [optional] [default to undefined]

## Example

```typescript
import { MerchantCategoryResponseDTO2 } from 'nium-client';

const instance: MerchantCategoryResponseDTO2 = {
    mccCode,
    description,
    merchantCategory,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

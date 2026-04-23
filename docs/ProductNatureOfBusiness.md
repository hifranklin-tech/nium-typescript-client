# ProductNatureOfBusiness

Object contains the details regarding the nature of the business such as industrySector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**industryCodes** | **Set&lt;string&gt;** | An array of industry sector codes that apply for the corporate customer\&#39;s business. Use Fetch corporate constants API for a valid set of values using industrySector category. | [optional] [default to undefined]
**industryDescription** | **string** | Text field description of the intended use of the account of the corporate customer. Min 20 characters. | [optional] [default to undefined]

## Example

```typescript
import { ProductNatureOfBusiness } from 'nium-client';

const instance: ProductNatureOfBusiness = {
    industryCodes,
    industryDescription,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

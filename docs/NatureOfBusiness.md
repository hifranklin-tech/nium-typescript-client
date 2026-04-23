# NatureOfBusiness

The details regarding the nature of the business such as `industrySector`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**industryCodes** | **Array&lt;string&gt;** | The business\&#39; industry sector. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a list of valid set of values. | [default to undefined]
**industryDescription** | **string** | Text field explaining the business of the corporate customer in 2-3 sentences.    - Max Character limit: 300.    - Min: 20 characters. | [optional] [default to undefined]

## Example

```typescript
import { NatureOfBusiness } from 'nium-client';

const instance: NatureOfBusiness = {
    industryCodes,
    industryDescription,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

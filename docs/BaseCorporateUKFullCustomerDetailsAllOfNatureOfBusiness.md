# BaseCorporateUKFullCustomerDetailsAllOfNatureOfBusiness

 Indicates what the business does and the industry it operates in

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operatingCountries** | **Array&lt;string&gt;** |  | [default to undefined]
**industryCodes** | **Array&lt;string&gt;** | List of industry sector codes relevant to the business of the customer. Use [Fetch Corporate Constants API](ref:fetchcorporateconstants) for valid values. | [default to undefined]
**industryDescription** | **string** | Description of the nature of business of the customer and mandatory when industryCodes contains \&#39;others\&#39; | [optional] [default to undefined]

## Example

```typescript
import { BaseCorporateUKFullCustomerDetailsAllOfNatureOfBusiness } from 'nium-client';

const instance: BaseCorporateUKFullCustomerDetailsAllOfNatureOfBusiness = {
    operatingCountries,
    industryCodes,
    industryDescription,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

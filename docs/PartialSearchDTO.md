# PartialSearchDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **string** | The [2-letter ISO-2 country code](/docs/currency-and-country-codes) for which routing code search is initiated. | [optional] [default to undefined]
**search_key** | **string** | This field accepts the key on which the search is initiated. The possible values for search key are: bank_name branch_name | [default to undefined]
**search_value** | **string** | The partial or full value of the search key on which the search is initiated, for example, if search_key is bank_name, search_value could be DBS. | [default to undefined]
**currency_code** | **string** | The [3-letter ISO-4217 currency code](/docs/currency-and-country-codes) for which routing code search is to be initiated. | [optional] [default to undefined]
**routing_code_type** | **string** | This field determines the routing code type for the search. The possible values are: IFSC SWIFT ACH CODE BSB CODE SORT CODE BANK CODE LOCATION ID BRANCH CODE BRANCH NAME TRANSIT NUMBER | [default to undefined]
**payout_method** | **string** | This field can accept the different modes of payout. This field can accept one of the following values: 1.LOCAL 2.SWIFT Default value of the parameter is LOCAL. | [optional] [default to undefined]

## Example

```typescript
import { PartialSearchDTO } from 'nium-client';

const instance: PartialSearchDTO = {
    country_code,
    search_key,
    search_value,
    currency_code,
    routing_code_type,
    payout_method,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

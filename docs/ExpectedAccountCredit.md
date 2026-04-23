# ExpectedAccountCredit

Expected account usage of all third party inward transactions or collections.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**monthlyTransactionVolume** | **string** | Estimated total payin monthly amount for the corporate customer, converted to base currency. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a list of valid values. | [optional] [default to undefined]
**monthlyTransactions** | **string** | Estimated count of payin transactions per month for the corporate customer. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a valid set of values. | [optional] [default to undefined]
**averageTransactionValue** | **string** | Estimated average transaction value per payin for the corporate customer converted to the base currency. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a list of valid values. | [optional] [default to undefined]
**topTransactionCountries** | **Set&lt;string&gt;** | Top payin countries. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a list of valid values. | [optional] [default to undefined]
**topRemitters** | **Set&lt;string&gt;** | Array of expected primary remitters. Can be specific companies or types of entities (e.g., Ryan Air, John Smith, employees of the corporataion). | [optional] [default to undefined]

## Example

```typescript
import { ExpectedAccountCredit } from 'nium-client';

const instance: ExpectedAccountCredit = {
    monthlyTransactionVolume,
    monthlyTransactions,
    averageTransactionValue,
    topTransactionCountries,
    topRemitters,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

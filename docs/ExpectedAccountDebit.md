# ExpectedAccountDebit

The expected usage of all outward transactions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**monthlyTransactionVolume** | **string** | Estimated total monthly payout transaction amount converted to base currency. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a list of valid values. | [optional] [default to undefined]
**monthlyTransactions** | **string** | Estimated number of payout transactions per month for the corporate customer. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a list of valid values. | [optional] [default to undefined]
**averageTransactionValue** | **string** | Average transaction value per payout for the corporate customer converted to base currency. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for alist of valid values. | [optional] [default to undefined]
**topTransactionCountries** | **Set&lt;string&gt;** | Array of top payout countries. Use the [Fetch Corporate Constants](/api#tag/customer-account---corporate/GET/api/v2/client/{clientHashId}/onboarding/constants) request for a list of valid values. | [optional] [default to undefined]
**topBeneficiaries** | **Set&lt;string&gt;** | Array of expected primary beneficiaries. Can be specific companies or types of entities (e.g., Ryan Air, John Smith, employees of the corporation). | [optional] [default to undefined]

## Example

```typescript
import { ExpectedAccountDebit } from 'nium-client';

const instance: ExpectedAccountDebit = {
    monthlyTransactionVolume,
    monthlyTransactions,
    averageTransactionValue,
    topTransactionCountries,
    topBeneficiaries,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

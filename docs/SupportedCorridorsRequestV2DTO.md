# SupportedCorridorsRequestV2DTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinationCurrency** | **string** | The [3-letter ISO-4217 currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) which will be used to filter the user selected currency and get the payout method. | [optional] [default to undefined]
**payoutMethod** | **string** | The different modes of payout. | [optional] [default to undefined]
**destinationCountry** | **string** | The [2-letter ISO-2 destination country code](https://docs.nium.com/apis/docs/currency-and-country-codes). | [optional] [default to undefined]
**customerType** | **string** | The type of customer. | [optional] [default to undefined]
**beneficiaryAccountType** | **string** | The beneficiary account type. | [optional] [default to undefined]
**routingCodeType** | **string** | This field determines the routing code type for the currency. | [optional] [default to undefined]
**clientType** | **string** | This field accepts type of Client e.g. FI, NonFI, default NonFI. | [optional] [default to undefined]

## Example

```typescript
import { SupportedCorridorsRequestV2DTO } from 'nium-client';

const instance: SupportedCorridorsRequestV2DTO = {
    destinationCurrency,
    payoutMethod,
    destinationCountry,
    customerType,
    beneficiaryAccountType,
    routingCodeType,
    clientType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

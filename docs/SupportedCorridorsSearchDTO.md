# SupportedCorridorsSearchDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **number** | This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable.\\nDefault page is 0. | [optional] [default to undefined]
**size** | **number** | This will decide the number of elements per page. Typical values can be 1-500. | [optional] [default to undefined]
**order** | **string** | The sort order for the results. | [optional] [default to undefined]
**destinationCurrency** | **string** | The [3-letter ISO-4217 currency code](https://docs.nium.com/apis/docs/currency-and-country-codes) which will be used to filter the user selected currency and get the payout method. | [optional] [default to undefined]
**payoutMethod** | **string** | The different modes of payout. | [optional] [default to undefined]
**destinationCountry** | **string** | The [2-letter ISO-2 destination country code](https://docs.nium.com/apis/docs/currency-and-country-codes). | [optional] [default to undefined]
**customerType** | **string** | The type of customer. | [optional] [default to undefined]
**beneficiaryAccountType** | **string** | The beneficiary account type. | [optional] [default to undefined]
**routingCodeType** | **string** | This field determines the routing code type for the currency. The possible values are:  • SWIFT for all cases where SWIFT is applicable  • IFSC (relevant for India)  • ACH CODE (relevant for USA)  • BSB CODE (relevant for Australia)  • SORT CODE (relevant for the UK)  • LOCATION ID (relevant for Nepal)  • BANK CODE (relevant for few countries including Canada, Hong Kong, Sri Lanka, South Korea, Pakistan, Brazil, and some more)  • TRANSIT NUMBER (relevant for Canada)  • BRANCH CODE (relevant for Sri Lanka, Vietnam, Brazil, Uruguay, Kenya and some more)  | [optional] [default to undefined]
**payoutMethodCategory** | **string** | This field further segregates the payout methods into different categories such as ach, cash, proxy_upi, wire_local. | [optional] [default to undefined]

## Example

```typescript
import { SupportedCorridorsSearchDTO } from 'nium-client';

const instance: SupportedCorridorsSearchDTO = {
    page,
    size,
    order,
    destinationCurrency,
    payoutMethod,
    destinationCountry,
    customerType,
    beneficiaryAccountType,
    routingCodeType,
    payoutMethodCategory,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

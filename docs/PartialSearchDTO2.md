# PartialSearchDTO2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countryCode** | **string** | The [2-letter ISO-2 country code](https://nium-documents.s3-eu-west-1.amazonaws.com/spend-documents/Country+Code.pdf) for which routing code search is initiated. | [default to undefined]
**searchValue** | **string** | The partial or full value of the Bank Name on which the search is initiated, for example, it could be DBS. | [default to undefined]
**currencyCode** | **string** | The [3-letter ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for which routing code search is to be initiated. | [optional] [default to undefined]
**routingCodeType** | **string** | This field determines the routing code type for the search. | [default to undefined]
**bankCode** | **string** | This field can accept the bank code of specified branch and country. | [optional] [default to undefined]
**payoutMethod** | **string** | This field can accept the different modes of payout. This field can accept one of the following values: LOCAL SWIFT WALLET CARD PROXY(upcoming feature) Default value of the parameter is LOCAL. | [optional] [default to undefined]
**bankName** | **string** | This field can accept the bank name associated with country. | [optional] [default to undefined]

## Example

```typescript
import { PartialSearchDTO2 } from 'nium-client';

const instance: PartialSearchDTO2 = {
    countryCode,
    searchValue,
    currencyCode,
    routingCodeType,
    bankCode,
    payoutMethod,
    bankName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# CardsReferenceDataApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**referenceExchangeRate**](#referenceexchangerate) | **GET** /api/v1/client/{clientHashId}/referenceRate | Reference Exchange Rate|

# **referenceExchangeRate**
> ReferenceRateResponseDto referenceExchangeRate()

This API allows you to get the reference exchange rate.

### Example

```typescript
import {
    CardsReferenceDataApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CardsReferenceDataApi(configuration);

let cardScheme: string; //This field accepts the card scheme provider name: Visa Mastercard (default to undefined)
let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let fromAmount: number; //From Amount also known as transaction amount that will be converted from the fromCurrency and to the toCurrency. (default to 0)
let fromCurrency: string; //The 3-letter [ISO-4217 currency code](/docs/getting-started/currency-and-country-codes) of the transaction currency. Should be one of the applicable EEA currencies (EUR, BGN, HRK, CZK, DKK, HUF, PLN, RON, SEK, GBP, ISK, CHF and NOK). (default to undefined)
let toCurrency: string; //The 3-letter [ISO-4217 currency code](/docs/getting-started/currency-and-country-codes) of the cardholder billing currency. Should be one of the applicable EEA currencies (EUR, BGN, HRK, CZK, DKK, HUF, PLN, RON, SEK, GBP, ISK, CHF and NOK) (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)

const { status, data } = await apiInstance.referenceExchangeRate(
    cardScheme,
    clientHashId,
    fromAmount,
    fromCurrency,
    toCurrency,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cardScheme** | [**string**] | This field accepts the card scheme provider name: Visa Mastercard | defaults to undefined|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **fromAmount** | [**number**] | From Amount also known as transaction amount that will be converted from the fromCurrency and to the toCurrency. | defaults to 0|
| **fromCurrency** | [**string**] | The 3-letter [ISO-4217 currency code](/docs/getting-started/currency-and-country-codes) of the transaction currency. Should be one of the applicable EEA currencies (EUR, BGN, HRK, CZK, DKK, HUF, PLN, RON, SEK, GBP, ISK, CHF and NOK). | defaults to undefined|
| **toCurrency** | [**string**] | The 3-letter [ISO-4217 currency code](/docs/getting-started/currency-and-country-codes) of the cardholder billing currency. Should be one of the applicable EEA currencies (EUR, BGN, HRK, CZK, DKK, HUF, PLN, RON, SEK, GBP, ISK, CHF and NOK) | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**ReferenceRateResponseDto**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


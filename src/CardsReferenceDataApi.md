# .CardsReferenceDataApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**referenceExchangeRate**](CardsReferenceDataApi.md#referenceExchangeRate) | **GET** /api/v1/client/{clientHashId}/referenceRate | Reference Exchange Rate


# **referenceExchangeRate**
> ReferenceRateResponseDto referenceExchangeRate()

This API allows you to get the reference exchange rate.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CardsReferenceDataApi(configuration);

let body:.CardsReferenceDataApiReferenceExchangeRateRequest = {
  // string | This field accepts the card scheme provider name: Visa Mastercard
  cardScheme: "cardScheme_example",
  // string | Unique customer identifier generated on customer creation.
  clientHashId: "{{clientHashId}}",
  // number | From Amount also known as transaction amount that will be converted from the fromCurrency and to the toCurrency.
  fromAmount: 0,
  // string | This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) of the transaction currency. Should be one of the applicable EEA currencies (EUR, BGN, HRK, CZK, DKK, HUF, PLN, RON, SEK, GBP, ISK, CHF and NOK).
  fromCurrency: "fromCurrency_example",
  // string | This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) of the cardholder billing currency. Should be one of the applicable EEA currencies (EUR, BGN, HRK, CZK, DKK, HUF, PLN, RON, SEK, GBP, ISK, CHF and NOK)
  toCurrency: "toCurrency_example",
  // string | Enter a unique UUID value. (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.referenceExchangeRate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cardScheme** | [**string**] | This field accepts the card scheme provider name: Visa Mastercard | defaults to undefined
 **clientHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **fromAmount** | [**number**] | From Amount also known as transaction amount that will be converted from the fromCurrency and to the toCurrency. | defaults to 0
 **fromCurrency** | [**string**] | This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) of the transaction currency. Should be one of the applicable EEA currencies (EUR, BGN, HRK, CZK, DKK, HUF, PLN, RON, SEK, GBP, ISK, CHF and NOK). | defaults to undefined
 **toCurrency** | [**string**] | This field contains the 3-letter [ISO-4217 currency code](doc:currency-and-country-codes) of the cardholder billing currency. Should be one of the applicable EEA currencies (EUR, BGN, HRK, CZK, DKK, HUF, PLN, RON, SEK, GBP, ISK, CHF and NOK) | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined


### Return type

**ReferenceRateResponseDto**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)



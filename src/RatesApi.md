# .RatesApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**aggregatedExchangeRates**](RatesApi.md#aggregatedExchangeRates) | **GET** /api/v1/exchangeRates/aggregate | Fetch historic aggregated exchange rates
[**exchangeRateV2**](RatesApi.md#exchangeRateV2) | **GET** /api/v2/exchangeRate | Exchange Rate V2


# **aggregatedExchangeRates**
> ExchangeRatesGetResponse aggregatedExchangeRates()

This API will retrieve aggregated time series of historical exchange rate.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RatesApi(configuration);

let body:.RatesApiAggregatedExchangeRatesRequest = {
  // string | This field contains the 3-letter [currency-and-country-codes](https://docs.nium.com/apis/docs/currency-and-country-codes).
  sourceCurrencyCode: "USD",
  // string | This field contains the 3-letter [currency-and-country-codes](https://docs.nium.com/apis/docs/currency-and-country-codes).
  destinationCurrencyCode: "SGD",
  // string (optional)
  authorization: "Authorization_example",
  // string (optional)
  csrfToken: "csrf_token_example",
  // Date | The start timestamp used to filter the aggregated time series. Must be in the format \'yyyy-mm-ddTHH:MM:SSZ\'. (optional)
  start: new Date('1970-01-01T00:00:00.00Z'),
  // Date | The end timestamp used to filter the aggregated time series. Must be in the format \'yyyy-mm-ddTHH:MM:SSZ\'. (optional)
  end: new Date('1970-01-01T00:00:00.00Z'),
  // Window | Specifies the field by which the results should be grouped. (optional)
  window: "1_day",
  // string | Enter a unique UUID value. (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.aggregatedExchangeRates(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceCurrencyCode** | [**string**] | This field contains the 3-letter [currency-and-country-codes](https://docs.nium.com/apis/docs/currency-and-country-codes). | defaults to undefined
 **destinationCurrencyCode** | [**string**] | This field contains the 3-letter [currency-and-country-codes](https://docs.nium.com/apis/docs/currency-and-country-codes). | defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **csrfToken** | [**string**] |  | (optional) defaults to undefined
 **start** | [**Date**] | The start timestamp used to filter the aggregated time series. Must be in the format \&#39;yyyy-mm-ddTHH:MM:SSZ\&#39;. | (optional) defaults to undefined
 **end** | [**Date**] | The end timestamp used to filter the aggregated time series. Must be in the format \&#39;yyyy-mm-ddTHH:MM:SSZ\&#39;. | (optional) defaults to undefined
 **window** | **Window** | Specifies the field by which the results should be grouped. | (optional) defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value. | (optional) defaults to undefined


### Return type

**ExchangeRatesGetResponse**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Error response when the request format is invalid. |  -  |
**401** | Error response when the request is unauthorized. |  -  |
**403** | Error response when the requested resource is forbidden. |  -  |
**500** | Error response when service has internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **exchangeRateV2**
> ExchangeRateV2ResponseDto exchangeRateV2()

This API fetches the interbank FX rate for a currency pair. Note that the rate provided does not include the Nium markup.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RatesApi(configuration);

let body:.RatesApiExchangeRateV2Request = {
  // string | This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount.
  sourceCurrencyCode: "sourceCurrencyCode_example",
  // string | This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount.
  destinationCurrencyCode: "destinationCurrencyCode_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.exchangeRateV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sourceCurrencyCode** | [**string**] | This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount. | defaults to undefined
 **destinationCurrencyCode** | [**string**] | This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**ExchangeRateV2ResponseDto**

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



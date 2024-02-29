# .QuotesPreviousVersionApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exchangeRateLockandHold**](QuotesPreviousVersionApi.md#exchangeRateLockandHold) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/lockExchangeRate | Exchange Rate Lock and Hold
[**exchangeRateWithMarkup**](QuotesPreviousVersionApi.md#exchangeRateWithMarkup) | **GET** /api/v1/client/{clientHashId}/exchangeRate | Exchange Rate With Markup


# **exchangeRateLockandHold**
> FxHoldLockResponseContent exchangeRateLockandHold()

This API allows you to fetch exchange rate, and lock and hold the rates till a certain amount of time.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .QuotesPreviousVersionApi(configuration);

let body:.QuotesPreviousVersionApiExchangeRateLockandHoldRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | This field contains the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for the destination amount.
  destinationCurrency: "destinationCurrency_example",
  // string | This field contains the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for the source amount.
  sourceCurrency: "sourceCurrency_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // number | This field is used if client wants to apply additional Fxmarkup in the exchange rate for their customer. The value should be in percentage. For example use 0.10 for 0.1% additional markup. (optional)
  additionalFxMarkup: 0,
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.exchangeRateLockandHold(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **destinationCurrency** | [**string**] | This field contains the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for the destination amount. | defaults to undefined
 **sourceCurrency** | [**string**] | This field contains the [3-letter ISO-4217 currency code](doc:currency-and-country-codes) for the source amount. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **additionalFxMarkup** | [**number**] | This field is used if client wants to apply additional Fxmarkup in the exchange rate for their customer. The value should be in percentage. For example use 0.10 for 0.1% additional markup. | (optional) defaults to 0
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**FxHoldLockResponseContent**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | BadRequest |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **exchangeRateWithMarkup**
> ExchangeRateV2ResponseDto exchangeRateWithMarkup()

This API fetches the exchange rate between source currency and destination currency. If either source or destination amount is provided, the equivalent amount will also be returned. Note that you may not send both sourceAmount and destinationAmount as query parameters together. If both are provided, sourceAmount shall be taken for conversion.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .QuotesPreviousVersionApi(configuration);

let body:.QuotesPreviousVersionApiExchangeRateWithMarkupRequest = {
  // string | Unique customer identifier generated on customer creation.
  clientHashId: "{{clientHashId}}",
  // string | This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount.
  sourceCurrencyCode: "sourceCurrencyCode_example",
  // string | This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount.
  destinationCurrencyCode: "destinationCurrencyCode_example",
  // number | An amount to be converted. This field takes precedence over destinationAmount, in case both are provided. (optional)
  sourceAmount: 3.14,
  // number | An amount to which the source is converted. It can be used to find the necessary source amount value. If both sourceAmount and destinationAmount are provided, this field is ignored. (optional)
  destinationAmount: 3.14,
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.exchangeRateWithMarkup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **sourceCurrencyCode** | [**string**] | This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount. | defaults to undefined
 **destinationCurrencyCode** | [**string**] | This field contains the 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount. | defaults to undefined
 **sourceAmount** | [**number**] | An amount to be converted. This field takes precedence over destinationAmount, in case both are provided. | (optional) defaults to undefined
 **destinationAmount** | [**number**] | An amount to which the source is converted. It can be used to find the necessary source amount value. If both sourceAmount and destinationAmount are provided, this field is ignored. | (optional) defaults to undefined
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



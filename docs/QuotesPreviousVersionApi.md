# QuotesPreviousVersionApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**exchangeRateLockandHold**](#exchangeratelockandhold) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/lockExchangeRate | Exchange Rate Lock and Hold|
|[**exchangeRateWithMarkup**](#exchangeratewithmarkup) | **GET** /api/v1/client/{clientHashId}/exchangeRate | Exchange Rate With Markup|

# **exchangeRateLockandHold**
> FxHoldLockResponseContent exchangeRateLockandHold()

This API allows you to fetch exchange rate, and lock and hold the rates till a certain amount of time.

### Example

```typescript
import {
    QuotesPreviousVersionApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new QuotesPreviousVersionApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let sourceCurrency: string; //The [3-letter ISO-4217 currency code](/docs/currency-and-country-codes) for the source amount. (default to undefined)
let destinationCurrency: string; //The [3-letter ISO-4217 currency code](/docs/currency-and-country-codes) for the destination amount. (default to undefined)
let additionalFxMarkup: number; //This field is used if client wants to apply additional Fxmarkup in the exchange rate for their customer. The value should be in percentage. For example use 0.10 for 0.1% additional markup. (optional) (default to 0)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.exchangeRateLockandHold(
    clientHashId,
    customerHashId,
    walletHashId,
    sourceCurrency,
    destinationCurrency,
    additionalFxMarkup,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **sourceCurrency** | [**string**] | The [3-letter ISO-4217 currency code](/docs/currency-and-country-codes) for the source amount. | defaults to undefined|
| **destinationCurrency** | [**string**] | The [3-letter ISO-4217 currency code](/docs/currency-and-country-codes) for the destination amount. | defaults to undefined|
| **additionalFxMarkup** | [**number**] | This field is used if client wants to apply additional Fxmarkup in the exchange rate for their customer. The value should be in percentage. For example use 0.10 for 0.1% additional markup. | (optional) defaults to 0|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**FxHoldLockResponseContent**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**409** | Conflict |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exchangeRateWithMarkup**
> ExchangeRateV2ResponseDto exchangeRateWithMarkup()

This API fetches the exchange rate between source currency and destination currency. If either source or destination amount is provided, the equivalent amount will also be returned. Note that you may not send both sourceAmount and destinationAmount as query parameters together. If both are provided, sourceAmount shall be taken for conversion.

### Example

```typescript
import {
    QuotesPreviousVersionApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new QuotesPreviousVersionApi(configuration);

let clientHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let sourceCurrencyCode: string; //The 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount. (default to undefined)
let destinationCurrencyCode: string; //The 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)
let sourceAmount: number; //An amount to be converted. This field takes precedence over destinationAmount, in case both are provided. (optional) (default to undefined)
let destinationAmount: number; //An amount to which the source is converted. It can be used to find the necessary source amount value. If both sourceAmount and destinationAmount are provided, this field is ignored. (optional) (default to undefined)

const { status, data } = await apiInstance.exchangeRateWithMarkup(
    clientHashId,
    sourceCurrencyCode,
    destinationCurrencyCode,
    xRequestId,
    sourceAmount,
    destinationAmount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **sourceCurrencyCode** | [**string**] | The 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the source amount. | defaults to undefined|
| **destinationCurrencyCode** | [**string**] | The 3-letter [ISO-4217 currency code](https://www.iso.org/iso-4217-currency-codes.html) for the destination amount. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|
| **sourceAmount** | [**number**] | An amount to be converted. This field takes precedence over destinationAmount, in case both are provided. | (optional) defaults to undefined|
| **destinationAmount** | [**number**] | An amount to which the source is converted. It can be used to find the necessary source amount value. If both sourceAmount and destinationAmount are provided, this field is ignored. | (optional) defaults to undefined|


### Return type

**ExchangeRateV2ResponseDto**

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


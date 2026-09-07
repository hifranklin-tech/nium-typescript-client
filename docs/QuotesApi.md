# QuotesApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createQuote**](#createquote) | **POST** /api/v1/client/{clientHashId}/quotes | Create Quote|
|[**fetchQuote**](#fetchquote) | **GET** /api/v1/client/{clientHashId}/quotes/{quoteId} | Fetch Quote by ID|

# **createQuote**
> QuoteCreationResponse createQuote(quoteCreationRequest)

This API creates an FX quote for a currency pair according to the desired lock period and conversion schedule. The FX rate provided by this API includes the Nium markup and can be utilized for any FX conversion within the quote\'s validity period.

### Example

```typescript
import {
    QuotesApi,
    Configuration,
    QuoteCreationRequest
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new QuotesApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let quoteCreationRequest: QuoteCreationRequest; //quoteCreationRequest

const { status, data } = await apiInstance.createQuote(
    clientHashId,
    xRequestId,
    quoteCreationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **quoteCreationRequest** | **QuoteCreationRequest**| quoteCreationRequest | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**QuoteCreationResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Error response when the request format is invalid. |  -  |
|**401** | Error response when the request is unauthorized. |  -  |
|**403** | Error response when the requested resource is forbidden. |  -  |
|**404** | Error response when the requested resource cannot be found. |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchQuote**
> QuoteCreationResponse fetchQuote()

This API allows to fetch a quote. A quote is used to identify the exchange rate, and associated markup and fees.

### Example

```typescript
import {
    QuotesApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new QuotesApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let quoteId: string; // (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)

const { status, data } = await apiInstance.fetchQuote(
    clientHashId,
    quoteId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **quoteId** | [**string**] |  | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**QuoteCreationResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Error response when the request format is invalid. |  -  |
|**401** | Error response when the request is unauthorized. |  -  |
|**403** | Error response when the requested resource is forbidden. |  -  |
|**404** | Error response when the requested resource cannot be found. |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


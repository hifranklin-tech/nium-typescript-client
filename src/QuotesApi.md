# .QuotesApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createQuote**](QuotesApi.md#createQuote) | **POST** /api/v1/client/{clientHashId}/quotes | Create Quote
[**fetchQuote**](QuotesApi.md#fetchQuote) | **GET** /api/v1/client/{clientHashId}/quotes/{quoteId} | Fetch Quote by ID


# **createQuote**
> QuoteCreationResponse createQuote(quoteCreationRequest)

This API creates an FX quote for a currency pair according to the desired lock period and conversion schedule. The FX rate provided by this API includes the Nium markup and can be utilized for any FX conversion within the quote\'s validity period.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .QuotesApi(configuration);

let body:.QuotesApiCreateQuoteRequest = {
  // string | Unique identifier of the client.
  clientHashId: "abc12345-5d6e-0a8b-c8d7-3a7706a0c312",
  // QuoteCreationRequest | quoteCreationRequest
  quoteCreationRequest: null,
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.createQuote(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quoteCreationRequest** | **QuoteCreationRequest**| quoteCreationRequest |
 **clientHashId** | [**string**] | Unique identifier of the client. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**QuoteCreationResponse**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Error response when the request format is invalid. |  -  |
**401** | Error response when the request is unauthorized. |  -  |
**403** | Error response when the requested resource is forbidden. |  -  |
**404** | Error response when the requested resource cannot be found. |  -  |
**500** | Error response when service has internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **fetchQuote**
> QuoteCreationResponse fetchQuote()

This API allows to fetch a quote. A quote is used to identify the exchange rate, and associated markup and fees.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .QuotesApi(configuration);

let body:.QuotesApiFetchQuoteRequest = {
  // string | Unique identifier of the client.
  clientHashId: "abc12345-5d6e-0a8b-c8d7-3a7706a0c312",
  // string
  quoteId: "quote_1234567890abcdefABCDEF",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.fetchQuote(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique identifier of the client. | defaults to undefined
 **quoteId** | [**string**] |  | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**QuoteCreationResponse**

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
**404** | Error response when the requested resource cannot be found. |  -  |
**500** | Error response when service has internal error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)



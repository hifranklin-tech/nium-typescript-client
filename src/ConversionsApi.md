# .ConversionsApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelConversion**](ConversionsApi.md#cancelConversion) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/conversions/{conversionId}/cancel | Cancel Conversion
[**createConversion**](ConversionsApi.md#createConversion) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/conversions | Create Conversion
[**fetchConversion**](ConversionsApi.md#fetchConversion) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/conversions/{conversionId} | Fetch Conversion by id


# **cancelConversion**
> ConversionCancelResponse cancelConversion(conversionCancelRequest)

This API allows you to cancel a conversion prior to the execution time.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConversionsApi(configuration);

let body:.ConversionsApiCancelConversionRequest = {
  // string | Unique identifier of the client.
  clientHashId: "abc12345-5d6e-0a8b-c8d7-3a7706a0c312",
  // string | Unique identifier of the customer.
  customerHashId: "abc12345-5d6e-0a8b-c8d7-3a7706a0c312",
  // string | Unique identifier of the wallet.
  walletHashId: "abc12345-5d6e-0a8b-c8d7-3a7706a0c312",
  // string
  conversionId: "conversion_1234567890abcdefABCDEF",
  // ConversionCancelRequest | ConversionCancelRequest
  conversionCancelRequest: {
    cancellationComment: "Cancelling due to change of plans.",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.cancelConversion(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversionCancelRequest** | **ConversionCancelRequest**| ConversionCancelRequest |
 **clientHashId** | [**string**] | Unique identifier of the client. | defaults to undefined
 **customerHashId** | [**string**] | Unique identifier of the customer. | defaults to undefined
 **walletHashId** | [**string**] | Unique identifier of the wallet. | defaults to undefined
 **conversionId** | [**string**] |  | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**ConversionCancelResponse**

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

# **createConversion**
> ConversionCreationResponse createConversion(conversionCreationRequest)

This API allows you to convert the balance from one currency to another within the same customer wallet either at the current market rate or using a previous exchange rate quote. This API allows you to select a settlement schedule for the conversion.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConversionsApi(configuration);

let body:.ConversionsApiCreateConversionRequest = {
  // string | Unique identifier of the client.
  clientHashId: "abc12345-5d6e-0a8b-c8d7-3a7706a0c312",
  // string | Unique identifier of the customer.
  customerHashId: "abc12345-5d6e-0a8b-c8d7-3a7706a0c312",
  // string | Unique identifier of the wallet.
  walletHashId: "abc12345-5d6e-0a8b-c8d7-3a7706a0c312",
  // ConversionCreationRequest | ConversionCreationRequest
  conversionCreationRequest: null,
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.createConversion(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversionCreationRequest** | **ConversionCreationRequest**| ConversionCreationRequest |
 **clientHashId** | [**string**] | Unique identifier of the client. | defaults to undefined
 **customerHashId** | [**string**] | Unique identifier of the customer. | defaults to undefined
 **walletHashId** | [**string**] | Unique identifier of the wallet. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**ConversionCreationResponse**

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

# **fetchConversion**
> ConversionCreationResponse fetchConversion()

This API will retrieve an existing conversion with the conversionId.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConversionsApi(configuration);

let body:.ConversionsApiFetchConversionRequest = {
  // string | Unique identifier of the client.
  clientHashId: "abc12345-5d6e-0a8b-c8d7-3a7706a0c312",
  // string | Unique identifier of the customer.
  customerHashId: "abc12345-5d6e-0a8b-c8d7-3a7706a0c312",
  // string | Unique identifier of the wallet.
  walletHashId: "abc12345-5d6e-0a8b-c8d7-3a7706a0c312",
  // string
  conversionId: "conversion_1234567890abcdefABCDEF",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.fetchConversion(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique identifier of the client. | defaults to undefined
 **customerHashId** | [**string**] | Unique identifier of the customer. | defaults to undefined
 **walletHashId** | [**string**] | Unique identifier of the wallet. | defaults to undefined
 **conversionId** | [**string**] |  | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**ConversionCreationResponse**

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



# ConversionsApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancelConversion**](#cancelconversion) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/conversions/{conversionId}/cancel | Cancel Conversion|
|[**createConversion**](#createconversion) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/conversions | Create Conversion|
|[**executeConversion**](#executeconversion) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/conversions/{conversionId}/execute | Execute Conversion|
|[**fetchConversion**](#fetchconversion) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/conversions/{conversionId} | Fetch Conversion by id|

# **cancelConversion**
> ConversionCancelResponse cancelConversion(conversionCancelRequest)

This API allows you to cancel a conversion prior to the execution time.

### Example

```typescript
import {
    ConversionsApi,
    Configuration,
    ConversionCancelRequest
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new ConversionsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation or add wallet operation. (default to undefined)
let conversionId: string; //Unique identifier of the currency conversion. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let conversionCancelRequest: ConversionCancelRequest; //ConversionCancelRequest

const { status, data } = await apiInstance.cancelConversion(
    clientHashId,
    customerHashId,
    walletHashId,
    conversionId,
    xRequestId,
    conversionCancelRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **conversionCancelRequest** | **ConversionCancelRequest**| ConversionCancelRequest | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation or add wallet operation. | defaults to undefined|
| **conversionId** | [**string**] | Unique identifier of the currency conversion. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**ConversionCancelResponse**

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

# **createConversion**
> ConversionCreationResponse createConversion(conversionCreationRequest)

This API allows you to convert the balance from one currency to another within the same customer wallet either at the current market rate or using a previous exchange rate quote. This API allows you to select a settlement schedule for the conversion.

### Example

```typescript
import {
    ConversionsApi,
    Configuration,
    ConversionCreationRequest
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new ConversionsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation or add wallet operation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let conversionCreationRequest: ConversionCreationRequest; //ConversionCreationRequest
let xIdempotencyId: string; //Unique idempotency key (UUID) to safely retry requests without duplicate side-effects. (optional) (default to undefined)

const { status, data } = await apiInstance.createConversion(
    clientHashId,
    customerHashId,
    walletHashId,
    xRequestId,
    conversionCreationRequest,
    xIdempotencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **conversionCreationRequest** | **ConversionCreationRequest**| ConversionCreationRequest | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation or add wallet operation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|
| **xIdempotencyId** | [**string**] | Unique idempotency key (UUID) to safely retry requests without duplicate side-effects. | (optional) defaults to undefined|


### Return type

**ConversionCreationResponse**

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

# **executeConversion**
> ConversionExecutionResponse executeConversion()

This endpoint triggers the manual execution of a scheduled conversion within the customer wallet. The response includes only the conversion\'s ID and its current status.

### Example

```typescript
import {
    ConversionsApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new ConversionsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation or add wallet operation. (default to undefined)
let conversionId: string; //Unique identifier of the currency conversion. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)

const { status, data } = await apiInstance.executeConversion(
    clientHashId,
    customerHashId,
    walletHashId,
    conversionId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation or add wallet operation. | defaults to undefined|
| **conversionId** | [**string**] | Unique identifier of the currency conversion. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**ConversionExecutionResponse**

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

# **fetchConversion**
> ConversionCreationResponse fetchConversion()

This API will retrieve an existing conversion with the conversionId.

### Example

```typescript
import {
    ConversionsApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new ConversionsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation or add wallet operation. (default to undefined)
let conversionId: string; //Unique identifier of the currency conversion. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)

const { status, data } = await apiInstance.fetchConversion(
    clientHashId,
    customerHashId,
    walletHashId,
    conversionId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation or add wallet operation. | defaults to undefined|
| **conversionId** | [**string**] | Unique identifier of the currency conversion. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**ConversionCreationResponse**

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


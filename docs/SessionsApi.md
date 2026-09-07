# SessionsApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createNformifySession**](#createnformifysession) | **POST** /api/v1/client/{clientHashId}/sessions | Create a Session|

# **createNformifySession**
> NformifySessionResponse createNformifySession(nformifySessionRequest)

Create a session to host a pre-built form. For more information, see [Pre-built Forms](/docs/developers/pre-built-forms).

### Example

```typescript
import {
    SessionsApi,
    Configuration,
    NformifySessionRequest
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new SessionsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let nformifySessionRequest: NformifySessionRequest; //request

const { status, data } = await apiInstance.createNformifySession(
    clientHashId,
    xRequestId,
    nformifySessionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nformifySessionRequest** | **NformifySessionRequest**| request | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**NformifySessionResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


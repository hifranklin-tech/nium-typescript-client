# SimulatorsApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**simulateAuthorization**](#simulateauthorization) | **POST** /api/v1/txn | Simulate Authorize Card Transaction|
|[**simulateClearing**](#simulateclearing) | **POST** /api/v1/settlement/run | Simulate Settlement Transaction|

# **simulateAuthorization**
> LocalIsoResponse simulateAuthorization(localIsoRequest)

Test the authorization of a card during a transaction. For more information, see [Testing Nium](/docs/testing).

### Example

```typescript
import {
    SimulatorsApi,
    Configuration,
    LocalIsoRequest
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new SimulatorsApi(configuration);

let localIsoRequest: LocalIsoRequest; //message
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.simulateAuthorization(
    localIsoRequest,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **localIsoRequest** | **LocalIsoRequest**| message | |
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**LocalIsoResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**201** | Created |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **simulateClearing**
> string simulateClearing(settlementRequestDTO)

Test the settlement of a transaction. For more information, see [Testing Nium](/docs/testing).

### Example

```typescript
import {
    SimulatorsApi,
    Configuration,
    SettlementRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new SimulatorsApi(configuration);

let settlementRequestDTO: SettlementRequestDTO; //Settlement Request
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.simulateClearing(
    settlementRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settlementRequestDTO** | **SettlementRequestDTO**| Settlement Request | |
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**201** | Created |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# ClientPrefundAccountApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**clientPrefundBalances**](#clientprefundbalances) | **GET** /api/v1/client/{clientHashId}/balances | Client Prefund Balances|
|[**clientPrefundRequest**](#clientprefundrequest) | **POST** /api/v1/client/{clientHashId}/prefund | Client Prefund Request|
|[**fetchClientPrefundRequest**](#fetchclientprefundrequest) | **GET** /api/v1/client/{clientHashId}/prefundList | Fetch Client Prefund Request|

# **clientPrefundBalances**
> Array<AccountResponseDTO> clientPrefundBalances()

This API allows you to fetch the available prefund balance for a client.

### Example

```typescript
import {
    ClientPrefundAccountApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new ClientPrefundAccountApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)

const { status, data } = await apiInstance.clientPrefundBalances(
    clientHashId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**Array<AccountResponseDTO>**

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
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientPrefundRequest**
> ClientPrefundResponseDTO clientPrefundRequest(prefundRequestDTO)

Enables the client to raise a prefund request in the system.

### Example

```typescript
import {
    ClientPrefundAccountApi,
    Configuration,
    PrefundRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new ClientPrefundAccountApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let prefundRequestDTO: PrefundRequestDTO; //Prefund Request

const { status, data } = await apiInstance.clientPrefundRequest(
    clientHashId,
    xRequestId,
    prefundRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **prefundRequestDTO** | **PrefundRequestDTO**| Prefund Request | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**ClientPrefundResponseDTO**

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
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchClientPrefundRequest**
> ClientPrefundListResponse fetchClientPrefundRequest()

This API allows you to fetch the details of client prefund requests.

### Example

```typescript
import {
    ClientPrefundAccountApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new ClientPrefundAccountApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let amount: string; //amount (optional) (default to undefined)
let bankReferenceNumber: string; //bankReferenceNumber (optional) (default to undefined)
let currency: string; //currency (optional) (default to undefined)
let endDate: string; //End date for fetching the transaction details. The format for `endDate` is YYYY-MM-DD. (optional) (default to undefined)
let order: string; //The sort order for the results. Acceptable values are ASC or DESC. The default order value is DESC. (optional) (default to 'DESC')
let page: string; //This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0. (optional) (default to undefined)
let prefundStatus: string; //prefundStatus (optional) (default to undefined)
let size: number; //The upper limit on the number of items to be fetched with each call. Integer values from 1 onwards are acceptable. Default size is 20. (optional) (default to 20)
let startDate: string; //The beginning date to start fetching transaction details. The format for `startDate` is YYYY-MM-DD. (optional) (default to undefined)
let systemReferenceNumber: string; //Filter transactions based on the `systemReferenceNumber`. (optional) (default to undefined)
let uniquePayerId: string; //uniquePayerId (optional) (default to undefined)
let uniquePaymentId: string; //uniquePaymentId (optional) (default to undefined)

const { status, data } = await apiInstance.fetchClientPrefundRequest(
    clientHashId,
    xRequestId,
    amount,
    bankReferenceNumber,
    currency,
    endDate,
    order,
    page,
    prefundStatus,
    size,
    startDate,
    systemReferenceNumber,
    uniquePayerId,
    uniquePaymentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|
| **amount** | [**string**] | amount | (optional) defaults to undefined|
| **bankReferenceNumber** | [**string**] | bankReferenceNumber | (optional) defaults to undefined|
| **currency** | [**string**] | currency | (optional) defaults to undefined|
| **endDate** | [**string**] | End date for fetching the transaction details. The format for &#x60;endDate&#x60; is YYYY-MM-DD. | (optional) defaults to undefined|
| **order** | [**string**] | The sort order for the results. Acceptable values are ASC or DESC. The default order value is DESC. | (optional) defaults to 'DESC'|
| **page** | [**string**] | This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0. | (optional) defaults to undefined|
| **prefundStatus** | [**string**] | prefundStatus | (optional) defaults to undefined|
| **size** | [**number**] | The upper limit on the number of items to be fetched with each call. Integer values from 1 onwards are acceptable. Default size is 20. | (optional) defaults to 20|
| **startDate** | [**string**] | The beginning date to start fetching transaction details. The format for &#x60;startDate&#x60; is YYYY-MM-DD. | (optional) defaults to undefined|
| **systemReferenceNumber** | [**string**] | Filter transactions based on the &#x60;systemReferenceNumber&#x60;. | (optional) defaults to undefined|
| **uniquePayerId** | [**string**] | uniquePayerId | (optional) defaults to undefined|
| **uniquePaymentId** | [**string**] | uniquePaymentId | (optional) defaults to undefined|


### Return type

**ClientPrefundListResponse**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


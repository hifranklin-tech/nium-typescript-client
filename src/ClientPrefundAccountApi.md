# .ClientPrefundAccountApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientPrefundBalances**](ClientPrefundAccountApi.md#clientPrefundBalances) | **GET** /api/v1/client/{clientHashId}/balances | Client Prefund Balances
[**clientPrefundRequest**](ClientPrefundAccountApi.md#clientPrefundRequest) | **POST** /api/v1/client/{clientHashId}/prefund | Client Prefund Request
[**fetchClientPrefundRequest**](ClientPrefundAccountApi.md#fetchClientPrefundRequest) | **GET** /api/v1/client/{clientHashId}/prefundList | Fetch Client Prefund Request


# **clientPrefundBalances**
> Array<AccountResponseDTO> clientPrefundBalances()

This API allows you to fetch the available prefund balance for a client.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClientPrefundAccountApi(configuration);

let body:.ClientPrefundAccountApiClientPrefundBalancesRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.clientPrefundBalances(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**Array<AccountResponseDTO>**

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

# **clientPrefundRequest**
> ClientPrefundResponseDTO clientPrefundRequest(prefundRequestDTO)

This API allows our clients to raise a prefund request in the system.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClientPrefundAccountApi(configuration);

let body:.ClientPrefundAccountApiClientPrefundRequestRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // PrefundRequestDTO | prefundRequestDTO
  prefundRequestDTO: {
    amount: 1000,
    bankReferenceNumber: "712347512376",
    beneAccountNumber: "800207849",
    clientAccountNumber: "615234671328",
    comments: "Client Prefund",
    currencyCode: "SGD",
    dateOfTransfer: "2019-11-24",
    niumAccountNumber: "133876812367",
    requesterId: "8123768123",
  },
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.clientPrefundRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prefundRequestDTO** | **PrefundRequestDTO**| prefundRequestDTO |
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**ClientPrefundResponseDTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
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

# **fetchClientPrefundRequest**
> any fetchClientPrefundRequest()

This API allows you to fetch the details of client prefund requests.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ClientPrefundAccountApi(configuration);

let body:.ClientPrefundAccountApiFetchClientPrefundRequestRequest = {
  // string | Unique client Id assigned to the client during the onboarding process.
  clientHashId: "{{clientHashId}}",
  // string | amount (optional)
  amount: "amount_example",
  // string | bankReferenceNumber (optional)
  bankReferenceNumber: "bankReferenceNumber_example",
  // string | currency (optional)
  currency: "currency_example",
  // string | endDate (optional)
  endDate: "endDate_example",
  // string | The sort order for the results. Acceptable values are ASC or DESC. The default order value is DESC. (optional)
  order: "DESC",
  // number | This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0. (optional)
  page: 0,
  // string | prefundStatus (optional)
  prefundStatus: "prefundStatus_example",
  // number | The upper limit on the number of items to be fetched with each call. Integer values from 1 onwards are acceptable. Default size is 20. (optional)
  size: 20,
  // string | startDate (optional)
  startDate: "startDate_example",
  // string | systemReferenceNumber (optional)
  systemReferenceNumber: "systemReferenceNumber_example",
  // string | uniquePayerId (optional)
  uniquePayerId: "uniquePayerId_example",
  // string | uniquePaymentId (optional)
  uniquePaymentId: "uniquePaymentId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.fetchClientPrefundRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client Id assigned to the client during the onboarding process. | defaults to undefined
 **amount** | [**string**] | amount | (optional) defaults to undefined
 **bankReferenceNumber** | [**string**] | bankReferenceNumber | (optional) defaults to undefined
 **currency** | [**string**] | currency | (optional) defaults to undefined
 **endDate** | [**string**] | endDate | (optional) defaults to undefined
 **order** | [**string**] | The sort order for the results. Acceptable values are ASC or DESC. The default order value is DESC. | (optional) defaults to 'DESC'
 **page** | [**number**] | This API may have lot of data in response and supports pagination. Entire response data is divided into pages with size as the upper limit on the number of data. Integer values from 0 onwards are acceptable. Default page is 0. | (optional) defaults to 0
 **prefundStatus** | [**string**] | prefundStatus | (optional) defaults to undefined
 **size** | [**number**] | The upper limit on the number of items to be fetched with each call. Integer values from 1 onwards are acceptable. Default size is 20. | (optional) defaults to 20
 **startDate** | [**string**] | startDate | (optional) defaults to undefined
 **systemReferenceNumber** | [**string**] | systemReferenceNumber | (optional) defaults to undefined
 **uniquePayerId** | [**string**] | uniquePayerId | (optional) defaults to undefined
 **uniquePaymentId** | [**string**] | uniquePaymentId | (optional) defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**any**

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



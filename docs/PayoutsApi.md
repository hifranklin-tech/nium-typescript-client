# PayoutsApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**simulateTransactionStatus**](#simulatetransactionstatus) | **POST** /api/v1/simulations/transactions/{systemReferenceNumber}/transition | Simulate Transaction Status|

# **simulateTransactionStatus**
> SimulateStatusResponseDTO simulateTransactionStatus(simulateTransactionStatusRequestDTO)

Transition the `status` of a transaction using the `nextStatus` field. For more information, see [Testing Nium](/docs/testing).

### Example

```typescript
import {
    PayoutsApi,
    Configuration,
    SimulateTransactionStatusRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new PayoutsApi(configuration);

let systemReferenceNumber: string; //System Reference Number (default to undefined)
let simulateTransactionStatusRequestDTO: SimulateTransactionStatusRequestDTO; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.simulateTransactionStatus(
    systemReferenceNumber,
    simulateTransactionStatusRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **simulateTransactionStatusRequestDTO** | **SimulateTransactionStatusRequestDTO**|  | |
| **systemReferenceNumber** | [**string**] | System Reference Number | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**SimulateStatusResponseDTO**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Response when the submitted request is invalid. |  -  |
|**401** | Response when the submitted request is unauthorized. |  -  |
|**403** | Response when the submitted request is forbidden. |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Response when an internal error occurs. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# CustomerApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchMicroDepositDetails**](#fetchmicrodepositdetails) | **GET** /api/v1/simulations/client/{clientHashId}/customer/{customerHashId}/bankAccounts/{bankAccountId}/microDeposits | Fetch micro-deposit details|
|[**simulateAccountComplianceStatus**](#simulateaccountcompliancestatus) | **POST** /api/v1/simulations/onboard/{customerHashId}/transition | Simulate Customer Onboarding Status|
|[**simulateAccountStatusV5**](#simulateaccountstatusv5) | **POST** /api/v5/simulations/onboard/{customerHashId}/transition | Simulate Customer Onboarding Status (V5)|

# **fetchMicroDepositDetails**
> MicroDepositDetails fetchMicroDepositDetails()

This API is used to fetch the micro-deposit details that were sent to a linked bank account pending authentication for E2E testing.

### Example

```typescript
import {
    CustomerApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let bankAccountId: string; //Unique identifier of the linked bank account. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)

const { status, data } = await apiInstance.fetchMicroDepositDetails(
    clientHashId,
    customerHashId,
    bankAccountId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **bankAccountId** | [**string**] | Unique identifier of the linked bank account. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


### Return type

**MicroDepositDetails**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**401** | Error response when the request is unauthorized. |  -  |
|**404** | Error response when the requested resource is not found. |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **simulateAccountComplianceStatus**
> SimulateStatusResponseDTO simulateAccountComplianceStatus(simulateAccountStatusRequestDTO)

Transition the compliance status of a customer account\'s using the `nextStatus` field. For more information, see [Testing Nium](/docs/getting-started/testing-nium).

### Example

```typescript
import {
    CustomerApi,
    Configuration,
    SimulateAccountStatusRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerApi(configuration);

let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let simulateAccountStatusRequestDTO: SimulateAccountStatusRequestDTO; //

const { status, data } = await apiInstance.simulateAccountComplianceStatus(
    customerHashId,
    xRequestId,
    simulateAccountStatusRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **simulateAccountStatusRequestDTO** | **SimulateAccountStatusRequestDTO**|  | |
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **simulateAccountStatusV5**
> SimulateStatusResponseDTO simulateAccountStatusV5(simulateAccountStatusV5RequestDTO)

This API transitions customer account\'s status and substatus based on the nextAction supplied in the request

### Example

```typescript
import {
    CustomerApi,
    Configuration,
    SimulateAccountStatusV5RequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerApi(configuration);

let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let simulateAccountStatusV5RequestDTO: SimulateAccountStatusV5RequestDTO; //

const { status, data } = await apiInstance.simulateAccountStatusV5(
    customerHashId,
    xRequestId,
    simulateAccountStatusV5RequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **simulateAccountStatusV5RequestDTO** | **SimulateAccountStatusV5RequestDTO**|  | |
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


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
|**404** | Customer not found or not a v5 customer. |  -  |
|**422** | Unprocessable Entity |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


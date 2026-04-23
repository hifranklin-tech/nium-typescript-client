# PayinApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**simulateFundingInstrumentStatusUpdate**](#simulatefundinginstrumentstatusupdate) | **POST** /api/v1/simulations/client/{clientHashId}/customer/{customerHashId}/fundingInstruments/{fundingInstrumentId}/updateStatus | Simulate Funding Instrument Status Update (Sandbox Testing)|
|[**simulatereceivepayment**](#simulatereceivepayment) | **POST** /api/v1/inward/payment/manual | Simulate Receiving a Transaction|

# **simulateFundingInstrumentStatusUpdate**
> simulateFundingInstrumentStatusUpdate(fundingInstrumentStatusUpdateRequestDTO)

Test the status change of a funding instrument. For more information, see [Testing Nium](/docs/testing).

### Example

```typescript
import {
    PayinApi,
    Configuration,
    FundingInstrumentStatusUpdateRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new PayinApi(configuration);

let clientHashId: string; //clientHashId (default to undefined)
let customerHashId: string; //customerHashId (default to undefined)
let fundingInstrumentId: string; //fundingInstrumentId (default to undefined)
let fundingInstrumentStatusUpdateRequestDTO: FundingInstrumentStatusUpdateRequestDTO; //Funding Instrument - Status Update Request
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.simulateFundingInstrumentStatusUpdate(
    clientHashId,
    customerHashId,
    fundingInstrumentId,
    fundingInstrumentStatusUpdateRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fundingInstrumentStatusUpdateRequestDTO** | **FundingInstrumentStatusUpdateRequestDTO**| Funding Instrument - Status Update Request | |
| **clientHashId** | [**string**] | clientHashId | defaults to undefined|
| **customerHashId** | [**string**] | customerHashId | defaults to undefined|
| **fundingInstrumentId** | [**string**] | fundingInstrumentId | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

void (empty response body)

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

# **simulatereceivepayment**
> PayinApiResponse2 simulatereceivepayment(inwardPaymentManualRequestDTO)

Test receiving a transaction. For more information, see [Testing Nium](/docs/testing).

### Example

```typescript
import {
    PayinApi,
    Configuration,
    InwardPaymentManualRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new PayinApi(configuration);

let inwardPaymentManualRequestDTO: InwardPaymentManualRequestDTO; //Manual Inward Payment Request
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.simulatereceivepayment(
    inwardPaymentManualRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inwardPaymentManualRequestDTO** | **InwardPaymentManualRequestDTO**| Manual Inward Payment Request | |
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**PayinApiResponse2**

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


# PayinApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**simulateFundingInstrumentStatusUpdate**](#simulatefundinginstrumentstatusupdate) | **POST** /api/v1/simulations/client/{clientHashId}/customer/{customerHashId}/fundingInstruments/{fundingInstrumentId}/updateStatus | Simulate Funding Instrument Status Update (Sandbox Testing)|
|[**simulatereceivepayment**](#simulatereceivepayment) | **POST** /api/v1/inward/payment/manual | Simulate Receiving a Transaction|

# **simulateFundingInstrumentStatusUpdate**
> simulateFundingInstrumentStatusUpdate(fundingInstrumentStatusUpdateRequestDTO)

Test the status change of a funding instrument. For more information, see [Testing Nium](/docs/getting-started/testing-nium).

### Example

```typescript
import {
    PayinApi,
    Configuration,
    FundingInstrumentStatusUpdateRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new PayinApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated on customer creation. (default to undefined)
let fundingInstrumentId: string; //The unique 36-character funding instrument identifier. The id is a bank account identifier when the funding channel is direct debit. (default to undefined)
let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let fundingInstrumentStatusUpdateRequestDTO: FundingInstrumentStatusUpdateRequestDTO; //Funding Instrument - Status Update Request

const { status, data } = await apiInstance.simulateFundingInstrumentStatusUpdate(
    clientHashId,
    customerHashId,
    fundingInstrumentId,
    xRequestId,
    fundingInstrumentStatusUpdateRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fundingInstrumentStatusUpdateRequestDTO** | **FundingInstrumentStatusUpdateRequestDTO**| Funding Instrument - Status Update Request | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined|
| **fundingInstrumentId** | [**string**] | The unique 36-character funding instrument identifier. The id is a bank account identifier when the funding channel is direct debit. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


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

Test receiving a transaction. For more information, see [Testing Nium](/docs/getting-started/testing-nium).

### Example

```typescript
import {
    PayinApi,
    Configuration,
    InwardPaymentManualRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new PayinApi(configuration);

let xRequestId: string; //Enter a unique UUID value. (default to undefined)
let inwardPaymentManualRequestDTO: InwardPaymentManualRequestDTO; //Manual Inward Payment Request

const { status, data } = await apiInstance.simulatereceivepayment(
    xRequestId,
    inwardPaymentManualRequestDTO
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inwardPaymentManualRequestDTO** | **InwardPaymentManualRequestDTO**| Manual Inward Payment Request | |
| **xRequestId** | [**string**] | Enter a unique UUID value. | defaults to undefined|


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


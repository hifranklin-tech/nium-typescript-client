# CustomerFeesApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**chargeFee**](#chargefee) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/fees | Charge Fee|

# **chargeFee**
> CustomFeeResponseDTO chargeFee(customFeeRequestDTO)

This API allows you to levy a custom fee.  ⚠️ **WARNING**   Due to regulatory requirements, using the Fee endpoint requires explicit approval from Nium. Any fees charged to customers must be disclosed in the client’s terms and conditions and approved by Nium legal and compliance. If you have any questions, please reach out to your Nium account manager or [Nium Support](mailto:support@nium.com). 

### Example

```typescript
import {
    CustomerFeesApi,
    Configuration,
    CustomFeeRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerFeesApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let customFeeRequestDTO: CustomFeeRequestDTO; //
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.chargeFee(
    clientHashId,
    customerHashId,
    walletHashId,
    customFeeRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customFeeRequestDTO** | **CustomFeeRequestDTO**|  | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**CustomFeeResponseDTO**

### Authorization

[default](../README.md#default)

### HTTP request headers

 - **Content-Type**: application/json
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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


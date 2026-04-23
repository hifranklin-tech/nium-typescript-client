# CustomerTermsAndConditionsApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**acceptCustomerTermsAndCondition**](#acceptcustomertermsandcondition) | **POST** /api/v1/client/{clientHashId}/customer/{customerHashId}/termsAndConditions | Accept Terms and Conditions|
|[**getLatestClientTermsAndConditions**](#getlatestclienttermsandconditions) | **GET** /api/v1/client/{clientHashId}/termsAndConditions | Terms and Conditions|

# **acceptCustomerTermsAndCondition**
> TermsAndConditionsAcceptResponseDTO acceptCustomerTermsAndCondition(termsAndConditionsRequestDTO)

This API updates the Terms and Conditions acceptance status for a customer

### Example

```typescript
import {
    CustomerTermsAndConditionsApi,
    Configuration,
    TermsAndConditionsRequestDTO
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerTermsAndConditionsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let termsAndConditionsRequestDTO: TermsAndConditionsRequestDTO; //Terms and Conditions Request
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.acceptCustomerTermsAndCondition(
    clientHashId,
    customerHashId,
    termsAndConditionsRequestDTO,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **termsAndConditionsRequestDTO** | **TermsAndConditionsRequestDTO**| Terms and Conditions Request | |
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**TermsAndConditionsAcceptResponseDTO**

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
|**415** | Unsupported Media Type |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLatestClientTermsAndConditions**
> TermsAndConditionsResponseDTO getLatestClientTermsAndConditions()

This API allows you to fetch the mandatory Terms and Conditions for individual customer onboarding. Refer to the [T&C flow chart](/apis/docs/customer-life-cycle#terms-and-conditions) for more details.

### Example

```typescript
import {
    CustomerTermsAndConditionsApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new CustomerTermsAndConditionsApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.getLatestClientTermsAndConditions(
    clientHashId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**TermsAndConditionsResponseDTO**

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
|**415** | Unsupported Media Type |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


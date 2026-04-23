# OpenBankingOnboardingApi

All URIs are relative to *https://gateway.nium.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**accountDetailsByCustomerConsentID**](#accountdetailsbycustomerconsentid) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/consent/account | Account Details By Customer Consent ID.|
|[**paymentDetailsbySystemReferenceNumber**](#paymentdetailsbysystemreferencenumber) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/consent/payment | Payment Details by System Reference Number|

# **accountDetailsByCustomerConsentID**
> ConsentDetailsResponse accountDetailsByCustomerConsentID()

This API allows Client to get the account details using the customer\'s consent Id for open banking, as part of the AIS flow.

### Example

```typescript
import {
    OpenBankingOnboardingApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new OpenBankingOnboardingApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let accountConsentId: string; // (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.accountDetailsByCustomerConsentID(
    clientHashId,
    customerHashId,
    walletHashId,
    accountConsentId,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **accountConsentId** | [**string**] |  | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**ConsentDetailsResponse**

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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **paymentDetailsbySystemReferenceNumber**
> OpenBankingPaymentResponseDTO paymentDetailsbySystemReferenceNumber()

This API allows Client to fetch payment details using system reference number of the transaction, as part of the Open Banking PIS flow and based on customer\'s consent.

### Example

```typescript
import {
    OpenBankingOnboardingApi,
    Configuration
} from 'nium-client';

const configuration = new Configuration();
const apiInstance = new OpenBankingOnboardingApi(configuration);

let clientHashId: string; //Unique client identifier generated and shared before the initial request. (default to undefined)
let customerHashId: string; //Unique customer identifier generated when the customer is created. (default to undefined)
let walletHashId: string; //Unique wallet identifier generated simultaneously with customer creation. (default to undefined)
let systemReferenceNumber: string; // (default to undefined)
let xRequestId: string; //Enter a universally unique identifier (UUID). (optional) (default to undefined)

const { status, data } = await apiInstance.paymentDetailsbySystemReferenceNumber(
    clientHashId,
    customerHashId,
    walletHashId,
    systemReferenceNumber,
    xRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientHashId** | [**string**] | Unique client identifier generated and shared before the initial request. | defaults to undefined|
| **customerHashId** | [**string**] | Unique customer identifier generated when the customer is created. | defaults to undefined|
| **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined|
| **systemReferenceNumber** | [**string**] |  | defaults to undefined|
| **xRequestId** | [**string**] | Enter a universally unique identifier (UUID). | (optional) defaults to undefined|


### Return type

**OpenBankingPaymentResponseDTO**

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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# .OpenBankingOnboardingApi

All URIs are relative to *https://gateway.nium.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountDetailsByCustomerConsentID**](OpenBankingOnboardingApi.md#accountDetailsByCustomerConsentID) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/consent/account | Account Details By Customer Consent ID.
[**paymentDetailsbySystemReferenceNumber**](OpenBankingOnboardingApi.md#paymentDetailsbySystemReferenceNumber) | **GET** /api/v1/client/{clientHashId}/customer/{customerHashId}/wallet/{walletHashId}/consent/payment | Payment Details by System Reference Number


# **accountDetailsByCustomerConsentID**
> ConsentDetailsResponse accountDetailsByCustomerConsentID()

This API allows Client to get the account details using the customer\'s consent Id for open banking, as part of the AIS flow.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OpenBankingOnboardingApi(configuration);

let body:.OpenBankingOnboardingApiAccountDetailsByCustomerConsentIDRequest = {
  // string | accountConsentId
  accountConsentId: "accountConsentId_example",
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.accountDetailsByCustomerConsentID(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountConsentId** | [**string**] | accountConsentId | defaults to undefined
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**ConsentDetailsResponse**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


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

# **paymentDetailsbySystemReferenceNumber**
> OpenBankingPaymentResponseDTO paymentDetailsbySystemReferenceNumber()

This API allows Client to fetch payment details using system reference number of the transaction, as part of the Open Banking PIS flow and based on customer\'s consent.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OpenBankingOnboardingApi(configuration);

let body:.OpenBankingOnboardingApiPaymentDetailsbySystemReferenceNumberRequest = {
  // string | Unique client identifier generated and shared before API handshake.
  clientHashId: "{{clientHashId}}",
  // string | Unique customer identifier generated on customer creation.
  customerHashId: "customerHashId_example",
  // string | systemReferenceNumber
  systemReferenceNumber: "systemReferenceNumber_example",
  // string | Unique wallet identifier generated simultaneously with customer creation.
  walletHashId: "walletHashId_example",
  // string | Enter a unique UUID value (optional)
  xRequestId: "{{$guid}}",
};

apiInstance.paymentDetailsbySystemReferenceNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientHashId** | [**string**] | Unique client identifier generated and shared before API handshake. | defaults to undefined
 **customerHashId** | [**string**] | Unique customer identifier generated on customer creation. | defaults to undefined
 **systemReferenceNumber** | [**string**] | systemReferenceNumber | defaults to undefined
 **walletHashId** | [**string**] | Unique wallet identifier generated simultaneously with customer creation. | defaults to undefined
 **xRequestId** | [**string**] | Enter a unique UUID value | (optional) defaults to undefined


### Return type

**OpenBankingPaymentResponseDTO**

### Authorization

[default](README.md#default)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


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


